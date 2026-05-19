// Default mock for @docusaurus/Link
const Link = ({ children, to, href, className }: { children: React.ReactNode; to?: string; href?: string; className?: string }) => (
  <a href={to || href} className={className}>
    {children}
  </a>
);

export default Link;