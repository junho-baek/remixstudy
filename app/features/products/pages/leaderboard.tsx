import type { Route } from "~/types";

interface Props extends Route.ComponentProps {}

export function meta(): Route.MetaFunction {
  return [
    { title: "Leaderboard" },
    { name: "description", content: "Product leaderboard" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export default function LeaderboardPage({ loaderData }: Props) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">Leaderboard</h1>
    </div>
  );
}
