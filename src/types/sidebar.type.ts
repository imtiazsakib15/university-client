import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TPath[];
};

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};
