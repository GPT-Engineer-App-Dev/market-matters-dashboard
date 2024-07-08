import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Menu, User } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems, rightNavItems } from "../App";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <DesktopNav />
        <MobileNav />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const DesktopNav = () => (
  <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm w-full">
    <NavItem
      to="/"
      className="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
      <span className="font-serif text-2xl">FT</span>
    </NavItem>
    {navItems.map((item) => (
      <NavItem key={item.to} to={item.to}>
        {item.title}
      </NavItem>
    ))}
    <div className="flex-grow"></div>
    <Input
      type="search"
      placeholder="Search..."
      className="w-[200px]"
    />
    <UserMenu />
  </nav>
);

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <nav className="grid gap-6 text-lg font-medium">
        <NavItem
          to="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <span className="font-serif text-2xl">FT</span>
        </NavItem>
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.title}
          </NavItem>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon">
        <User className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Subscriptions</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Log out</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors hover:text-primary",
        isActive ? "text-primary" : "text-muted-foreground",
        className
      )
    }
  >
    {children}
  </NavLink>
);

const Footer = () => (
  <footer className="border-t bg-muted/40 py-6 px-4 md:px-6">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
        <NavLink to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</NavLink>
        <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</NavLink>
        <NavLink to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</NavLink>
        <NavLink to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</NavLink>
        <NavLink to="/advertise" className="text-sm text-muted-foreground hover:text-primary">Advertise with Us</NavLink>
      </div>
      <div className="flex gap-4">
        <a href="#" className="text-muted-foreground hover:text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Layout;