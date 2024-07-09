import { TPath, TRoute } from "../types";

export const routesGenerator = (paths: TPath[]) => {
  const routes: TRoute[] = paths.reduce((acc: TRoute[], item: TPath) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) =>
        acc.push({
          path: child.path!,
          element: child.element,
        })
      );
    }

    return acc;
  }, []);

  return routes;
};
