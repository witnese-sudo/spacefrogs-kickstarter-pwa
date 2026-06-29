# Codex Build Tasks — SpaceFrogs FPS Vertical Slice

Use this as the exact Codex task sheet for the next development pass.

## Read first

Codex should read these files before editing:

```text
README.md
SPACEFROGS_PROJECT_BRIEF.md
CANON_STYLE_GUIDE.md
DEVELOPMENT_TASKS.md
docs/fps/SECTOR7F_FPS_VERTICAL_SLICE.md
docs/fps/TRIPO_GLB_AND_GROK_PROMPTS.md
fps-prototype.html
```

## Current task

Make the first public playable **SpaceFrogs First Signal FPS prototype** feel stronger without breaking the existing Kickstarter PWA.

## Required work

### 1. Keep `fps-prototype.html` standalone

Do not add frameworks. Do not require a build step. The prototype must run directly in browser from GitHub Pages or local file preview.

### 2. Improve arena readability

Refine the map layout in `fps-prototype.html` so the arena has:

- clear central reactor zone
- side corridors
- cover pockets
- open combat lanes
- flanking routes
- safe spawn/entry feel
- readable tactical minimap

### 3. Improve SpaceFrogs class identity

Each class should feel different through numbers and HUD text:

- WIT: balanced commander
- SKIP: fastest movement
- BULWARK: highest health and heavy pressure
- PATCH: fastest objective scan
- VEIL: strongest precision shot

### 4. Improve wave logic

Add clearer wave escalation:

- wave intro notice
- spawn count scaling
- hound appears after wave 2
- reactor pressure increases after 50%
- victory state when reactor reaches 100% and wave is cleared

### 5. Add a link from the main page

Add a visible button or section link in `index.html` pointing to:

```text
fps-prototype.html
```

Suggested copy:

```text
Play Sector 7F FPS Prototype
```

Do not remove the Kickstarter/PWA content.

### 6. Add basic QA checklist

Add a small QA section to the prototype page or docs confirming:

- desktop controls work
- mobile controls work
- firing works
- enemy waves spawn
- reactor objective charges
- victory/defeat states trigger

## Visual tone rules

Keep the prototype dark, wet, tactical, biotech and premium.

Do not make it:

- goofy
- cute
- generic military
- generic cyberpunk
- random fantasy
- too human

## Acceptance criteria

The PR is acceptable when:

- `fps-prototype.html` loads without external dependencies
- gameplay is understandable in under 30 seconds
- at least five classes are selectable
- at least two enemy types exist
- player can win or lose
- docs explain how to move into Unreal
- main PWA has a clear prototype link

## Suggested commit title

```text
Strengthen Sector 7F FPS prototype and launch link
```

## Suggested PR title

```text
Add playable SpaceFrogs Sector 7F FPS vertical slice
```
