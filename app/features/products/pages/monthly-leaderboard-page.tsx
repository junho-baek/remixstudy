import type { Route } from "~/types";

interface Props extends Route.ComponentProps {}

export function meta(): Route.MetaFunction {
  return [
    { title: "Monthly Leaderboard" },
    { name: "description", content: "Monthly product rankings" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    month: params.month,
  };
}

export default function MonthlyLeaderboardPage({ loaderData }: Props) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">
        Monthly Leaderboard {loaderData.year}/{loaderData.month}
      </h1>
    </div>
  );
}
