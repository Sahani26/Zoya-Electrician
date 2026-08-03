"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function FloatingActions({ phone }: { phone: string }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowTop(window.scrollY > 160);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return <>
    <a className={`float top${showTop ? " visible" : ""}`} href="#top" aria-label="Back to top" title="Back to top">↑</a>
    <a className="float call" href={`tel:${phone}`} aria-label="Call Zoya Electrician">☎</a>
    <a className="float chat" href={`https://wa.me/${phone.slice(1)}`} aria-label="WhatsApp Zoya Electrician" title="WhatsApp Zoya Electrician"><Image src="/whatsapp.svg" alt="" width={25} height={25} priority /></a>
  </>;
}
