import type { Route } from "~/types";

interface Props extends Route.ComponentProps {}

export function meta(): Route.MetaFunction {
  return [
    { title: "Categories" },
    { name: "description", content: "Browse product categories" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export default function CategoriesPage({ loaderData }: Props) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">Categories</h1>
    </div>
  );
}
