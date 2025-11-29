import React from 'react';

// SkillIcons
// This file exports a mapping of skill name -> ReactNode (SVG).
// Replace the SVGs below with exact brand SVGs if you have them.
// Recommended: paste the official SVG content (the inner <svg> element) as the value
// for the appropriate key, or import the SVG asset and use it here.

const SkillIcons: Record<string, React.ReactNode> = {
  // Default illustrative icons (non-branded). Replace with official SVGs as needed.
  Python: (
    <img src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/main/programming%20languages/python.svg" alt="Python" className="w-10 h-10" />
  ),
  Java: (
    <img src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/main/programming%20languages/java.svg" alt="Java" className="w-10 h-10" />
  ),
  React: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#20232a" />
      <g stroke="#61DAFB" strokeWidth="1.6" fill="none">
        <ellipse cx="24" cy="24" rx="12" ry="6" />
        <ellipse cx="24" cy="24" rx="12" ry="6" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="12" ry="6" transform="rotate(120 24 24)" />
        <circle cx="24" cy="24" r="2" fill="#61DAFB" stroke="none" />
      </g>
    </svg>
  ),
  JavaScript: (
    <img src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/main/programming%20languages/javascript.svg" alt="JavaScript" className="w-10 h-10" />
  ),
  HTML: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#E34F26" />
      <path d="M18 16l-6 16 10 4 10-4 6-16H18z" fill="#fff" opacity="0.95" />
    </svg>
  ),
  CSS: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#1572B6" />
      <path d="M16 14h16l-2 18-6 4-6-4-2-18z" fill="#fff" opacity="0.95" />
    </svg>
  ),
  C: (
    <img src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/main/programming%20languages/c.svg" alt="C" className="w-10 h-10" />
  ),
  Git: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#F34F29" />
      <circle cx="18" cy="18" r="3" fill="#fff" />
      <circle cx="30" cy="18" r="3" fill="#fff" />
      <path d="M18 21v6l6 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Tailwind: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#0F172A" />
      <path d="M12 30c6-8 20-6 24-2" stroke="#38BDF8" strokeWidth="2.6" strokeLinecap="round" fill="none" />
    </svg>
  ),
  MongoDB: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#47A248" />
      <path d="M24 12s4 6 2 12-6 8-6 8-4-2-6-8 2-12 2-12 4-2 8 0z" fill="#fff" opacity="0.9" />
    </svg>
  ),
  NodeJS: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#339933" />
      <path d="M24 14l8 4v12l-8 4-8-4V18l8-4z" fill="#fff" opacity="0.95" />
    </svg>
  ),
  // Language logos available in the external GitHub repo (use raw URLs for now)
  TypeScript: (
    <img src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/main/programming%20languages/typescript.svg" alt="TypeScript" className="w-10 h-10" />
  ),
  Ruby: (
    <img src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/main/programming%20languages/ruby.svg" alt="Ruby" className="w-10 h-10" />
  ),
  Rust: (
    <img src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/main/programming%20languages/rust.svg" alt="Rust" className="w-10 h-10" />
  ),
  Go: (
    <img src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/main/programming%20languages/go.svg" alt="Go" className="w-10 h-10" />
  ),
  'C#': (
    <img src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/main/programming%20languages/c%23.svg" alt="C#" className="w-10 h-10" />
  ),
  'C++': (
    <img src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/main/programming%20languages/c%2B%2B.svg" alt="C++" className="w-10 h-10" />
  ),
  Kotlin: (
    <img src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/main/programming%20languages/kotlin.svg" alt="Kotlin" className="w-10 h-10" />
  ),
  Dart: (
    <img src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/main/programming%20languages/dart.svg" alt="Dart" className="w-10 h-10" />
  ),
  Bash: (
    <img src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/main/programming%20languages/bash.svg" alt="Bash" className="w-10 h-10" />
  ),
  Haskell: (
    <img src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/main/programming%20languages/haskell.svg" alt="Haskell" className="w-10 h-10" />
  ),
  Excel: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#217346" />
      <rect x="12" y="14" width="24" height="20" rx="2" fill="#fff" opacity="0.06" />
      <text x="50%" y="58%" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">XL</text>
    </svg>
  ),
  Photoshop: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#001E36" />
      <text x="50%" y="58%" textAnchor="middle" fontSize="14" fontWeight="700" fill="#31A8FF">Ps</text>
    </svg>
  ),
  VSCode: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#007ACC" />
      <path d="M14 12l12 12-12 12V12z" fill="#fff" opacity="0.95" />
    </svg>
  ),
  ThreeJS: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#0F172A" />
      <g fill="#fff" opacity="0.95">
        <path d="M24 14l10 6v8l-10 6-10-6v-8l10-6z" />
      </g>
    </svg>
  ),
  Docker: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#2496ED" />
      <rect x="13" y="20" width="22" height="8" rx="1.6" fill="#fff" opacity="0.9" />
      <rect x="15" y="16" width="6" height="4" rx="1" fill="#fff" />
      <rect x="23" y="16" width="6" height="4" rx="1" fill="#fff" />
    </svg>
  ),
  Firebase: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFCA28" />
      <path d="M24 12l6 10-6 12-6-12 6-10z" fill="#fff" opacity="0.9" />
    </svg>
  ),
};

export default SkillIcons;

// Usage notes for maintainers:
// - To use exact brand SVGs, either replace the values above with the
//   official <svg> markup (keep the outermost <svg> element), or import
//   the SVG files (e.g. `import ReactLogo from "../../assets/skills/react.svg"`) and
//   set the mapping value to <img src={ReactLogo} alt="React" className="w-10 h-10" />.
// - Keep key names matching the `skills` array in `SkillsSection.tsx` for automatic lookup.
