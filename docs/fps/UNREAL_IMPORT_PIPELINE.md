# Unreal Engine Pipeline — SpaceFrogs Sector 7F FPS

This is the practical path from the browser prototype and AI-generated GLB assets into an Unreal Engine vertical slice.

## Unreal project

Create a clean Unreal project:

```text
Project name: SF_FirstSignal_FPS
Template: First Person
Quality: Maximum / Desktop
Starter Content: optional
Raytracing: off for prototype
```

## Import order

1. `SF_S7F_Arena_Blockout_v001.glb`
2. `SF_S7F_ModularKit_v001.glb`
3. `SF_S7F_ReactorObjective_v001.glb`
4. `SF_Operator_WIT_Body_v001.glb`
5. `SF_Enemy_Theta9_Drone_v001.glb`
6. `SF_Enemy_Theta9_Hound_v001.glb`
7. remaining operators

## Import settings for GLB/FBX

Use these starting settings:

- import mesh: on
- import textures: on
- import materials: on, but replace later with master materials
- combine meshes: off for modular kit
- combine meshes: on only for single showcase objects
- generate collision: on for blockout, then replace with simplified collision later
- scale: check against Unreal mannequin / 180 cm reference

## FPS scale guide

Use Unreal centimeters:

- player capsule height: 180 cm
- standard door/tunnel gate: 320–420 cm high
- corridor width: 400–600 cm
- cover height: 90–140 cm
- catwalk width: 250–400 cm
- stair step: 15–20 cm rise
- main arena diameter: 2400–3600 cm

## Material plan

Create master materials:

```text
M_Master_WetBioforge
M_Master_GlowVeins
M_Master_Theta9Corruption
M_Master_DarkConcrete
M_Master_ReactorGlass
```

Material instance examples:

```text
MI_WetMetal_Black
MI_BioVeins_Emerald
MI_BioVeins_Cyan
MI_BioVeins_Purple
MI_Theta9_RedAmber
MI_ReactorCore_GreenCyan
```

## Blueprint plan

### BP_FrogOperator_Base

Core variables:

```text
OperatorName
MaxHealth
MoveSpeed
PulseDamage
ScanSpeed
ClassColor
AbilityCooldown
```

Child blueprints:

```text
BP_FrogOperator_WIT
BP_FrogOperator_SKIP
BP_FrogOperator_BULWARK
BP_FrogOperator_PATCH
BP_FrogOperator_VEIL
```

### BP_ReactorObjective

Core variables:

```text
ChargePercent
ChargeRate
Contested
RequiredHoldRadius
bActivated
bVictoryReady
```

Behavior:

- player inside reactor zone charges objective
- enemies inside zone slow or stop charge
- at 50%, increase enemy wave pressure
- at 100%, trigger extraction or final clear condition

### BP_WaveDirector

Core variables:

```text
CurrentWave
EnemiesAlive
SpawnPoints
DroneCount
HoundCount
ConstructCount
WaveDelay
bReactorOvercharged
```

Behavior:

- start wave after player enters arena
- spawn drones first
- add hounds from wave 2 or 3
- escalate after reactor 50%
- victory when reactor 100% and final wave clear

### BP_Theta9_Drone

Simple AI:

1. If player visible: chase/attack
2. Else if reactor active: move toward reactor
3. Else patrol nearest lane

### BP_Theta9_Hound

Simple AI:

1. Rush player
2. Ignore cover
3. High close threat
4. Lower health than construct, faster than drone

## Level blockout checklist

Before beauty art, the level must pass this:

- player can loop around the whole arena
- central reactor has at least 4 entry angles
- catwalk gives useful but not unbeatable advantage
- cover exists every 6–10 meters
- enemies have at least 4 spawn points
- player can see objective from multiple lanes
- side tunnels are not dead ends
- ramps/stairs are smooth for FPS movement
- no tiny collision snagging

## Camera and feel

The FPS should feel heavy but responsive:

- movement: tactical, not floaty
- jump: optional, low priority
- slide/dodge: later, not v0.1
- weapon: bio-pulse placeholder, not real-world firearm focus
- HUD: scanlines, emerald/cyan, minimal clutter

## Prototype production sequence

### Day 1 — Browser proof

Use `fps-prototype.html` to prove:

- class choice
- reactor objective
- wave pressure
- readable arena rhythm

### Day 2 — Unreal blockout

Build greybox in Unreal using cubes and ramps:

- central reactor zone
- four combat lanes
- upper loop
- spawn doors

### Day 3 — Asset import

Import GLB modular kit and replace greybox gradually.

### Day 4 — Blueprint loop

Add:

- BP_ReactorObjective
- BP_WaveDirector
- BP_Theta9_Drone
- BP_Theta9_Hound
- WBP_FPS_HUD

### Day 5 — Visual pass

Add:

- wet material instances
- glow veins
- fog/steam
- reactor light
- catwalk lights
- Θ9 corruption marks

## First playable Unreal definition

The Unreal slice is real when:

- player can spawn and move in first person
- arena is walkable
- reactor can be charged
- waves spawn
- player can win or lose
- FPS HUD shows health, wave and reactor
- WIT is playable as first class
- Θ9 drone and hound are present
- no critical collision bugs block movement

## What not to do yet

Do not start with:

- huge campaign
- full multiplayer
- marketplace inventory
- complex weapon system
- cinematic trailer
- 20 enemy types
- final animation rig

First make one arena feel alive.
