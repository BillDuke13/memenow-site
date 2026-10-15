---
version: alpha
name: mmn-scroll-v1
description: A native vertical cascade of sequential scenes with planar paper-and-ink surfaces.
colors:
  primary: '#825F1E'
  on-primary: '#FBFDFF'
  secondary: '#1B2A4A'
  on-secondary: '#F2F5F9'
  tertiary: '#E8E2D0'
  on-tertiary: '#1B2A4A'
  surface: '#F2F5F9'
  surface-raised: '#FBFDFF'
  surface-sunken: '#DCE3EC'
  on-surface: '#1B2A4A'
  on-surface-muted: '#5A6576'
  outline: '#D6DBE3'
  outline-strong: '#B6BFC9'
  focus: '#825F1E'
  success: '#2C7040'
  on-success: '#FBFDFF'
  warning: '#744E04'
  on-warning: '#FBFDFF'
  error: '#B3261E'
  on-error: '#FBFDFF'
  info: '#355F8A'
  on-info: '#FBFDFF'
  night-surface: '#0E1523'
  night-surface-raised: '#1B2A4A'
  night-surface-sunken: '#070C17'
  night-on-surface: '#DDE6EE'
  night-on-surface-muted: '#8F99A6'
  night-outline: '#373D48'
  night-primary: '#E8E2D0'
  night-on-primary: '#1B2A4A'
  night-secondary: '#DDE6EE'
  night-on-secondary: '#0E1523'
  night-focus: '#E8E2D0'
  night-error: '#CF413A'
  night-on-error: '#FBFDFF'
typography:
  display-xl:
    fontFamily: '"Newsreader Variable", "Newsreader", "Noto Serif SC", Georgia, serif'
    fontSize: 4.5rem
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.045em
  headline-lg:
    fontFamily: '"Newsreader Variable", "Newsreader", "Noto Serif SC", Georgia, serif'
    fontSize: 2.75rem
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-md:
    fontFamily: '"Newsreader Variable", "Newsreader", "Noto Serif SC", Georgia, serif'
    fontSize: 2rem
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.015em
  body-lg:
    fontFamily: '"Inter Variable", "Inter", "Noto Sans SC", system-ui, sans-serif'
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: '"Inter Variable", "Inter", "Noto Sans SC", system-ui, sans-serif'
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.65
  label-md:
    fontFamily: '"Inter Variable", "Inter", "Noto Sans SC", system-ui, sans-serif'
    fontSize: 0.78rem
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.14em
  caption:
    fontFamily: '"Inter Variable", "Inter", "Noto Sans SC", system-ui, sans-serif'
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.4
rounded:
  none: 0px
  action: 2px
  input: 3px
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  micro: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  chapter: 96px
  gutter: 24px
  container-narrow: 720px
  container-max: 1200px
  container-wide: 1400px
components:
  page-canvas:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.none}'
  hero-title:
    textColor: '{colors.on-surface}'
    typography: '{typography.display-xl}'
  chapter-title:
    textColor: '{colors.on-surface}'
    typography: '{typography.headline-lg}'
  body-copy:
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
  metadata:
    textColor: '{colors.on-surface-muted}'
    typography: '{typography.caption}'
  action-primary:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.action}'
    height: 44px
    padding: 12px 24px
  action-primary-hover:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.on-secondary}'
  action-secondary:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.on-secondary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.action}'
    height: 44px
    padding: 12px 24px
  action-secondary-hover:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
  paper-panel:
    backgroundColor: '{colors.surface-raised}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    padding: 24px
  paper-well:
    backgroundColor: '{colors.surface-sunken}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.input}'
    padding: 16px
  input-field:
    backgroundColor: '{colors.surface-raised}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.input}'
    padding: 12px 16px
    height: 44px
  focus-indicator:
    backgroundColor: '{colors.focus}'
    size: 2px
  divider:
    backgroundColor: '{colors.outline}'
    height: 1px
    width: 100%
  rule-strong:
    backgroundColor: '{colors.outline-strong}'
    height: 1px
    width: 100%
  status-success:
    backgroundColor: '{colors.success}'
    textColor: '{colors.on-success}'
  status-warning:
    backgroundColor: '{colors.warning}'
    textColor: '{colors.on-warning}'
  status-error:
    backgroundColor: '{colors.error}'
    textColor: '{colors.on-error}'
  status-info:
    backgroundColor: '{colors.info}'
    textColor: '{colors.on-info}'
  night-canvas:
    backgroundColor: '{colors.night-surface}'
    textColor: '{colors.night-on-surface}'
    typography: '{typography.body-md}'
  night-panel:
    backgroundColor: '{colors.night-surface-raised}'
    textColor: '{colors.night-on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    padding: 24px
  night-well:
    backgroundColor: '{colors.night-surface-sunken}'
    textColor: '{colors.night-on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.input}'
    padding: 16px
  night-metadata:
    textColor: '{colors.night-on-surface-muted}'
    typography: '{typography.caption}'
  night-divider:
    backgroundColor: '{colors.night-outline}'
    height: 1px
    width: 100%
  night-action-secondary:
    backgroundColor: '{colors.night-secondary}'
    textColor: '{colors.night-on-secondary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.action}'
    height: 44px
    padding: 12px 24px
  night-status-error:
    backgroundColor: '{colors.night-error}'
    textColor: '{colors.night-on-error}'
  night-action-primary:
    backgroundColor: '{colors.night-surface}'
    textColor: '{colors.night-on-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.action}'
    height: 44px
    padding: 12px 24px
  night-action-primary-hover:
    backgroundColor: '{colors.night-primary}'
    textColor: '{colors.night-on-primary}'
  night-focus-indicator:
    backgroundColor: '{colors.night-focus}'
    size: 2px
---

# mmn-scroll-v1

## Overview

`mmn-scroll-v1` is a native vertical cascade of chapters. A product that
conforms to it is read by scrolling through complete scenes that hand off.
It is not a dashboard of cards, not an ancient-scroll illustration, not a
3D theater, and not one painting pinned behind every route.

The grammar is the language:

- the document scroll is the only coordinate system;
- the unit of meaning is a chapter;
- each story chapter is a scene, and scenes change in sequence;
- one viewport holds one principal focus.

The accent of that grammar is planar and material. Surfaces behave like paper
written with ink: a continuous floor, a slightly lifted sheet, a sunken well.
Motion is short. Depth is two or three parallel planes. Atmosphere may fill
the viewport while type and controls stay few. Type and controls are code,
not pictures.

A single sticky world underlay (the memenow-site ink-wash canvas, a WebGL
volume, a generative oil) is a product asset. It is not the definition of
the language. A conforming product may change its paintings, marks, and
typefaces and still be `mmn-scroll-v1` if the cascade, the paper logic, and
the locked metrics remain.

This file is a seed for humans and coding agents. Exact values live in the
YAML. Prose says why they exist and what they forbid. Adapters map the seed
to a product; they do not invent a third grammar.

The capitalized terms **MUST**, **SHOULD**, and **MUST NOT** mark conformance.

## Colors

The front matter is the sole source for hex values. Prose assigns roles.

The seed palette is the memenow-site light climate: mist paper
`{colors.surface}`, indigo ink `{colors.on-surface}`, and a single warm
moon-gold `{colors.primary}` for focus and scarce emphasis. Raised and sunken
surfaces stay in the same paper family. Night tokens are the same roles on a
deep indigo stage; `{colors.night-primary}` is moonlight, not neon.

A product adapter MAY remap hex values. It MUST keep the roles: paper floor,
ink structure, one warm note, status colors that are not decorative. It MUST
NOT promote a product overlay (five-element hues, a logo coral, a ritual red)
into `{colors.primary}` for body text or every control.

- One scene uses one accent and at most one supporting backlight.
- Text and fill pairs MUST meet WCAG 2.2 AA (4.5:1 small text, 3:1 large text
  and UI).
- Focus uses `{colors.focus}` or `{colors.night-focus}` and MUST remain
  distinct from both the control and its ground.
- Gradients MAY wash light through a plane. They MUST NOT become a purple
  hero wash, a rainbow, or an ungoverned brand.

## Typography

Newsreader is the narrative voice in this seed: display and headlines for
chapter titles and rare pull quotes. Inter is the operating voice: body,
labels, navigation, forms. Adapters MAY substitute licensed families if they
preserve serif-for-story and sans-for-tools.

These families are locked choices, not a prompt to "pick a more interesting
font." Do not swap in Fraunces, Playfair, Space Grotesk, or another Inter as
a taste upgrade. Space Grotesk and PuHuiTi belong to a product adapter, not
to this seed's display role.

Label type is small, medium weight, and tracked (`{typography.label-md}`).
It MAY be uppercase for Latin. Do not force uppercase onto scripts that have
no case. Latin measure SHOULD stay near 45–70 characters. CJK SHOULD use a
shorter measure.

Word-by-word English reveals MUST NOT be copied onto Chinese or other
unspaced scripts. Use a line or block reveal.

## Layout

The topology is:

`stage -> chapter -> beat -> pivot -> resolution`

- **Stage:** the first viewport names the product, the value, and the action.
- **Chapter:** one proposition in a semantic section, with a stable id.
- **Beat:** a change of density or alignment inside the chapter.
- **Pivot:** a decision or the primary action.
- **Resolution:** the outcome, then control returns to the user.

The canonical story chapter is one full-bleed planar atmosphere and sparse
type. Consecutive story chapters SHOULD change the atmosphere. Pinning one
landscape, world canvas, or oil behind every chapter is an adapter choice,
not the default. What any image depicts is an asset. The chapter MUST still
make sense as HTML without the image.

Navigation stays small. It MUST NOT turn every control into a capsule. A
footer MAY be a wide atmosphere band with links on paper, not a four-column
SaaS footer. A three-column glass card grid is not a chapter.

Type MAY sit in a small clearing or in one fog slot. A stage SHOULD fill the
first viewport. Later chapters MAY be shorter, but each viewport still holds
one principal focus.

Desktop MAY pin one illustration beside scrolling prose when a chapter needs
longer reading (legal, settings, long product copy). That is a beat, not the
story default. Mobile, zoom, and reduced-motion layouts MUST become one
column. Scene height follows content.

Card grids are not the default. Use them only when comparison requires them.
A chapter SHOULD make one promise and offer one primary action.

Containers in this seed: `{spacing.container-narrow}`,
`{spacing.container-max}`, `{spacing.container-wide}`. Do not default to
`max-w-7xl`. Spacing is a 4px module: tight inside controls, loose between
chapters. Do not apply the same `16px` gap everywhere.

## Elevation & Depth

Depth is planar, not cinematic.

1. the paper canvas;
2. the content or atmosphere plane;
3. at most one active fold, slot, or foreground plane.

A dialog or sheet may sit above these. It is not a fourth decorative layer.

Occlusion, a small paper gap, and a restrained shadow that has a material
cause are enough. Do not stack glass, long parallax, or floating card
shadows.

Fog, veil, and a clearing wash are style, not a new world. They MAY open a
single slot — a sharper band through a frosted plane — so one window shows
through. Type MAY live in that slot. They MUST NOT frost the whole
interface or put a glass card on every block. Prefer a mask or a static
overlay over a page-wide `backdrop-filter`.

## Shapes

Controls are cut, not pilled. Action corners are `{rounded.action}` (2px).
Inputs are `{rounded.input}` (3px). Media MAY use `{rounded.md}` (8px).
`{rounded.full}` is reserved for avatars, counts, and one persistent dock.
Primary actions MUST NOT be capsules.

Borders are 1px hairlines. Press sinks into the paper with an inset shadow.
It MUST NOT lift the control with `translateY(-1px)` or a bounce.

A small geometric mark MAY signal selected state. Its shape is an asset
(diamond, square, or otherwise). It MUST stay 4–9px and MUST NOT become a
stamp, seal, stele, or badge pill.

## Components

YAML recipes are visual, not React or Svelte APIs. Adapters MAY rename
symbols. They MUST keep roles and pairings.

### Actions

`action-primary` is an outlined paper control: hairline, 2px corners, 44px
minimum height even at the small size, tracked label, padding near
`12px 24px`. Hover fills it with ink. `action-secondary` starts filled with
ink and inverts on hover. Icon-only tools are a 44px square; the glyph is
about 18px with a 1.5px stroke.

Do not use 36px or 40px shadcn heights, `py-2 px-4`, 6–16px radii, or a
24px icon with no hit area.

Hover, focus, pressed, disabled, and loading MUST stay distinct without
changing layout. Focus is a 2px ring with 2–3px offset.

### Fields and surfaces

Inputs use `{components.input-field}`: raised paper, 3px corners, 44px
height, a faint inset. Errors use `{colors.error}` on the hairline, not a
left color bar.

`paper-panel` is a reading surface. `paper-well` is a recess. Neither is a
SaaS card with a 16px radius and a drop shadow.

Login, payment, settings, and destructive confirmations use these surfaces
and ordinary controls. Users MUST NOT watch a scene in order to finish.

## Experience modes

Modes describe intent, not marketing versus app.

**Story mode** is a home, a product story, or onboarding. It SHOULD cascade
through changing scenes, with a skip to the task. A product MAY keep one
sticky underlay; that underlay remains an asset.

**Task mode** is login, pay, search, form, settings, or recovery. Atmosphere
MAY stay full. Controls MUST stay few and ordinary. It MUST NOT scrolljack,
pin a mandatory scene, or map vertical input to essential horizontal travel.

## Scroll and cascade

Native document scrolling is the source of truth.

- MUST NOT change wheel, trackpad, touch, or keyboard scroll distance.
- MUST NOT replace the document with transform fake-scrolling or hide the
  scrollbar.
- Vertical input MUST NOT drive essential horizontal content.
- Core content MUST NOT live in a same-direction nested scroller.

Cascade means sequential emphasis. Each viewport: one moving focus, two or
three planes. Canonical text stays in document order. Sticky layers are
illustration. Duplicate stage copy is `aria-hidden` and contains no
controls.

A scene advances on an ordinary scroll and releases. Users can reverse,
deep-link, find-in-page, and skip by heading. Necessary text MUST NOT vanish
on the way back.

404 and footer are still chapters in the same world, not a different skin.

## Motion

Motion explains handoff and state. It is not the information.

1. Static HTML and CSS: complete without JavaScript.
2. Native CSS: sticky, opacity, transform, short transitions.
3. CSS scroll-driven animation, behind `@supports` and
   `prefers-reduced-motion: no-preference`. See
   [MDN scroll-driven timelines](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines).
4. IntersectionObserver only when CSS cannot express a discrete state.

Durations: 150ms feedback, 250ms content, 400ms chapter handoff. Easing:
`cubic-bezier(0.25, 0.1, 0.25, 1)`. Entrance: `cubic-bezier(0, 0, 0.25, 1)`.
Nothing bounces or overshoots. Continuous animation SHOULD stay on
transform and opacity.
See [web.dev animation performance](https://web.dev/articles/animations-and-performance).

A design-system consumer MUST NOT be required to install Lenis, GSAP,
canvas, or WebGL. Those MAY enhance a product. Static images are the
baseline; heavier atmospheres MUST degrade to them.

Reduced motion removes parallax, large translation, blur animation, and
ambient loops. It keeps color, edges, and instant state. An in-product
toggle MUST NOT override the OS.

## Accessibility

WCAG 2.2 AA is the floor. Custom targets SHOULD be 44×44 CSS pixels and
MUST meet 24×24 or a permitted exception.
See [target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
and [animation from interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions).

Keyboard access without traps. Tab order follows the DOM. Focus is not
covered by sticky chrome. Hover is never the only reveal. Pinch zoom and
native scroll stay available. Decorative planes are `aria-hidden` without
focusable descendants. Scroll percentage is not a live region.

At 320px or 400% zoom, one reading direction, all functions. Reserve image
dimensions. Do not start necessary copy at opacity 0.

## Illustration and naming

A story chapter SHOULD host one planar asset as the scene, with type in a
clearing or a single fog slot. Consecutive scenes SHOULD be distinct.
Generate or choose assets to sit under the components, not to replace them.
No type, no UI chrome, no logos inside the picture. Leave roughly forty
percent of the frame quieter for copy.

Do not use the memenow-site world painting, Tai Chi marks, five-element
charts, another product's skyline or sunflower field, a hidden face, a
floating body, or a Renaissance oil mashup as proof of this language. Those
are someone else's assets. Borrow only the method: sequential full scenes,
one slot through frost, atmosphere that can be full while UI stays sparse,
and a 404 that is still a chapter.

Public language uses: chapter, cascade, paper surface, ink, fog slot, skip.
It MUST NOT use square seal, stele, rubbing, altar, ritual, authentic
Chinese, or film titles as token or component names. Product folders MAY
keep historical class names until a later rename.

Fold, cut, and backlight are construction notes for planes. They do not
require origami characters or puppet silhouettes. Strings, rods, and
operator hands MUST NOT appear.

## Adoption

This file is the contract. It is not a runtime token file.

Adapters document mapping, omitted tokens, type licensing, reduced-motion
fallbacks, and performance. A copied `DESIGN.md` is a seed, not proof of
implementation.

| Role           | This seed            | memenow-site                             | yinyang-agent-ui                   |
| -------------- | -------------------- | ---------------------------------------- | ---------------------------------- |
| Surface        | `{colors.surface}`   | cool mist paper                          | warm cream paper                   |
| Ink            | `{colors.secondary}` | indigo `#1B2A4A`                         | olive ink `#292919`                |
| Accent         | `{colors.primary}`   | moon-gold                                | fire overlay                       |
| Display        | Newsreader           | Newsreader                               | Space Grotesk / PuHuiTi            |
| Assets         | none                 | sticky WorldLayer painting, diamond mark | five-element marks, charts         |
| Story underlay | changing scenes      | one world behind every route             | scene folders (celestial / ritual) |

Five-element color, Tai Chi imagery, diamond marks, and the sticky world
canvas stay in the product. A seed preview MUST NOT redraw the memenow-site
landscape to demonstrate conformance.

The format follows the
[DESIGN.md alpha spec](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md).

## Do's and Don'ts

### Do

- Do keep native scroll 1:1 and chaptered sections in document order.
- Do put one promise and one action in a chapter.
- Do keep 2–3 planes and one optional fog slot.
- Do use 44px, 2px corners, 1px hairline, tracked labels on actions.
- Do sink presses into paper.
- Do ship a complete static chapter before adding motion.
- Do treat pictures as assets the product brings.

### Don't

- Don't make a card dashboard, a pill CTA, or a shadcn-sized button the
  default.
- Don't use purple gradients, emoji icons, glass card grids, typewriter
  heroes, or "Transform your workflow" copy.
- Don't frost the whole page or run `backdrop-filter` on every surface.
- Don't scrolljack, pin a mandatory reel, or map vertical input to essential
  horizontal travel.
- Don't name components after seals, steles, rubbings, altars, or films.
- Don't promote Tai Chi, five elements, or a logo coral into the core
  language.
- Don't prove the language by cloning the memenow-site world layer.
- Don't copy another site's paintings (skylines, sunflowers, faces, oils).
- Don't swap Newsreader or Inter for a trend serif to "avoid AI."
- Don't put UI text in generated images.
