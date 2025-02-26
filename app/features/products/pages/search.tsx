import type { Route } from "~/types";

interface Props extends Route.ComponentProps {}

export function meta(): Route.MetaFunction {
  return [
    { title: "Search Products" },
    { name: "description", content: "Search for products" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export default function SearchPage({ loaderData }: Props) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">Search Products</h1>
    </div>
  );
}
