import { Link } from "@/types/objects/link";

export function linkResolver(link?: Link): string {

  if (!link) return "#"

  if (link.type === "external") {
    return link.url ?? "#"
  }

  if (link.type === "internal") {
    return link.url ?? "#"
  }

  return "#"
}