import { Link } from "@/types/objects/link";

export function linkResolver(link: Link) {
  if (!link) return "/";

  if (link.type === "external") {
    return link.url;
  }

  return link.url;
}
