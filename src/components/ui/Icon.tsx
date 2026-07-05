import type { SVGProps } from "react";

const ICON_PATHS: Record<string, React.ReactNode> = {
  brush: (
    <>
      <path d="M9.06 11.9 20.5 2.5c.83-.68 2.05-.62 2.8.14.76.75.82 1.97.14 2.8L14.1 16.94" />
      <path d="M9.06 11.9c-1.5 1.26-2.06 3.58-2.06 5.1 0 2-2 3-4 3 1.5 1 2 2.5 5 2.5 3.5 0 6-2.5 6-5.56" />
    </>
  ),
  diamond: (
    <>
      <path d="M6 3h12l4 6-10 12L2 9l4-6Z" />
      <path d="M2 9h20M12 3l-4 6 4 12 4-12-4-6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  ring: (
    <>
      <circle cx="12" cy="14" r="7" />
      <path d="m9 4 3 3 3-3-1.5-2h-3L9 4Z" />
    </>
  ),
  graduation: (
    <>
      <path d="m22 9-10-5L2 9l10 5 10-5Z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M22 9v6" />
    </>
  ),
  camera: (
    <>
      <path d="M14.5 4h-5L7.5 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.5l-2-3Z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
    </>
  ),
  star: (
    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2 2 9.3l6.9-1L12 2Z" />
  ),
  heart: (
    <path d="M12 21S3 14.3 3 8.6C3 5.5 5.4 3 8.4 3c1.5 0 2.8.7 3.6 1.8C12.8 3.7 14.1 3 15.6 3c3 0 5.4 2.5 5.4 5.6 0 5.7-9 12.4-9 12.4Z" />
  ),
  check: <path d="m4 12.5 5 5L20 6.5" />,
  whatsapp: (
    <>
      <path d="M12 2.8A9.2 9.2 0 0 0 4 16.5L2.8 21l4.7-1.2A9.2 9.2 0 1 0 12 2.8Z" />
      <path d="M8.6 8.4c-.3.8-.3 2 .6 3.4 1 1.5 2.2 2.6 4 3.3 1.2.4 2 .2 2.5-.4l.5-.8-2.1-1.1-.8.7c-1-.4-1.9-1.2-2.5-2.2l.6-.9-1.2-2h-1.6Z" />
    </>
  ),
  arrowRight: <path d="M5 12h14m-6-6 6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
}

export default function Icon({ name, size = 22, ...rest }: IconProps) {
  const paths = ICON_PATHS[name];
  if (!paths) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths}
    </svg>
  );
}
