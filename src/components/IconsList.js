//project imports
import IconItem from "./IconItem";
import { toolsIcons } from "@/helpers/icons";

export default function IconsList({ icons = null }) {
  const iconsList = icons || Object.values(toolsIcons);
  return iconsList.map((icon) => {
    const toolIcon = icons ? toolsIcons[icon] : icon;
    return <IconItem toolIcon={toolIcon} key={icon.name} />;
  });
}
