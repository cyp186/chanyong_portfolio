type SiteNavProps = {
  home?: boolean;
};

export function SiteNav({ home = false }: SiteNavProps) {
  const prefix = home ? "" : "/";

  return (
    <nav className="site-nav reveal" aria-label="Main navigation">
      <a className="wordmark" href={`${prefix}#top`} aria-label="Chanyong, home">
        CY<span>.</span>
      </a>
      <div className="nav-links">
        <a href={`${prefix}#work`}>Work</a>
        <a href={`${prefix}#about`}>About</a>
        <a href={`${prefix}#contact`}>Contact</a>
      </div>
      <a
        className="nav-cta"
        href="https://github.com/cyp186"
        target="_blank"
        rel="noreferrer"
      >
        GitHub <span aria-hidden="true">↗</span>
      </a>
    </nav>
  );
}
