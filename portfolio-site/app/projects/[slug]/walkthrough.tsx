"use client";

import { useEffect, useState } from "react";

export type Shot = {
  src: string;
  alt: string;
};

export type WalkthroughSectionView = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  afterTable?: string[];
  flow?: string;
  tail?: string[];
  shots: Shot[];
};

export type WalkthroughView = {
  title: string;
  intro: string[];
  introShots: Shot[];
  sections: WalkthroughSectionView[];
  closingTitle?: string;
  closing?: string[];
};

function ShotButton({
  shot,
  onOpen,
}: {
  shot: Shot;
  onOpen: (shot: Shot) => void;
}) {
  return (
    <button
      className="shot-card"
      type="button"
      onClick={() => onOpen(shot)}
    >
      <span className="shot-frame">
        <img src={shot.src} alt={shot.alt} />
      </span>
      <span className="shot-caption">{shot.alt}</span>
    </button>
  );
}

export function ProjectWalkthrough({ content }: { content: WalkthroughView }) {
  const [active, setActive] = useState<Shot | null>(null);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <section className="section-shell walkthrough">
      <div className="walk-block reveal">
        <h2>{content.title}</h2>
        {content.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {content.introShots.length > 0 ? (
          <div className="walk-shots">
            {content.introShots.map((shot) => (
              <ShotButton key={shot.src} shot={shot} onOpen={setActive} />
            ))}
          </div>
        ) : null}
      </div>

      {content.sections.map((section, index) => {
        const hasShots = section.shots.length > 0;

        return (
          <div
            className={`walk-section reveal ${hasShots ? "has-shots" : ""} ${index % 2 === 1 ? "flip" : ""}`}
            key={section.title}
          >
            <div className="walk-copy">
              <h3>{section.title}</h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets?.length ? (
                <ul className="walk-bullets">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.table ? (
                <div className="walk-table-wrap">
                  <table className="walk-table">
                    <thead>
                      <tr>
                        {section.table.headers.map((header) => (
                          <th key={header}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row.join("-")}>
                          {row.map((cell) => (
                            <td key={cell}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
              {section.afterTable?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.flow ? <p className="walk-flow">{section.flow}</p> : null}
              {section.tail?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {hasShots ? (
              <div className="walk-shots">
                {section.shots.map((shot) => (
                  <ShotButton key={shot.src} shot={shot} onOpen={setActive} />
                ))}
              </div>
            ) : null}
          </div>
        );
      })}

      {content.closing?.length ? (
        <div className="walk-block reveal">
          <h2>{content.closingTitle ?? "My Contributions"}</h2>
          {content.closing.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {active ? (
        <div
          className="shot-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActive(null)}
        >
          <img src={active.src} alt={active.alt} />
          <p>{active.alt}</p>
        </div>
      ) : null}
    </section>
  );
}
