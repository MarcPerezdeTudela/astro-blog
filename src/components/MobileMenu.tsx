import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { IconMenuDeep } from "@tabler/icons-react";
import { Icons } from "@/icons";

const navItems = [
  {
    name: "Posts",
    href: "/posts",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  { name: "About", href: "/about" },
];

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden" variant="ghost" size="icon">
          <IconMenuDeep />
          <span className="sr-only">Open Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-background">
        <SheetHeader>
          <SheetTitle>
            <a href="/" className="flex items-center gap-2">
              <Icons.logo className="size-6" />
              <span className="font-bold">AstroBlog</span>
            </a>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 px-4 py-8">
          {navItems.map(item => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
