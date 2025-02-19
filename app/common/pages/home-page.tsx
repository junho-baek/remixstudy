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
    <div className="grid grid-cols-3 gap-4 px-20">
      <div>
        <h2 className="text-5xl font-bold leading-tight tracking-tighter">
          오늘의 프로젝트
        </h2>
        <p className="text-xl font-light text-foreground">
          오늘의 프로젝트를 확인해보세요.
        </p>
      </div>
      <div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={index}
            id="productId"
            name="프로덕트 이름"
            description="프로덕트 설명"
            commentCount={10}
            viewCount={10}
            votesCount={120}
          />
        ))}
      </div>
    </div>
  );
}
