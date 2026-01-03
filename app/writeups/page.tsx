"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import MarkdownIt from "markdown-it";
import { MatrixBackground } from "@/components/matrix-background";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

type Tag = {
  id: string;
  name: string;
  color: string;
};

type Writeup = {
  id: string;
  title: string;
  date: string;
  tags?: string[];
};

type IndexData = {
  tags: Tag[];
  writeups: Writeup[];
};

const tagColors: Record<string, string> = {
  blue: "bg-blue-100 text-blue-800 border-blue-300",
  purple: "bg-purple-100 text-purple-800 border-purple-300",
  orange: "bg-orange-100 text-orange-800 border-orange-300",
  red: "bg-red-100 text-red-800 border-red-300",
  cyan: "bg-cyan-100 text-cyan-800 border-cyan-300",
  green: "bg-green-100 text-green-800 border-green-300",
  indigo: "bg-indigo-100 text-indigo-800 border-indigo-300",
  pink: "bg-pink-100 text-pink-800 border-pink-300",
  amber: "bg-amber-100 text-amber-800 border-amber-300",
  slate: "bg-slate-100 text-slate-800 border-slate-300",
};

export default function WriteupsPage() {
  const [indexData, setIndexData] = useState<IndexData | null>(null);
  const [selectedWriteup, setSelectedWriteup] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  // Load writeups index
  useEffect(() => {
    const loadIndex = async () => {
      try {
        const res = await fetch("/writeups/index.json");
        const data: IndexData = await res.json();
        setIndexData(data);
        if (data.writeups.length > 0) {
          setSelectedWriteup(data.writeups[0].id);
        }
      } catch (err) {
        setError("Failed to load writeups index");
        console.error(err);
      }
    };
    loadIndex();
  }, []);

  // Load markdown content
  useEffect(() => {
    if (!selectedWriteup) return;

    const loadMarkdown = async () => {
      try {
        const res = await fetch(`/writeups/${selectedWriteup}.md`);
        const text = await res.text();
        const html = md.render(text);
        setContent(html);
      } catch (err) {
        console.error("Failed to load markdown", err);
      }
    };

    loadMarkdown();
  }, [selectedWriteup]);

  const filteredWriteups =
    indexData?.writeups.filter((writeup) => {
      if (selectedTags.length === 0) return true;
      return selectedTags.some((tag) => writeup.tags?.includes(tag));
    }) || [];

  const getTagColor = (tagId: string): string => {
    const tag = indexData?.tags.find((t) => t.id === tagId);
    return tag
      ? tagColors[tag.color] || "bg-gray-100 text-gray-800"
      : "bg-gray-100 text-gray-800";
  };

  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]
    );
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!indexData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground/60">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <MatrixBackground />

      {/* Header */}
      <nav className="relative z-30 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0">
        <div className="px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-bold">Back</span>
          </Link>
          <h1 className="text-2xl font-bold text-primary">
            HackTheBox Sherlocks
          </h1>
          <div className="w-20" />
        </div>
      </nav>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-72" : "w-0"
          } transition-all duration-300 border-r border-border bg-card/30 overflow-hidden`}
        >
          <div className="p-6 space-y-6 h-full overflow-y-auto">
            <div>
              <div className="text-sm font-semibold text-primary mb-3">
                Filter by Tags
              </div>
              <div className="flex flex-wrap gap-2">
                {indexData.tags.map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => toggleTag(tag.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                      selectedTags.includes(tag.id)
                        ? tagColors[tag.color]
                        : "bg-card/50 text-foreground/70 border-border hover:border-primary"
                    }`}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
              {selectedTags.length > 0 && (
                <button
                  onClick={() => setSelectedTags([])}
                  className="text-xs text-primary/70 hover:text-primary mt-2"
                >
                  Clear filters
                </button>
              )}
            </div>

            <div>
              <div className="text-sm text-primary font-mono opacity-75 mb-4">
                {filteredWriteups.length} writeup
                {filteredWriteups.length !== 1 ? "s" : ""}
              </div>

              {filteredWriteups.length === 0 ? (
                <p className="text-sm text-foreground/50">
                  No writeups match selected tags
                </p>
              ) : (
                filteredWriteups.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setSelectedWriteup(w.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 mb-2 ${
                      selectedWriteup === w.id
                        ? "bg-primary/20 border border-primary text-primary font-semibold"
                        : "text-foreground/70 hover:text-foreground hover:bg-card/50 border border-transparent"
                    }`}
                  >
                    <div className="font-mono text-xs text-muted-foreground">
                      {w.date}
                    </div>
                    <div className="truncate text-sm mb-2">{w.title}</div>
                    <div className="flex flex-wrap gap-1">
                      {w.tags?.map((tagId) => {
                        const tag = indexData.tags.find((t) => t.id === tagId);
                        return (
                          <span
                            key={tagId}
                            className={`text-xs px-2 py-0.5 rounded border ${getTagColor(
                              tagId
                            )}`}
                          >
                            {tag?.name}
                          </span>
                        );
                      })}
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          {selectedWriteup && content ? (
            <article className="w-full px-8 md:px-12 py-12 prose-custom">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-lg text-foreground/60">
                  {filteredWriteups.length === 0
                    ? "No writeups match your filter"
                    : "No writeups available yet"}
                </p>
                <p className="text-sm text-foreground/40 mt-2">
                  {filteredWriteups.length === 0
                    ? "Try adjusting your tag filters"
                    : "Add markdown files to /public/writeups"}
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
