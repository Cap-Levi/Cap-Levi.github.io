import fs from "fs"
import path from "path"
import MarkdownIt from "markdown-it"

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: false, // Change this to false
})

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const filePath = path.join(process.cwd(), "public/writeups", `${id}.md`)

    if (!fs.existsSync(filePath)) {
      return Response.json({ error: "Not found" }, { status: 404 })
    }

    const content = fs.readFileSync(filePath, "utf-8")
    
    const html = md.render(content)

    return Response.json({ content: html })
  } catch (error) {
    console.log("Error:", error)
    return Response.json({ error: "Failed to load writeup" }, { status: 500 })
  }
}