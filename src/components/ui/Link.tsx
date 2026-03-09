interface LinkProps {
  href: string;
  title: string;
  className?: string;
}

export function Link({ href, title, className }: LinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto');
  return (
    <a
      href={href}
      className={`text-[#09f] hover:underline underline-offset-2 ${className ?? ''}`}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {title}
    </a>
  );
}
