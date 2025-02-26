import type { Route } from "~/types";

interface Props extends Route.ComponentProps {}

export function meta(): Route.MetaFunction {
  return [
    { title: "Daily Leaderboard" },
    { name: "description", content: "Daily product rankings" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    month: params.month,
    day: params.day,
  };
}

export default function DailyLeaderboardPage({ loaderData }: Props) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">
        Daily Leaderboard {loaderData.year}/{loaderData.month}/{loaderData.day}
      </h1>
    </div>
  );
}
