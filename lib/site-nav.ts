export const siteNavLinks = [
  { href: "/internships", label: "Internships" },
  { href: "/cap", label: "CAP" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
] as const;

export type SiteNavLink = (typeof siteNavLinks)[number];

export function isActiveNavLink(pathname: string, href: SiteNavLink["href"]): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}
