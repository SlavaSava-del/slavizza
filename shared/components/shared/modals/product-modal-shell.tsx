"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import { useClickAway } from "react-use";

interface ProductModalShellProps {
  children: ReactNode;
}

gsap.registerPlugin(useGSAP);

export function ProductModalShell({ children }: ProductModalShellProps) {
  const modal = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const background = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useClickAway(modal, () => router.push("/", { scroll: false }));

  useGSAP(
    () => {
      gsap.fromTo(
        background.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power1.inOut" },
      );

      gsap.from(modal.current, {
        y: () => window.innerHeight,
        duration: 0.5,
        ease: "none",
      });
    },
    { scope: container, revertOnUpdate: true },
  );

  useEffect(() => {
    const mainOverflow = document.body.style.overflow;
    const html = document.documentElement;

    document.body.style.overflow = "hidden";
    html.classList.add("modal-open");

    return () => {
      html.classList.remove("modal-open");
      document.body.style.overflow = mainOverflow;
    };
  }, []);

  return (
    <div ref={container}>
      <div ref={background} className="fixed inset-0 bg-black/50 z-30" />

      <div
        ref={modal}
        className="fixed rounded-3xl w-235 h-150 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
      >
        {children}

        <button onClick={() => router.push("/", { scroll: false })}>
          <img
            width={50}
            height={50}
            src="/cross.svg"
            className="absolute top-0.5 p-3 -right-17 bg-white transition-all duration-200 rounded-full hover:bg-[#F9FAFB]"
          />
        </button>
      </div>
    </div>
  );
}
