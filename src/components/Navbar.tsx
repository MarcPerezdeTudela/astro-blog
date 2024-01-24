import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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

interface Props {
  activePath: string;
}
export function Navbar({ activePath }: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden gap-6 text-sm md:flex">
        {navItems.map(item => (
          <NavigationMenuItem key={item.name}>
            <NavigationMenuLink
              active={item.href === activePath}
              href={item.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80 data-[active]:text-foreground"
            >
              {item.name}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
