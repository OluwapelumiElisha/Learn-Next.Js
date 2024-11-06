"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  { name: "Register", href: "/Register" },
  { name: "Login", href: "/Login" },
  { name: "Forget Password", href: "/ForgetPassword" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const pathname = usePathname()
    
  return (
    <>
      <div>
        {navLinks?.map((link) => {
            const isActive = pathname.startsWith(link.href)
          return(
            <Link  className={isActive ? "font-bold text-red-600 mr-4": "text-blue-500 mr-4" } href={link.href} key={link.name}>{link.name}</Link>
          );
        })}
        {children}
      </div>
    </>
  );
}
