type SiteFooterProps = {
  home?: boolean;
};

export function SiteFooter({ home = false }: SiteFooterProps) {
  return (
    <footer className="site-footer section-shell reveal">
      <p>© 2026 Chanyong. Built with care.</p>
      <div>
        <a
          href="https://www.linkedin.com/in/chanyong-park-4b2416355/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://github.com/cyp186" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={home ? "#top" : "/#top"}>Back to top ↑</a>
      </div>
    </footer>
  );
}
