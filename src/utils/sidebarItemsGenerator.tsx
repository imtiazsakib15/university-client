import { NavLink } from "react-router-dom";
import { MenuProps } from "antd";
import { TPath, TSidebarItem } from "../types";

export const sidebarItemsGenerator = (paths: TPath[], role: string) => {
  const sidebarItems: MenuProps["items"] = paths.reduce(
    (acc: TSidebarItem[], item: TPath) => {
      if (item.path && item.element) {
        acc.push({
          key: item.name,
          label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
        });
      } else if (item.children) {
        acc.push({
          key: item.name,
          label: item.name,
          children: item.children.map((child) => {
            return {
              key: child.name,
              label: (
                <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
              ),
            };
          }),
        });
      }

      return acc;
    },
    []
  );
  return sidebarItems;
};
