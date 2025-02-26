import type { Route } from "~/types";

interface Props extends Route.ComponentProps {}

export function meta(): Route.MetaFunction {
  return [
    { title: "Yearly Leaderboard" },
    { name: "description", content: "Yearly product rankings" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
  };
}

export default function YearlyLeaderboardPage({ loaderData }: Props) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">
        Yearly Leaderboard {loaderData.year}
      </h1>
    </div>
  );
}
