import { NavigationMenu } from "@/types/documents/navigation";
import { NavigationMenuItem } from "@/types/objects/navigation/navigation-item";

export function mapNavigation(data: any): NavigationMenu {

  return {
    _id: data._id,
    title: data.title,
    placement: data.placement,
    context: data.context,
    logo: data.logo,
    items: mapItems(data.items)
  }
}

function mapItems(items: any[]): NavigationMenuItem[] {
  return items?.map((item) => ({
    _key: item._key,
    label: item.label,
    icon: item.icon,
    link: item.link && {
      type: item.link.type,
      url: item.link.url,
      anchor: item.link.anchor,
      target: item.link.target
    },
    children: item.children ? mapItems(item.children) : []
  }))
}