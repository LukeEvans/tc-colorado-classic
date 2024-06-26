"use client";

import React, { useState, useEffect } from "react";

export default function ScrollArrow(): JSX.Element | null {
  const [showScroll, setShowScroll] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 200) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showScroll) return null;

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
}
