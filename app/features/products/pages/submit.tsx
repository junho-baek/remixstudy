import type { Route } from "~/types";

interface Props extends Route.ComponentProps {}

export function meta(): Route.MetaFunction {
  return [
    { title: "Submit Product" },
    { name: "description", content: "Submit a new product" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function SubmitPage({ loaderData, actionData }: Props) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">Submit Product</h1>
    </div>
  );
}
