import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("common/pages/home-page.tsx"),
  route("/time-table", "common/pages/time-table.tsx"),
] satisfies RouteConfig;
