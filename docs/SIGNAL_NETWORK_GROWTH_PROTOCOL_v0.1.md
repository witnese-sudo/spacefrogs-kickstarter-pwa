# SPACEFROGS — Signal Network Growth Protocol v0.1

**Status:** Approved concept / implementation-ready foundation  
**Project:** SPACEFROGS Kickstarter PWA  
**Depends on:** `FIND_YOUR_SIGNAL_SPEC_v0.1.md` and `FIND_YOUR_SIGNAL_QUIZ_v0.2.md`

> Every Signal grows alone. The Network awakens together.

---

## 1. Purpose

The Signal Network lets each participant grow a personal SPACEFROGS identity over time while the entire community simultaneously unlocks new parts of the universe.

The system must preserve three truths:

1. The canonical Squad Nine remain fixed canon.
2. A user's Signal profile can evolve without replacing canon.
3. Collective participation can awaken new content without allowing popularity alone to rewrite the universe.

---

## 2. The Three-Layer Model

### Layer A — Canon Layer

Fixed SPACEFROGS truth:

- Squad Nine
- established character identities
- core lore
- factions
- world rules
- canonical timelines
- approved visual strains

Users cannot overwrite this layer.

### Layer B — Personal Signal Layer

The user's evolving identity:

- Signal ID
- Callsign
- Primary Signal
- Secondary Signal
- Signal Type
- Primary Gate
- Secondary Trait
- Visual Strain
- Gate Marks
- Archive Fragments
- earned titles
- personal Aura Nova variation
- history of meaningful choices

### Layer C — Collective Network Layer

The community's shared progress:

- total activated Signals
- participation in missions
- Gate unlock progress
- world-manual reveals
- community archive fragments
- faction discoveries
- visual map activation
- campaign milestones

---

## 3. Personal Growth Principle

A user's Signal should not become “better” by becoming more powerful than others.

It becomes clearer through accumulated decisions.

> Your Signal does not become stronger by becoming someone else. It becomes clearer by surviving more choices.

Growth must communicate:

- history
- specialization
- perspective
- contribution
- relationship to the Network

It must not communicate human worth, rank superiority or psychological diagnosis.

---

## 4. Personal Signal Seed

Created after completing Find Your Signal.

Required fields:

- `signalId`
- `displayName`
- `callsign` optional
- `primarySignal`
- `secondarySignal`
- `signalType`
- `primaryGate`
- `secondaryTrait`
- `visualStrain`
- `signalColor`
- `gateGlyph`
- `createdAt`
- `version`

Initial status:

- **Signal Seed**

---

## 5. Growth Stages

Growth stages describe accumulated participation, not social status.

### Stage 0 — Unheard

Visitor has not completed the Signal experience.

### Stage 1 — Signal Seed

User has completed Find Your Signal.

Unlocks:

- result card
- Signal ID
- visual strain
- local save

### Stage 2 — Signal Trace

User has completed one meaningful follow-up action.

Examples:

- archive fragment discovered
- community mission completed
- campaign pledge connected
- first Gate Mark earned

### Stage 3 — Signal Path

User has developed a recognizable pattern across multiple choices.

Unlocks:

- evolved title
- personal timeline
- additional profile copy
- first Aura Nova variation

### Stage 4 — Signal Constellation

User's history shows several connected choices over time.

Unlocks:

- layered Gate Marks
- advanced archive page
- multi-strain display option
- personal contribution summary

### Stage 5 — Living Signal

Long-term identity state reserved for persistent participation.

Unlocks should remain expressive rather than power-based.

---

## 6. Meaningful Actions

Actions that may contribute to growth:

- complete Find Your Signal
- back the campaign
- join a community mission
- decode an archive fragment
- participate in a timed Gate event
- vote on presentation order for approved content
- complete a gameplay challenge
- attend a livestream or digital event
- contribute approved fan art or field notes
- invite another user who activates a Signal
- return for a seasonal Signal check-in

No single monetary action should dominate progression.

---

## 7. Choice Memory

The system should store a compact history of meaningful decisions.

Example event:

```json
{
  "eventType": "community_mission_choice",
  "eventId": "gate_01_hold_the_line",
  "choice": "protect_the_route",
  "tags": ["stability", "sacrifice", "unity"],
  "timestamp": "2026-07-13T12:00:00Z"
}
```

Choice history may refine presentation, but it must not silently rewrite the user's original Signal result.

Any evolution must be shown clearly as:

- original affinity
- later development
- current expression

---

## 8. Gate Marks

Gate Marks are earned symbolic traces of meaningful choices.

They are not achievement spam.

Each Gate Mark needs:

- a clear narrative meaning
- an event source
- a date
- a visual glyph
- one short archive line

Examples:

- **Held the Ninth Line** — protected others during a collective mission
- **Listened Beyond Noise** — completed an Echo archive challenge
- **Found the Unseen Route** — solved a movement or exploration challenge
- **Carried the Signal** — brought another participant into the Network

---

## 9. Evolved Titles

Titles are generated from persistent patterns, not chosen freely from a prestige list.

Examples:

- Resonance Navigator → **Resonance Wayfinder**
- Heart Anchor → **Keeper of the Shared Pulse**
- Breach Guardian → **Holder of the Broken Line**
- Silent Oracle → **Watcher Between Echoes**

Rules:

- titles must remain serious and cinematic
- no rarity colors implying human value
- no pay-to-own titles
- no title may claim canonical Squad Nine membership

---

## 10. Aura Nova Personalization

Personal Aura Nova expressions should use modular approved parts.

Possible variables:

- light rhythm
- ring pattern
- Gate glyph
- sidewall motif
- signal color
- strain material treatment
- archive plaque

Not allowed in the scalable system:

- unlimited custom geometry
- guaranteed unique electronics
- unrestricted user-supplied symbols
- canon-breaking faction combinations

---

## 11. Collective Signal Network

The Network visualizes community participation as a living signal field.

It should show:

- total activated Signals
- anonymous or consent-based location clusters
- distribution across Signal affinities
- unlocked Gates
- current community mission
- recently awakened archive fragments
- strain distribution

Default privacy rule:

- never expose precise user location
- use country, region or broad cluster only with consent
- callsign display must be opt-in

---

## 12. Collective Unlocks

Unlocks should feel like the universe waking up.

Example launch ladder:

- **1,000 Signals** — first community WIT Archive fragment
- **2,500 Signals** — First Signal network animation expands
- **5,000 Signals** — Bioforge Gate reveal
- **10,000 Signals** — first global community mission
- **25,000 Signals** — new approved visual strain preview
- **50,000 Signals** — interactive Nine Gates map layer
- **100,000 Signals** — major cinematic universe reveal

Final thresholds should be calibrated against real campaign reach before launch.

---

## 13. Community Missions

A community mission must contain:

- a narrative situation
- two or more meaningful responses
- visible progress
- a clear duration
- a collective outcome
- a personal participation trace

Community choices may affect:

- which approved archive fragment appears first
- which Gate is explored first
- which visual manual is previewed first
- presentation order of future content
- temporary Network appearance

They must not casually erase established canon.

---

## 14. Simultaneous Growth Loop

The core product loop:

1. User discovers their Signal.
2. The personal Signal Seed activates.
3. User sees themselves as one light in the Network.
4. User takes part in a meaningful mission.
5. Their profile gains a trace or Gate Mark.
6. Their participation contributes to a collective threshold.
7. The Network awakens new content.
8. New content creates new personal choices.
9. The cycle continues.

---

## 15. First MVP Scope

Version 0.1 should include:

- account or persistent local Signal profile
- Signal Seed creation after quiz
- one personal history view
- one Gate Mark
- anonymous Network counter
- distribution across the Nine affinities
- First Signal and Bioforge strain distribution
- one community milestone bar
- one collective unlock
- clear privacy controls

Do not build yet:

- open social feed
- user-to-user messaging
- unrestricted profile customization
- complex economy
- tradable rarity system
- NFT or speculative ownership layer
- fully custom miniature pipeline

---

## 16. Data Model Draft

```ts
type SignalProfile = {
  signalId: string;
  userId?: string;
  displayName?: string;
  callsign?: string;
  primarySignal: SignalCode;
  secondarySignal: SignalCode;
  signalType: string;
  primaryGate: string;
  secondaryTrait: string;
  visualStrain: "first-signal" | "bioforge";
  stage: "seed" | "trace" | "path" | "constellation" | "living";
  gateMarks: GateMark[];
  history: SignalEvent[];
  createdAt: string;
  updatedAt: string;
  profileVersion: number;
};

type GateMark = {
  id: string;
  title: string;
  glyph: string;
  archiveLine: string;
  earnedAt: string;
  sourceEventId: string;
};

type NetworkState = {
  activatedSignals: number;
  affinityDistribution: Record<SignalCode, number>;
  strainDistribution: Record<string, number>;
  currentMissionId?: string;
  milestoneProgress: number;
  unlockedContentIds: string[];
};
```

---

## 17. Anti-Manipulation Rules

- no fear-of-missing-out around personal identity
- no purchased superiority
- no hidden personality scoring changes
- no public shame for inactivity
- no endless streak pressure
- no false scientific authority
- no forced social sharing
- no precise location exposure
- no canon membership claims

---

## 18. Success Metrics

Personal layer:

- profile save rate
- return rate after 7 and 30 days
- percentage earning first Gate Mark
- completion of first community mission
- profile share rate

Collective layer:

- active Signals per milestone
- mission participation rate
- repeat participation
- unlock engagement
- distribution fairness across Signal types

Quality layer:

- users report growth feels meaningful, not grindy
- users understand the difference between affinity and canon
- no progression path is perceived as morally superior
- privacy controls are understood

---

## 19. Canon Rule

> Personal identity may grow inside the universe. Collective participation may awaken the universe. Neither may overwrite the canonical Squad Nine without an explicit canon decision.

---

## 20. Next Build Step

Build a functional MVP sequence:

1. Complete Find Your Signal.
2. Create Signal Seed profile.
3. Show personal result inside a small Network map.
4. Let the user earn **Held the Ninth Line**, the first Gate Mark.
5. Add their contribution to one visible global milestone.
6. Unlock one WIT Archive fragment when the threshold is reached.

This is the smallest version that proves simultaneous personal and collective growth.