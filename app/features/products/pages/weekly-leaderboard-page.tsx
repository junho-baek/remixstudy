import type { Route } from "~/types";

interface Props extends Route.ComponentProps {}

export function meta(): Route.MetaFunction {
  return [
    { title: "Weekly Leaderboard" },
    { name: "description", content: "Weekly product rankings" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    week: params.week,
  };
}

export default function WeeklyLeaderboardPage({ loaderData }: Props) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">
        Weekly Leaderboard {loaderData.year} Week {loaderData.week}
      </h1>
    </div>
  );
}
