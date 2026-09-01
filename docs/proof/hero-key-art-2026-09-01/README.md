# Hero key-art staging proof — 2026-09-01

## Scope

This proof covers the PATCH, SKIP, BULWARK and VEIL hero key-art integration on `staging/hero-key-art-2026-09-01`.

- Source: generated-image outputs observed directly in the ChatGPT conversation `SPACEFROGS Live Watch` (`6a8b9d5b-6f70-83ed-bcb1-3883d773c612`).
- Layout reference: the existing WIT card presentation observed in the same conversation (green signal frame, unit header, artwork crop and status footer).
- Explicit non-scope: the 3D runtime-proof implementation and its model assets.

## Asset status

| Unit | Source | Web integration | Status |
| --- | --- | --- | --- |
| PATCH | Original generated PNG observed | `assets/images/hero-key-art-patch.webp` | OBSERVED / VERIFIED |
| SKIP | Original generated PNG observed | `assets/images/hero-key-art-skip.webp` | OBSERVED / VERIFIED |
| BULWARK | Original generated PNG observed | `assets/images/hero-key-art-bulwark.webp` | OBSERVED / VERIFIED |
| VEIL | Original generated PNG observed | `assets/images/hero-key-art-veil.webp` | OBSERVED / VERIFIED |
| LUMA | No verified output found | No file; explicit placeholder only | MISSING / PENDING |

The WebP files retain the original 1122 × 1402 canvas and are delivery derivatives of the observed PNG outputs. No replacement art was generated. The four source PNGs total 10,069,362 bytes; the four WebP derivatives total 932,218 bytes, a 90.7% reduction.

## Verification record

- Asset identity and mapping: VERIFIED by visible hero title and role text in each source image.
- Manifest mapping and LUMA state: VERIFIED statically.
- Desktop render: VERIFIED at 1265 × 712 and 1344 × 990 rendered viewport captures.
- Mobile render: VERIFIED at 375 × 812 rendered viewport capture; no horizontal overflow (`document.body.scrollWidth` 375 at 375 CSS px).
- Card crop and overlay legibility: VERIFIED for all four integrated artworks; embedded titles, unit headers and status footers remain readable.
- Browser asset decode: VERIFIED; all four WebP files completed at natural size 1122 × 1402 with no browser warnings or errors.
- Build/link checks: VERIFIED for the static-site validation commands recorded in the draft PR.
- 3D runtime regression: VERIFIED read-only; this branch changes no `viewer/`, `assets/models/` or `migration/3d-viewer/` path.

## Evidence

- `desktop-patch-skip-1265x712.png`
- `desktop-bulwark-veil-1344x990.png`
- `desktop-luma-missing-1344x990.png`
- `mobile-patch-skip-375x812.png`

Source PNG SHA-256 values, in PATCH / SKIP / BULWARK / VEIL order:

- `BB0D54E9A1CB7261B7F1444CA2973A364C3092BF6E7F9DFD614C21F3C8FF6568`
- `18CF12B0325856D1C63B9855C969FE0091A4C89F465225EA6E12D2D80BC70337`
- `239929CB6595F430D39150A1D8CCAC7C34D1FA40556CD96C49ADBB8F2AD7CE76`
- `7305CB0B48239417C5496B9E6E6563C4DC44C7CAF4B4846B1B456421C550CF27`
