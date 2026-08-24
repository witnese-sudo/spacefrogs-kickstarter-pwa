# SPACEFROGS 3D Viewer Migration Evidence — 2026-08-24

Source: Replit `SpaceFrogs Genesis` artifact snapshot supplied by user.
Target: GitHub staging branch `staging/3d-viewer-migration-2026-08-24`.

## Observed viewer source
- `src/components/model-viewer.tsx`
- `src/lib/models.ts`
- `src/lib/webgl.ts`
- `src/pages/home.tsx`
- `src/pages/home-v2.tsx`
- `src/App.tsx`
- `package.json`
- `vite.config.ts`

## Verified-present canon GLB files
- WIT: `wit.glb`
- PATCH: `patch.glb`
- SKIP: `skip.glb`
- BULWARK: `bulwark_deluxe_hero_edition.glb`
- VEIL: `veil.glb`
- VOLT: `volt.glb`
- KELP: `kelp.glb`
- ECHO: `echo.glb`

## Missing
- LUMA: no filename or broader light/channel/aura-hero GLB match found in Replit workspace.

## Canon mismatch observed in imported source
`src/lib/models.ts` still uses legacy squad slots `luxa` and `tox`. `veil.glb` exists but is only wired as a featured/showcase model in the supplied source. Do not promote Luxa/Tox as current official heroes. Do not substitute any model for LUMA without verification.

## Claim boundary
Presence and hashes prove file identity only. They do not prove Golden Master visual approval or production readiness.

## SHA-256
```
4ff376d79ecdaa4e13edc3baf234e2156c7e6dac08a26214581d8038ed9cd7d6  bulwark_deluxe_hero_edition.glb
75ec26b475e081691e4a602ec0f0c9ba0edd828a8950b4be27c9a70d44e42f42  echo.glb
ea24078fc4b14b7ce6d89a023f8ddc900a0eac07cd6b8cb6ec566e2caf0a5732  kelp.glb
2d19207680b369f698ffe364073f8876a1ccc70fdeee6a2d0a4b74a25a632f33  patch.glb
fd8c7f0a24ead772222f42a4b78c2748e5cbcd9b4d0d2f5507b23a895b5f3690  skip.glb
9e085f6a0e36e23bf2c3f6b497fb233e0ef3cff61f57cd0f5d3124e89a3e8308  veil.glb
bc59671ab97534272dcff88642fc66301bbaa7d2bad44f0979a01a2a5d9286bc  volt.glb
d691a9155d4888aba4a793d807550e4e0f3ce8a49c2303d7a45e1abdda5e5c1d  wit.glb
```
