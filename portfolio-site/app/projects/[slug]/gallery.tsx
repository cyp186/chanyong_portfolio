"use client";

import { useEffect, useState } from "react";

type Shot = {
  src: string;
  alt: string;
};

type ShotGroup = {
  title?: string;
  note?: string;
  shots: Shot[];
};

export function ProjectGallery({ groups }: { groups: ShotGroup[] }) {
  const shots = groups.flatMap((group) => group.shots);
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

  if (shots.length === 0) {
    return (
      <div className="shots-empty reveal">
        <p>Screenshots coming soon.</p>
        <span>Images added to this project will appear here.</span>
      </div>
    );
  }

  return (
    <>
      {groups.map((group) => (
        <div className="shot-group" key={group.title ?? "gallery"}>
          {group.title ? (
            <div className="section-heading reveal">
              <div>
                <p className="kicker">Gallery</p>
                <h2>{group.title}</h2>
              </div>
              {group.note ? <p className="section-note">{group.note}</p> : null}
            </div>
          ) : null}
          <div className="shots-grid">
            {group.shots.map((shot, index) => (
              <button
                className={`shot-card reveal delay-${["one", "two", "three"][index % 3]}`}
                key={shot.src}
                type="button"
                onClick={() => setActive(shot)}
              >
                <span className="shot-frame">
                  <img src={shot.src} alt={shot.alt} />
                </span>
                <span className="shot-caption">{shot.alt}</span>
              </button>
            ))}
          </div>
        </div>
      ))}

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
    </>
  );
}
