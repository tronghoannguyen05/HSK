import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...rest }: P) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const HomeIcon = (p: P) => (
  <Base {...p}>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 10v10h14V10" />
  </Base>
);
export const CardsIcon = (p: P) => (
  <Base {...p}>
    <rect x="4" y="5" width="13" height="16" rx="2" />
    <path d="M8 3h10a2 2 0 0 1 2 2v12" />
  </Base>
);
export const PenIcon = (p: P) => (
  <Base {...p}>
    <path d="M4 20l4-1 11-11-3-3L5 16z" />
    <path d="M14 7l3 3" />
  </Base>
);
export const HeadphonesIcon = (p: P) => (
  <Base {...p}>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="3" y="14" width="4" height="6" rx="1.5" />
    <rect x="17" y="14" width="4" height="6" rx="1.5" />
  </Base>
);
export const MicIcon = (p: P) => (
  <Base {...p}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 18v3" />
  </Base>
);
export const BookIcon = (p: P) => (
  <Base {...p}>
    <path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z" />
    <path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z" />
  </Base>
);
export const ChatIcon = (p: P) => (
  <Base {...p}>
    <path d="M4 5h16v11H9l-5 4z" />
    <path d="M8 9h8" />
    <path d="M8 12h5" />
  </Base>
);
export const BackIcon = (p: P) => (
  <Base strokeWidth={2} {...p}>
    <path d="M15 6l-6 6 6 6" />
  </Base>
);
export const ArrowIcon = (p: P) => (
  <Base strokeWidth={2} {...p}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </Base>
);
export const SpeakerIcon = (p: P) => (
  <Base {...p}>
    <path d="M4 9v6h4l5 4V5L8 9z" />
    <path d="M16.5 8.5a5 5 0 0 1 0 7" />
    <path d="M19 6a8.5 8.5 0 0 1 0 12" />
  </Base>
);
export const ReplayIcon = (p: P) => (
  <Base strokeWidth={2} {...p}>
    <path d="M4 12a8 8 0 1 0 3-6.2" />
    <path d="M4 4v4h4" />
  </Base>
);
export const FlameIcon = (p: P) => (
  <Base strokeWidth={2} {...p}>
    <path d="M12 3c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-3.5 2-5 1 1.5 2 2 3 2 0-3-1-5 0-7z" />
  </Base>
);
export const CheckIcon = (p: P) => (
  <Base strokeWidth={2.4} {...p}>
    <path d="M5 12l5 5 9-10" />
  </Base>
);
