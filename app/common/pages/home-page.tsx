import { Link, type MetaFunction } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  ChevronRightIcon,
  ChevronUpIcon,
  EyeIcon,
  MessageCircleIcon,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { PostCard } from "~/features/community/components/post-card";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
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
    </div>
  );
}
