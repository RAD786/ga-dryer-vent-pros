export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      className={className}
    >
      <path
        d="M6.6 3.5 9 2.9c.8-.2 1.6.2 1.9 1l1 2.4c.3.7.1 1.5-.4 2l-1.1 1.1a12.4 12.4 0 0 0 4.2 4.2l1.1-1.1c.5-.5 1.3-.7 2-.4l2.4 1c.8.3 1.2 1.1 1 1.9l-.6 2.4c-.2.9-1 1.6-1.9 1.6C10.5 19 5 13.5 5 5.4c0-.9.7-1.7 1.6-1.9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
