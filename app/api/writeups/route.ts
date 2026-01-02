import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const writeupsDir = path.join(process.cwd(), "public/writeups")

    if (!fs.existsSync(writeupsDir)) {
      return Response.json([])
    }

    const files = fs
      .readdirSync(writeupsDir)
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const title = file.replace(".md", "").replace(/-/g, " ")
        const date = new Date().toISOString().split("T")[0] // Placeholder
        return {
          id: file.replace(".md", ""),
          title: title,
          date: date,
        }
      })
      .sort((a, b) => b.date.localeCompare(a.date))

    return Response.json(files)
  } catch (error) {
    return Response.json([], { status: 500 })
  }
}
