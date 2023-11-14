// Main nav renders the navitagion routes
"use client"

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface MainNavProps {
    data: Category[];
}


const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    // pathname from next/navigation - this will allow us to indicate the active route
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
      }));

    return (
        <nav
        className="mx-6 flex items-center space-x-4 lg:space-x-6"
        >
            {/* iterate over routes */}
            {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
          )}
        >
          {route.label}
      </Link>
      ))}

        </nav>
    )
};

export default MainNav;