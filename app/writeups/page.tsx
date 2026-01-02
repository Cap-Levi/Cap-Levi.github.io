"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

type Writeup = {
  id: string;
  title: string;
  date: string;
};

export default function WriteupsPage() {
  const [writeups, setWriteups] = useState<Writeup[]>([]);
  const [selectedWriteup, setSelectedWriteup] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Load writeups index
  useEffect(() => {
    const loadIndex = async () => {
      try {
        const res = await fetch("/writeups/index.json");
        const data: Writeup[] = await res.json();
        setWriteups(data);
        if (data.length > 0) {
          setSelectedWriteup(data[0].id);
        }
      } catch (err) {
        console.error("Failed to load writeups index", err);
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-30">
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
          <div className="p-6 space-y-2 h-full overflow-y-auto">
            <div className="text-sm text-primary font-mono opacity-75 mb-4">
              {writeups.length} writeups
            </div>

            {writeups.map((w) => (
              <button
                key={w.id}
                onClick={() => setSelectedWriteup(w.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  selectedWriteup === w.id
                    ? "bg-primary/20 border border-primary text-primary font-semibold"
                    : "text-foreground/70 hover:text-foreground hover:bg-card/50 border border-transparent"
                }`}
              >
                <div className="font-mono text-xs text-muted-foreground">
                  {w.date}
                </div>
                <div className="truncate">{w.title}</div>
              </button>
            ))}
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
                  No writeups available yet
                </p>
                <p className="text-sm text-foreground/40 mt-2">
                  Add markdown files to /public/writeups
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
