import type { Route } from "./+types/home";
import { Button } from "~/common/components/ui/button"; // ~는 프로젝트 루트를 의미한다.

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "~/common/components/ui/navigation-menu";

import { Switch } from "~/common/components/ui/switch";

export default function Home() {
  return (
    <>
      <div>Home</div>

      <div className="flex justify-center items-center h-screen">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/" className="w-56 block h-56">
                  adsfasdfasdf
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Switch
          onClick={() => document.documentElement.classList.toggle("dark")}
        />

        <Button>Click me</Button>
      </div>
    </>
  );
}
