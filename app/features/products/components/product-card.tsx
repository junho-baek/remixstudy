import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  commentCount: number;
  viewCount: number;
  votesCount: number;
  imageUrl?: string;
}

export function ProductCard({
  id,
  name,
  description,
  commentCount,
  viewCount,
  votesCount,
  imageUrl,
}: ProductCardProps) {
  return (
    <Link to={`/product/${id}`}>
      <Card className="w-full flex  items-center justify-between bg-transparent hover:bg-transparent/5 transition-colors">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
            {name}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-px text-muted-foreground text-xs">
              <MessageCircleIcon className="w-4 h-4" />
              <span>{commentCount}</span>
            </div>
            <div className="flex items-center gap-px text-muted-foreground text-xs">
              <EyeIcon className="w-4 h-4" />
              <span>{viewCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div
            className=" w-full bg-muted"
            style={
              imageUrl
                ? {
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : undefined
            }
          />
        </CardContent>
        <CardFooter className="py-0">
          <Button variant="outline" className="flex flex-col h-14">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span className="text-sm font-medium">{votesCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
