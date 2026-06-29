# SPACEFROGS™ Sector 7F GLB Asset Report v0.1

Uploaded asset reviewed as candidate Sector 7F arena concept source.

## Files received

Two GLB files were uploaded:

- `aa38fb1e-41da-4c08-a2ca-962024bcf882.glb`
- `7f_arena_map.glb`

They are byte-for-byte identical and represent the same Tripo3D-generated asset.

Canonical working name:

`7f_arena_map.glb`

## Technical inspection

- Format: GLB 2.0
- Generator: Tripo3D
- File size: ~5.26 MB
- Meshes: 1
- Nodes: 1
- Materials: 1
- Textures/images: 3
- Animations: 0
- Cameras: 0
- Skins: 0
- Vertices: 72,879
- Faces: 90,753
- Bounding dimensions, raw GLB units: approximately `0.98 × 0.33 × 0.78`
- SHA-256: `b2fe822e9d41bdda9aae3e63848e09c9245f5d00431dcaadbcb87d5868dc2b2a`

## Production verdict

This is useful as a **Sector 7F arena concept GLB / Tripo source asset**, but it is not yet a production-ready modular Unreal level.

Why:

- It is one combined mesh.
- It has one material slot.
- It is not separated into reusable modules.
- It likely needs scaling inside Unreal.
- It likely needs simplified collision/proxy geometry.
- It is too monolithic for final FPS gameplay iteration.

## Correct use

Use this asset for:

- visual benchmark
- mood reference
- quick Unreal import test
- arena concept placement
- Tripo/Grok comparison pass
- screenshot/reference for modular rebuild

Do not treat it as:

- final Unreal map
- modular wall/floor/catwalk kit
- collision-ready level
- optimized gameplay geometry
- finished Sector 7F production asset

## Unreal import recommendation

Import path inside Unreal project:

`Content/SpaceFrogs/Sector7F/Concept/7f_arena_map.glb`

Recommended first-pass import settings:

- Import as static mesh
- Generate lightmap UVs: on if available
- Nanite: optional for visual test, off for collision testing unless needed
- Collision: do not rely on auto-complex collision for final gameplay
- Scale: test with FPS mannequin/player capsule; rescale until corridors feel playable
- Create separate simple blockout collision over the visual mesh

## Next production step

Rebuild this visual idea into a modular Sector 7F kit:

- floor tiles
- wall panels
- corner modules
- catwalks
- stairs
- ramps
- cover blocks
- reactor pit/objective module
- spawn doors
- tunnel gates
- bioforge vein decals/materials

Canon reminder:

**Frogs first. Biotech second. Machine third.**

Sector 7F must remain a wet biotech FPS arena, not generic sci-fi and not a flat AI concept scene.
