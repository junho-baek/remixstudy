import type { Route } from "~/types";

interface Props extends Route.ComponentProps {}

export function meta(): Route.MetaFunction {
  return [
    { title: "Promote Product" },
    { name: "description", content: "Promote your product" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function PromotePage({ loaderData, actionData }: Props) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">Promote Your Product</h1>
    </div>
  );
}
