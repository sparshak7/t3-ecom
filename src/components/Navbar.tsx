"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";
import { cn } from "~/lib/utils";
import { Separator } from "./ui/separator";
import { DM_Sans } from "next/font/google";

type NavbarProps = {
  children: ReactNode
}
const dmSans = DM_Sans({ subsets: ["latin"] });

const Navbar = ({children}: NavbarProps) => {
  
  return (
    <div>
      <nav className={cn("text-accent-foreground dark mx-auto flex max-w-6xl items-center justify-between p-4", dmSans.className)}>
        {children}
      </nav>
      <Separator className="max-w-6xl mx-auto mb-6"/>
    </div>
  );
};

export const NavLinks = (
  props: Omit<ComponentProps<typeof Link>, "className">,
) => {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground select-none p-4 hover:rounded-3xl",
        pathname === props.href && "bg-accent text-primary rounded-3xl",
      )}
    />
  );
};
export default Navbar;
