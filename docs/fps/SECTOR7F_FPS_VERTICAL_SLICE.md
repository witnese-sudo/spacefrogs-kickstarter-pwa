# SPACEFROGS™ FIRST SIGNAL FPS — Sector 7F Vertical Slice

This file defines the first playable first-person shooter direction for SPACEFROGS™. It is built as a bridge from the current Kickstarter/PWA repo into a future Unreal Engine project.

## Target

Create a compact playable FPS survival arena called **Sector 7F Bioforge Breach**.

The goal is not a giant open game. The goal is one strong vertical slice:

- one playable wet biotech industrial arena
- five selectable SpaceFrog operator classes
- one central reactor objective
- Θ9 enemy wave pressure
- tactical lanes, ramps, cover, catwalks and side tunnels
- a browser prototype first, then Unreal/GLB production

## Canon law

SpaceFrogs must remain:

- frog body first
- biotech armor second
- machine support third
- serious, tactical, mythic and premium
- no goofy mascot tone
- no generic military-only sci-fi
- no human body with frog head glued on

## Current repo implementation

A playable browser prototype has been added at:

```text
fps-prototype.html
```

It includes:

- first-person raycast arena view
- Sector 7F blockout map
- five operator choices: WIT, SKIP, BULWARK, PATCH, VEIL
- Θ9 drone/hound wave spawning
- reactor charge objective
- desktop and mobile controls
- minimap and tactical HUD

This is not the final art. It is the gameplay and arena-feel proof.

## Unreal target package

Future Unreal project name:

```text
SF_FirstSignal_FPS
```

Recommended map name:

```text
LVL_Sector7F_BioforgeBreach
```

Recommended folder structure:

```text
Content/SpaceFrogs/FPS/
  Maps/
    LVL_Sector7F_BioforgeBreach.umap
  Blueprints/
    BP_FrogOperator_Base.uasset
    BP_FrogOperator_WIT.uasset
    BP_FrogOperator_SKIP.uasset
    BP_FrogOperator_BULWARK.uasset
    BP_FrogOperator_PATCH.uasset
    BP_FrogOperator_VEIL.uasset
    BP_Theta9_Drone.uasset
    BP_Theta9_Hound.uasset
    BP_ReactorObjective.uasset
    BP_WaveDirector.uasset
  Materials/
    M_WetBioforgeMetal.uasset
    M_BioelectricVeins_Green.uasset
    M_BioelectricVeins_Cyan.uasset
    M_Theta9_Corruption_Red.uasset
  Meshes/
    Modular/
    Characters/
    Enemies/
    Props/
  UI/
    WBP_FPS_HUD.uasset
    WBP_ClassSelect.uasset
```

## Arena design

Sector 7F is a dark wet biotech industrial FPS arena. It should feel like a classic tactical shooter map flow translated into SpaceFrogs canon.

Core layout:

1. **Central reactor pit**
   - open objective zone
   - glowing green/cyan bioelectric core
   - ring cover around it
   - danger if players stay exposed too long

2. **Upper catwalk loop**
   - elevated sightlines
   - sniper/overwatch route
   - jump/drop routes back into central arena

3. **Two side tunnel gates**
   - spawn doors for Θ9 units
   - flanking routes for players
   - wet metal corridor rhythm

4. **Ramp and stair diagonals**
   - no flat poster level
   - real walkable vertical combat layers

5. **Cover language**
   - biotech cover blocks
   - half-height reactor consoles
   - broken wall ribs
   - cable nests
   - wet modular crates

6. **Modular kit**
   - floor tile 4m x 4m
   - wall panel 4m x 4m
   - catwalk 4m x 2m
   - ramp 4m x 4m
   - cover block 2m x 1m x 1.2m
   - tunnel gate 6m x 5m
   - reactor ring segment 45 degrees

## Gameplay loop

One match should run 6–10 minutes in prototype form.

1. Player selects SpaceFrog class.
2. Player enters Sector 7F.
3. Θ9 starts scanning and spawning.
4. Player reaches central reactor.
5. Player holds reactor zone to charge signal.
6. Waves intensify.
7. Player clears final wave or extracts.

## First five operator classes

### WIT — Commander
Balanced, resilient, best starter operator.

- medium movement
- medium health
- reliable pulse fire
- command scan bonus

### SKIP — Ranger
Fast recon frog with aggressive movement.

- high movement
- lower health
- quick reposition
- best for flank routes

### BULWARK — Heavy
Compact dense support platform.

- highest health
- slow movement
- strong pulse output
- holds reactor under pressure

### PATCH — Engineer
Objective and reactor specialist.

- medium health
- medium movement
- fastest scan/repair objective speed
- can later deploy signal nodes

### VEIL — Sniper
Calm precision class.

- low health
- strong single-shot damage
- strongest on catwalks
- needs distance and sightlines

## Enemy wave set

### Θ9 Drone
Basic pressure unit.

- patrols
- advances toward player/noise
- weak health
- appears in groups

### Θ9 Hound
Fast chase unit.

- rushes player
- high close-range threat
- forces movement

### Θ9 Construct
Future heavy unit.

- blocks lanes
- suppresses reactor zone
- slow but dangerous

## Visual benchmark

The final arena must feel like:

- wet black metal
- biotech industrial wall ribs
- cyan/green/purple bioelectric veins
- dark concrete and alien cables
- storm light, dripping surfaces, reactor fog
- SpaceFrogs Sector 7F, not generic sci-fi

## Done definition for v0.1 FPS prototype

- playable in browser from `fps-prototype.html`
- player can move, aim, fire and survive waves
- at least five operator choices exist
- at least two Θ9 enemy types exist
- central objective exists
- arena has lanes, cover and a reactor zone
- production docs tell Codex/Unreal what to build next

## Next milestone

Move from browser proof to Unreal blockout:

1. Generate/collect GLB modular arena pieces.
2. Import into Unreal.
3. Build LVL_Sector7F_BioforgeBreach from modular kit.
4. Add first-person controller.
5. Add placeholder Frog arms/operator body.
6. Add BP_WaveDirector.
7. Add reactor objective and HUD.
8. Replace placeholders with Tripo/Blender-cleaned assets.
