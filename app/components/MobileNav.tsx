"use client";

import { useState, useCallback } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((o) => !o), []);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        className={`nav-burger ${open ? "open" : ""}`}
        onClick={toggle}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-mobile-menu ${open ? "open" : ""}`}>
        <a href="#services" onClick={close}>Services</a>
        <a href="#portfolio" onClick={close}>R&eacute;alisations</a>
        <a href="#avis" onClick={close}>Avis</a>
        <a href="#contact" onClick={close}>Contact</a>
        <a href="#contact" className="nav-mobile-cta" onClick={close}>
          D&eacute;marrer un projet
        </a>
      </div>
    </>
  );
}
