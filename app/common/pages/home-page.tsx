import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/common/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/common/components/ui/dialog";

export default function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">환영합니다 👋</h1>
          <p className="text-xl text-muted-foreground max-w-[600px] italic shadow-xl hover:shadow-2xl transition-all duration-300">
            최고의 경험을 제공하는 플랫폼에 오신 것을 환영합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          <Card>
            <CardHeader>
              <CardTitle>빠른 시작</CardTitle>
              <CardDescription>몇 번의 클릭만으로 시작하세요</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                직관적인 인터페이스로 누구나 쉽게 사용할 수 있습니다.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">자세히 보기</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>강력한 기능</CardTitle>
              <CardDescription>다양한 기능을 경험해보세요</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                필요한 모든 도구가 준비되어 있습니다.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">기능 살펴보기</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>24/7 지원</CardTitle>
              <CardDescription>
                언제든 도움을 받으실 수 있습니다
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                전문가팀이 항상 대기하고 있습니다.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">문의하기</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex gap-4">
          <Button size="lg">시작하기</Button>
          <Button variant="outline" size="lg">
            더 알아보기
          </Button>
        </div>
      </div>
    </div>
  );
}
