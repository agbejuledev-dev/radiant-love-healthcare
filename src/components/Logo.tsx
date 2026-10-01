import React from "react";

type LogoProps = {
  variant?: "default" | "reversed";
  withText?: boolean;
  className?: string;
};

const COLORS = {
  default: { navy: "#163B78", blue: "#1677D2", sub: "#425B7D", gold1: "#F4D47A", gold2: "#D09B35" },
  reversed: { navy: "#FFFFFF", blue: "#7FB0FF", sub: "#E8EEFF", gold1: "#EACB7A", gold2: "#C9A24D" },
};

export default function Logo({ variant = "default", withText = true, className }: LogoProps) {
  const c = COLORS[variant];
  const id = `gold-${variant}`;
  const font = "var(--font-montserrat), Montserrat, 'Segoe UI', Arial, sans-serif";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={withText ? "10 136 492 190" : "10 136 160 190"} className={className} role="img" aria-label="Radiant-love Healthcare Ltd.">
      <title>Radiant-love Healthcare Ltd.</title>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c.gold1} />
          <stop offset="1" stopColor={c.gold2} />
        </linearGradient>
      </defs>
      <g transform="translate(15,135) scale(0.2)">
        <circle cx="173" cy="128" r="74" fill={c.navy} />
        <circle cx="470" cy="208" r="61" fill={c.blue} />
        <path fill={c.navy} d="M357 308 C320 255 265 222 205 230 C110 245 40 320 42 410 C45 500 120 570 150 650 C175 720 170 820 122 903 C205 840 252 770 255 655 C300 670 400 740 470 830 C520 890 620 905 715 900 C640 880 590 850 540 780 C480 700 400 640 320 612 C220 590 150 520 132 440 C125 370 150 310 210 285 C270 265 330 280 357 308 Z" />
        <path fill={`url(#${id})`} d="M136 440 C150 520 225 595 335 612 L392 553 C290 566 190 530 136 440 Z" />
        <path fill={c.blue} d="M298 402 C330 350 400 298 480 297 C560 296 600 360 590 430 C580 520 510 585 410 608 C380 614 350 614 330 612 C300 600 270 585 255 570 C300 562 380 562 445 540 C505 515 532 455 515 420 C498 385 440 372 390 380 C350 386 320 394 298 402 Z" />
      </g>
      {withText && <>
        <text x="152" y="247" fontFamily={font} fontWeight={600} fontSize="51.7" textLength="337" lengthAdjust="spacingAndGlyphs">
          <tspan fill={c.navy}>Radiant-</tspan><tspan fill={c.blue}>love</tspan>
        </text>
        <text x="153" y="288" fontFamily={font} fontWeight={300} fontSize="32.5" textLength="247" lengthAdjust="spacingAndGlyphs" fill={c.sub}>Healthcare Ltd.</text>
      </>}
    </svg>
  );
}
