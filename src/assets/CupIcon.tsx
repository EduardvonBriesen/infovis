import React from "react";

interface Props {
  className?: string;
}

function CupIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="51"
      height="50"
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.6499 17.8823C25.6499 15.424 27.4349 12.9657 31.0074 12.9657C32.9017 12.9657 34.7184 12.2257 36.0579 10.9085C37.3974 9.59138 38.1499 7.80494 38.1499 5.9422V4.36149M15.6499 17.8823V16.6532C15.6499 14.6972 16.4401 12.8213 17.8466 11.4382C19.2531 10.0552 21.1608 9.27816 23.1499 9.27816V9.27816C24.476 9.27816 25.7478 8.76015 26.6854 7.8381C27.6231 6.91605 28.1499 5.66547 28.1499 4.36149V3.13232M38.1499 24.274V32.6323C38.1499 36.5443 36.5695 40.296 33.7565 43.0621C30.9435 45.8283 27.1281 47.3823 23.1499 47.3823H18.1499C14.1717 47.3823 10.3563 45.8283 7.5433 43.0621C4.73026 40.296 3.1499 36.5443 3.1499 32.6323V24.274C3.1499 23.8828 3.30794 23.5076 3.58924 23.231C3.87055 22.9544 4.25208 22.799 4.6499 22.799H36.6499C37.0477 22.799 37.4293 22.9544 37.7106 23.231C37.9919 23.5076 38.1499 23.8828 38.1499 24.274V24.274Z"
        stroke="#E94C37"
        stroke-width="4.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35.6499 22.799H41.8999C43.5575 22.799 45.1472 23.4465 46.3193 24.5991C47.4914 25.7516 48.1499 27.3149 48.1499 28.9448C48.1499 30.5748 47.4914 32.138 46.3193 33.2906C45.1472 34.4432 43.5575 35.0907 41.8999 35.0907H38.1499"
        stroke="#E94C37"
        stroke-width="4.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default CupIcon;
