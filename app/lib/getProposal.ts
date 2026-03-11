import fs from "fs"
import path from "path"

export function getProposal(slug?: string) {
  if (!slug) {
    throw new Error('Slug is requeried')
  }
  const base = path.join(process.cwd(), "data/proposals", slug)

  const load = (file: string) =>
    fs.readFileSync(path.join(base, file), "utf8")

  return {
    meta: JSON.parse(load("meta.json")),
    summary: load("executive-summary.md"),
    methodology: load("methodology.md"),
    system: load("system.md"),
    phases: load("phases.md"),
    why: load("why.md"),
    nextSteps: load("next-steps.md"),
    tables: JSON.parse(load("tables.json")),
  }
}