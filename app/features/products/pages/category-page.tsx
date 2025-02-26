import type { Route } from "~/types";

interface Props extends Route.ComponentProps {}

export function meta(): Route.MetaFunction {
  return [
    { title: "Category" },
    { name: "description", content: "Products in this category" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    category: params.category,
  };
}

export default function CategoryPage({ loaderData }: Props) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">Category: {loaderData.category}</h1>
    </div>
  );
}
