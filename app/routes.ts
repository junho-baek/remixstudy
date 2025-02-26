import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("common/pages/home-page.tsx"),
  ...prefix("/products", [
    index("features/products/pages/products-page.tsx"),
    ...prefix("/leaderboard", [
      index("features/products/pages/leaderboard.tsx"),
      route(
        "yearly/:year",
        "features/products/pages/yearly-leaderboard-page.tsx"
      ),
      route(
        "monthly/:year/:month",
        "features/products/pages/monthly-leaderboard-page.tsx"
      ),
      route(
        "daily/:year/:month/:day",
        "features/products/pages/daily-leaderboard-page.tsx"
      ),
      route(
        "weekly/:year/:week",
        "features/products/pages/weekly-leaderboard-page.tsx"
      ),
    ]),
    ...prefix("/categories", [
      index("features/products/pages/categories.tsx"),
      route("/:category", "features/products/pages/category-page.tsx"),
    ]),
    route("/search", "features/products/pages/search.tsx"),
    route("/submit", "features/products/pages/submit.tsx"),
    route("/promote", "features/products/pages/promote.tsx"),
  ]),
  // route("/time-table", "common/pages/time-table.tsx"),
] satisfies RouteConfig;
