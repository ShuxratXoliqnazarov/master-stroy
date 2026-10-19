const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const PinIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

export const ClockIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5h4" />
  </svg>
)

export const PhoneIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
  </svg>
)

export const MailIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const PlusIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth="2" {...p}>
    <path d="M12 4v16M4 12h16" />
  </svg>
)

export const CloseIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth="2" {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const ChevronIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth="2" {...p}>
    <path d="m9 6 6 6-6 6" />
  </svg>
)

export const PlayIcon = (p) => (
  <svg viewBox="0 0 68 48" aria-hidden="true" {...p}>
    <path d="M66.5 7.7A8.5 8.5 0 0 0 60.5 1.6C55.2.2 34 .2 34 .2S12.8.2 7.5 1.6a8.5 8.5 0 0 0-6 6.1C.2 13 .2 24 .2 24s0 11 1.3 16.3a8.5 8.5 0 0 0 6 6.1C12.8 47.8 34 47.8 34 47.8s21.2 0 26.5-1.4a8.5 8.5 0 0 0 6-6.1C67.8 35 67.8 24 67.8 24s0-11-1.3-16.3Z" fill="#e05300" />
    <path d="M27 34V14l18 10-18 10Z" fill="#fff" />
  </svg>
)

/* ---- «О производстве» ---- */
export const CraneTruckIcon = (p) => (
  <svg viewBox="0 0 64 48" {...base} {...p}>
    <path d="M4 34h34V22H4zM38 34h16v-8l-5-8h-11z" />
    <path d="M42 18v8h12" />
    <circle cx="12" cy="38" r="4" /><circle cx="22" cy="38" r="4" /><circle cx="48" cy="38" r="4" />
    <path d="M14 22 30 6M30 6l4 2M34 8v8M32 16h4" />
  </svg>
)

export const BricksIcon = (p) => (
  <svg viewBox="0 0 64 48" {...base} {...p}>
    <rect x="6" y="6" width="52" height="36" />
    <path d="M6 15h52M6 24h52M6 33h52M20 6v9M38 6v9M12 15v9M30 15v9M48 15v9M20 24v9M38 24v9M12 33v9M30 33v9M48 33v9" />
  </svg>
)

export const AwardIcon = (p) => (
  <svg viewBox="0 0 64 64" {...base} {...p}>
    <circle cx="32" cy="27" r="19" />
    <path d="m32 16 3.5 7.2 7.9 1.1-5.7 5.6 1.3 7.8L32 34l-7 3.7 1.3-7.8-5.7-5.6 7.9-1.1z" />
    <path d="M18 40c-4 1-6 4-6 7l6-1 3 5 4-6M46 40c4 1 6 4 6 7l-6-1-3 5-4-6" />
  </svg>
)

/* ---- «Наши преимущества» ---- */
export const ChecklistIcon = (p) => (
  <svg viewBox="0 0 64 64" {...base} {...p}>
    <rect x="12" y="10" width="40" height="50" rx="2" />
    <path d="M24 6h16v8H24zM32 2v4M18 14v42h28" />
    <path d="m19 24 2 2 4-4M19 33l2 2 4-4M19 42l2 2 4-4M19 51l2 2 4-4M30 24h14M30 33h14M30 42h14M30 51h14" />
  </svg>
)

export const UserSearchIcon = (p) => (
  <svg viewBox="0 0 64 64" {...base} {...p}>
    <circle cx="32" cy="18" r="13" />
    <path d="M6 60a26 26 0 0 1 52 0" />
    <circle cx="32" cy="44" r="5" />
    <path d="m36 48 5 5" />
  </svg>
)

export const WorkerIcon = (p) => (
  <svg viewBox="0 0 64 64" {...base} {...p}>
    <path d="M16 24a16 16 0 0 1 32 0M14 24h36v4H14zM28 8h8v8h-8z" />
    <path d="M18 28c0 9 6 16 14 16s14-7 14-16" />
    <path d="M10 62v-6c0-6 6-10 14-12l8 8 8-8c8 2 14 6 14 12v6z" />
  </svg>
)

export const DeliveryIcon = (p) => (
  <svg viewBox="0 0 64 48" {...base} {...p}>
    <path d="M14 6h28v30H14zM42 16h10l8 10v10H42" />
    <circle cx="24" cy="40" r="4" /><circle cx="50" cy="40" r="4" />
    <path d="M2 12h8M0 20h10M4 28h6M22 21l4 4 8-8" />
  </svg>
)

export const MoneyIcon = (p) => (
  <svg viewBox="0 0 64 48" {...base} {...p}>
    <rect x="4" y="12" width="48" height="30" rx="2" />
    <path d="M10 6h48v30M8 12V8M56 6V2h4v30" />
    <circle cx="28" cy="27" r="9" />
    <path d="M31 22.5c-.8-1-2-1.5-3.3-1.5-1.8 0-3.2 1-3.2 2.6 0 3.6 6.8 2 6.8 5.6 0 1.6-1.5 2.8-3.4 2.8a4.4 4.4 0 0 1-3.6-1.7M28 19v2M28 33v2" />
    <path d="M10 17v4M10 33v4M46 17v4M46 33v4" />
  </svg>
)
