import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

/**
 * Custom handcrafted sunflower with velvety chenille loop petals
 */
export const ChenilleSunflowerIcon: React.FC<IconProps> = ({ 
  className = "w-5 h-5", 
  size = 20, 
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Center disc with stippled texture */}
    <circle cx="12" cy="12" r="4.5" fill="#451a03" />
    <circle cx="12" cy="12" r="3.2" fill="#78350f" stroke="#b45309" strokeWidth="0.5" strokeDasharray="1 1" />
    <circle cx="10.5" cy="11" r="0.6" fill="#f59e0b" opacity="0.8" />
    <circle cx="13.2" cy="12.5" r="0.6" fill="#f59e0b" opacity="0.8" />
    <circle cx="11.8" cy="13.2" r="0.5" fill="#fef08a" opacity="0.9" />

    {/* Handcrafted chenille petals around center */}
    <g fill="#f59e0b" stroke="#b45309" strokeWidth="0.75" strokeLinejoin="round">
      {/* 12 o'clock */}
      <path d="M12 2.5C12.8 4.2 13.3 6 12 7.5C10.7 6 11.2 4.2 12 2.5Z" />
      {/* 2 o'clock */}
      <path d="M18.7 5.3C18.1 7.1 17.1 8.6 15.3 8.3C15.6 6.5 16.9 5.8 18.7 5.3Z" />
      {/* 3 o'clock */}
      <path d="M21.5 12C19.8 12.8 18 13.3 16.5 12C18 10.7 19.8 11.2 21.5 12Z" />
      {/* 4 o'clock */}
      <path d="M18.7 18.7C16.9 18.1 15.4 17.1 15.7 15.3C17.5 15.6 18.2 16.9 18.7 18.7Z" />
      {/* 6 o'clock */}
      <path d="M12 21.5C11.2 19.8 10.7 18 12 16.5C13.3 18 12.8 19.8 12 21.5Z" />
      {/* 8 o'clock */}
      <path d="M5.3 18.7C5.9 16.9 6.9 15.4 8.7 15.7C8.4 17.5 7.1 18.2 5.3 18.7Z" />
      {/* 9 o'clock */}
      <path d="M2.5 12C4.2 11.2 6 10.7 7.5 12C6 13.3 4.2 12.8 2.5 12Z" />
      {/* 10 o'clock */}
      <path d="M5.3 5.3C7.1 5.9 8.6 6.9 8.3 8.7C6.5 8.4 5.8 7.1 5.3 5.3Z" />
    </g>

    {/* Inner petal highlights */}
    <g fill="#fde68a" opacity="0.7">
      <circle cx="12" cy="5" r="0.6" />
      <circle cx="17" cy="7" r="0.6" />
      <circle cx="19" cy="12" r="0.6" />
      <circle cx="17" cy="17" r="0.6" />
      <circle cx="12" cy="19" r="0.6" />
      <circle cx="7" cy="17" r="0.6" />
      <circle cx="5" cy="12" r="0.6" />
      <circle cx="7" cy="7" r="0.6" />
    </g>
  </svg>
);

/**
 * Handcrafted heart woven with chenille loops / yarn texture
 */
export const HandcraftedHeartIcon: React.FC<IconProps> = ({ 
  className = "w-5 h-5", 
  size = 20, 
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Woven heart silhouette */}
    <path
      d="M12 20.8C11.5 20.4 3 14.8 3 8.7C3 5.3 5.6 2.7 9 2.7C10.7 2.7 11.8 3.5 12 3.8C12.2 3.5 13.3 2.7 15 2.7C18.4 2.7 21 5.3 21 8.7C21 14.8 12.5 20.4 12 20.8Z"
      fill="#b45309"
      stroke="#78350f"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    {/* Chenille thread loop stitches */}
    <path
      d="M7.5 7.5C8.5 6.5 10 7 10.5 8M13.5 8C14 7 15.5 6.5 16.5 7.5M9 11.5C10.5 13 11.5 14.5 12 16"
      stroke="#fde68a"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
  </svg>
);

/**
 * Skein of plush yarn / chenille thread
 */
export const YarnChenilleIcon: React.FC<IconProps> = ({ 
  className = "w-5 h-5", 
  size = 20, 
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Yarn ball body */}
    <ellipse cx="11" cy="13" rx="8" ry="7" fill="#fef3c7" stroke="#b45309" strokeWidth="1.4" />
    {/* Thread windings */}
    <path
      d="M5 10C8 10 13 12 17 15M6 15C9 14 13 13 18 11M9 6C11 9 12 14 11 19"
      stroke="#b45309"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* Craft needle */}
    <line x1="4" y1="4" x2="20" y2="20" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="5" cy="5" r="1" fill="#f59e0b" />
    {/* Trailing loose yarn thread */}
    <path
      d="M17 18C19 19 21 17 21 15C21 13 19 13 19 11"
      stroke="#b45309"
      strokeWidth="1.2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

/**
 * Fairy lights warm glow garland
 */
export const FairyLightsIcon: React.FC<IconProps> = ({ 
  className = "w-5 h-5", 
  size = 20, 
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Garland wire */}
    <path
      d="M2 7C6 11 10 5 14 9C18 13 20 7 22 8"
      stroke="#78350f"
      strokeWidth="1.2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Light bulbs */}
    <g fill="#f59e0b" stroke="#b45309" strokeWidth="0.8">
      <ellipse cx="6" cy="10" rx="1.8" ry="2.4" />
      <ellipse cx="12" cy="7.5" rx="1.8" ry="2.4" />
      <ellipse cx="17.5" cy="11.5" rx="1.8" ry="2.4" />
    </g>
    {/* Glow rays */}
    <circle cx="6" cy="10" r="3.5" fill="#fef08a" opacity="0.35" />
    <circle cx="12" cy="7.5" r="3.5" fill="#fef08a" opacity="0.35" />
    <circle cx="17.5" cy="11.5" r="3.5" fill="#fef08a" opacity="0.35" />
  </svg>
);

/**
 * Artisan Gift Box tied with craft ribbon
 */
export const ArtisanGiftBoxIcon: React.FC<IconProps> = ({ 
  className = "w-5 h-5", 
  size = 20, 
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Box body */}
    <rect x="4" y="9" width="16" height="12" rx="2" fill="#fffbeb" stroke="#b45309" strokeWidth="1.4" />
    {/* Box lid */}
    <rect x="3" y="7" width="18" height="3" rx="1" fill="#fef3c7" stroke="#b45309" strokeWidth="1.4" />
    {/* Ribbon vertical */}
    <rect x="11" y="7" width="2" height="14" fill="#f59e0b" />
    {/* Ribbon bow on top */}
    <path
      d="M12 7C10.5 4 8 4.5 9 6.5C9.8 8.1 11.5 7.3 12 7Z"
      fill="#f59e0b"
      stroke="#b45309"
      strokeWidth="0.75"
    />
    <path
      d="M12 7C13.5 4 16 4.5 15 6.5C14.2 8.1 12.5 7.3 12 7Z"
      fill="#f59e0b"
      stroke="#b45309"
      strokeWidth="0.75"
    />
    <circle cx="12" cy="7" r="1" fill="#b45309" />
  </svg>
);
