import { cls } from "@/utils";

export const Header = ({ children, className }) => {
  const headerClasses = cls("z-50 relative mx-auto w-full", className);
  return <header className={headerClasses}>{children}</header>;
};

export const Navbar = ({ children, className, isSticky }) => {
  const navbarClasses = cls("absolute flex px-6 w-full h-[3rem] items-center top-0 z-[1000]", isSticky ? "fixed bg-background text-foreground inset-0" : "text-white", className);
  return <nav className={navbarClasses}>{children}</nav>;
};

export const NavbarContent = ({ children, className }) => {
  const navbarContentClasses = cls("flex items-center justify-between h-full space-x-2 md:justify-end", className);
  return <div className={navbarContentClasses}>{children}</div>;
};
