import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";

interface PostCardProps {
  id: string;
  title: string;
  author: string;
  authorAvatarUrl: string;
  category: string;
  postedAt: string;
}

export function PostCard({
  id,
  title,
  author,
  authorAvatarUrl,
  category,
  postedAt,
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`}>
      <Card className="bg-transparent hover:bg-transparent/5 transition-colors ">
        <CardHeader className="flex flex-row gap-2 items-center">
          <Avatar className="size-14">
            <AvatarImage src={authorAvatarUrl} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
              {title}
            </CardTitle>
            <div className="flex gap-2 text-sm text-muted-foreground leading-tight">
              <span>{author} on</span>
              <span>{category}</span>
              <span>·</span>
              <span>{postedAt}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link" asChild>
            <Link to={`/community/${id}`}>
              Reply
              <ChevronRightIcon className="size-4 shrink-0" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
