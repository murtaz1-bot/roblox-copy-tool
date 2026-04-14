# Design Brief

**Purpose**: Roblox-inspired URL copy tool — playful, energetic gaming aesthetic with minimal interactions.

## Tone & Differentiation
Energetic gaming UI with Roblox-inspired bright accents. Bold cyan primary, warm orange highlights. High-contrast dark mode for immersive gaming feel.

## Color Palette

| Token | OKLCH | Purpose |
|-------|-------|---------|
| Primary | 0.6 0.25 275 | Bright cyan — energetic primary action |
| Accent | 0.65 0.28 35 | Warm orange — gaming highlight |
| Background | 0.15 0 0 | Deep charcoal — dark gaming background |
| Card | 0.22 0 0 | Slightly elevated surface |
| Foreground | 0.98 0 0 | Pure white — high contrast text |
| Border | 0.32 0.05 280 | Subtle cyan tint for interactive zones |

## Typography
- **Display**: Bricolage Grotesque (bold, geometric, gaming-friendly)
- **Body**: DM Sans (clean, readable, modern)
- **Mono**: JetBrains Mono (code-like, URL display)

## Elevation & Depth
- **Card**: Subtle raised surface (0.22) with cyan border glow on focus
- **Button hover**: Warm orange glow effect (20px blur, 40% opacity)
- **Shadows**: Punchy, color-tinted glows instead of neutral shadows

## Structural Zones
| Zone | Background | Treatment |
|------|------------|-----------|
| Page | 0.15 0 0 | Dark, immersive gaming base |
| Card | 0.22 0 0 | Elevated, focused input zone |
| Button | Primary | Bright cyan with orange glow on hover |
| Toast | Card + Border | Minimal notification with cyan accent |

## Component Patterns
- Input field: Dark background, cyan border on focus, rounded corners (8px)
- Button: Solid primary (cyan) text on dark, rounded, glow effect on hover
- Toast: Appears from bottom, cyan accent bar, fade out animation

## Motion & Animation
- Toast entrance: Fade + slide up (300ms, ease-out)
- Toast exit: Fade out (200ms, ease-in)
- Button hover: Glow effect smoothly transitions in (150ms)
- No bouncy animations — smooth, gaming-focused motion

## Spacing & Rhythm
- Generous vertical spacing for breathing room (1.5rem padding inside card)
- Compact horizontal layout for mobile-first responsiveness
- Input field: 12px internal padding, 2px border
- Button: 12px vertical, 24px horizontal padding

## Constraints
- Dark mode only (no light theme)
- No decoration or gradients — focus on clean, high-contrast UI
- Simple layout: centered column with max-width 500px
- Gaming aesthetic through color & typography, not effects
