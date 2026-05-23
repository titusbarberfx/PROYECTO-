---
name: Heritage & Steel
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#303030'
  primary-container: '#2c2c2c'
  on-primary-container: '#949393'
  inverse-primary: '#5f5e5e'
  secondary: '#e7bdb1'
  on-secondary: '#442a22'
  secondary-container: '#5d4037'
  on-secondary-container: '#d4aca0'
  tertiary: '#e9c349'
  on-tertiary: '#3c2f00'
  tertiary-container: '#cca730'
  on-tertiary-container: '#4f3d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#e7bdb1'
  on-secondary-fixed: '#2c160e'
  on-secondary-fixed-variant: '#5d4037'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  headline-xl:
    fontFamily: Domine
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Domine
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Domine
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Domine
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

The brand personality sits at the intersection of artisanal mastery and industrial grit. This design system, tailored for a premium barber shop experience, evokes a sense of "Modern Heritage"—honoring the timeless traditions of grooming while utilizing contemporary precision. The target audience consists of men who value ritual, quality, and a space that feels both masculine and meticulously curated.

The design style is **Industrial Classic**. It utilizes high-contrast visuals, sharp edges, and a structured layout that mirrors the organized nature of a professional barber’s workstation. The UI should feel substantial and grounded, avoiding overly delicate or airy trends in favor of a "built-to-last" aesthetic. Expect a heavy use of vertical lines, raw textures, and authoritative typography.

## Colors

The palette is rooted in the "Modern Heritage" concept, leaning heavily into a dark, immersive experience.

*   **Charcoal Grey (#2C2C2C):** The primary foundation. It provides a sophisticated, low-sheen industrial base for all surfaces.
*   **Deep Wood Brown (#5D4037):** Used for container backgrounds and secondary elements to introduce warmth and organic texture, reminiscent of mahogany or walnut stations.
*   **Vintage Gold (#D4AF37):** The accent color. Reserved for calls-to-action, highlights, and status indicators. It represents the "premium" aspect of the service.
*   **Off-White / Bone (#F5F5F5):** The primary text color on dark backgrounds, ensuring high legibility without the harshness of pure white.

The default mode is **Dark**, creating a focused, "man-cave" atmosphere that feels private and exclusive.

## Typography

The typography strategy balances the "Old World" authority of a slab-serif with the "New World" efficiency of a technical sans-serif.

*   **Headlines (Domine):** A sturdy, authoritative slab-serif that feels like it was etched into glass or printed on a vintage newspaper. It carries the weight of the brand.
*   **Body & UI (Hanken Grotesk):** A clean, modern grotesque that provides a sharp contrast to the headers. It ensures that service menus and booking details are easily digestible.

**Usage Note:** Use `label-caps` for section headers and small metadata to reinforce the industrial, organized feel. All Spanish copy should maintain proper accentuation even in uppercase.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a sense of structured elegance, while transitioning to a fluid, single-column model on mobile.

*   **Desktop:** 12-column grid with 24px gutters. Content is centered with wide margins to create a "gallery" feel for photography.
*   **Mobile:** 4-column fluid grid.
*   **Spacing Rhythm:** Based on an 8px baseline. Use generous padding inside containers (32px+) to signify luxury and "room to breathe."

Elements should be aligned to a strict vertical axis. Asymmetry should be avoided; the goal is a balanced, symmetrical composition that mirrors the precision of a haircut.

## Elevation & Depth

This design system avoids soft, ambient shadows. Instead, it uses **Tonal Layers** and **Low-Contrast Outlines**.

*   **Layering:** The base layer is Charcoal (#2C2C2C). Floating cards or sections use Wood Brown (#5D4037).
*   **Outlines:** Interactive elements use 1px solid borders in Vintage Gold (#D4AF37) or a lighter shade of charcoal to define boundaries.
*   **Texture:** Backgrounds should incorporate a very subtle "noise" or "dark brick" texture overlay (3-5% opacity) to prevent the UI from looking too digital or sterile.
*   **Imagery:** Use high-contrast, desaturated photography. Shadows in photos should be deep, and highlights should be crisp.

## Shapes

The shape language is **Sharp (0)**. 

To reinforce the industrial and masculine aesthetic, all buttons, input fields, cards, and images must have 90-degree corners. Rounded corners are strictly prohibited as they conflict with the "Industrial" narrative. The only exception is the "Barber Pole" decorative element, which may use a cylindrical/rounded top.

## Components

*   **Buttons:** Rectangular, sharp edges. Primary buttons use a Vintage Gold background with Charcoal text. Secondary buttons use a transparent background with a 1px Gold border.
*   **Service Cards:** Dark Wood (#5D4037) backgrounds with a top-aligned high-contrast image. Price points should be displayed in Domine Bold.
*   **Input Fields:** Charcoal background, 1px Bone (#F5F5F5) bottom-border only (minimalist/industrial look). Labels should use `label-caps`.
*   **Booking Calendar:** High-contrast grid. Selected dates are highlighted in Vintage Gold.
*   **Dividers:** Use thin, 1px horizontal lines in Gold to separate sections of text or menu items, reminiscent of vintage ledger lines.
*   **Barber Profiles:** circular or square photos with a heavy 2px Gold border. Bio text in Hanken Grotesk.