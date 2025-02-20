import { Link, type MetaFunction } from "react-router";

import { ChevronRightIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Home | Maker",
    },
    {
      name: "description",
      content: "환영합니다!",
    },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20 h-[calc(100vh-4rem)] overflow-y-auto space-y-40 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">
            오늘의 프로덕트
          </h2>
          <p className="text-xl font-light text-foreground">
            오늘의 프로덕트를 확인해보세요.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboard">
              Explore all products
              <ChevronRightIcon className="size-4 shrink-0" />
            </Link>
          </Button>
        </div>

        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
            key={`productId-${index}`}
            id={`productId-${index}`}
            name="프로덕트 이름"
            description="프로덕트 설명"
            commentCount={10}
            viewCount={10}
            votesCount={120}
          />
        ))}
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">
            최신 토론
          </h2>
          <p className="text-xl font-light text-foreground">
            우리의 커뮤니티에서 최신 토론을 확인해보세요.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community">
              Explore all discussions
              <ChevronRightIcon className="size-4 shrink-0" />
            </Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <PostCard
            key={`postId-${index}`}
            id={`postId-${index}`}
            title="무엇이 가장 생산적인 도구인가?  "
            author="junho"
            authorAvatarUrl="https://github.com/apple.png"
            category="Productivity"
            postedAt="12 hours ago"
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            IdeasGPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <IdeaCard
            key={`ideaId-${index}`}
            id={`ideaId-${index}`}
            title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business."
            viewsCount={123}
            postedAt="12 hours ago"
            likesCount={12}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your dream job.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <JobCard
            key={`jobId-${index}`}
            id={`jobId-${index}`}
            company="Meta"
            companyLogoUrl="https://github.com/facebook.png"
            companyHq="San Francisco, CA"
            title="Software Engineer"
            postedAt="12 hours ago"
            type="Full-time"
            positionLocation="Remote"
            salary="$100,000 - $120,000"
          />
        ))}
      </div>
    </div>
  );
}
