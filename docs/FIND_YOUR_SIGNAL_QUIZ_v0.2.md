# FIND YOUR SIGNAL — Quiz & Scoring Spec v0.2

**Status:** Approved prototype specification  
**Project:** SPACEFROGS Kickstarter PWA  
**Parent spec:** `docs/FIND_YOUR_SIGNAL_SPEC_v0.1.md`

> You do not choose your Spacefrog. The Signal reveals what you already carry.

---

## 1. Product Goal

Create a serious, cinematic, scenario-based Signal Classification Experience that produces:

- Primary Signal
- Secondary Signal
- Signal Type name
- Primary Gate
- Secondary Trait
- Squad Affinity
- Strength
- Cost / blind spot
- Squad role
- Visual Strain choice
- Shareable result card

The experience reveals affinity only. It does not make the user a canonical member of Squad Nine.

---

## 2. The Nine Scoring Axes

| Code | Affinity | Core tendency |
|---|---|---|
| WIT | Pattern / Guidance | Reads systems, consequences and routes |
| KRASH | Action / Breach | Creates movement through decisive force |
| FLUX | Connection / Systems | Reconnects people, energy and resources |
| LUXA | Protection / Life | Protects the most vulnerable signal |
| ROKK | Stability / Endurance | Creates ground, safety and continuity |
| SHADE | Observation / Precision | Removes uncertainty through exact attention |
| MIRE | Intuition / Deep Listening | Detects hidden meaning, echoes and emerging outcomes |
| JUKE | Movement / Improvisation | Finds routes through speed, invention and adaptability |
| FREDDIE | Unity / Morale | Keeps people coordinated, brave and connected |

---

## 3. Secondary Behavioral Tags

Each answer may also add one or two secondary tags.

- `pattern`
- `force`
- `connection`
- `care`
- `stability`
- `precision`
- `intuition`
- `motion`
- `unity`
- `risk`
- `patience`
- `sacrifice`
- `control`
- `adaptation`
- `truth`

These tags help generate Primary Gate, Secondary Trait and result copy.

---

## 4. Scoring Rules

Each chosen answer grants:

- **+3** to its primary Signal
- **+1** to one supporting Signal where appropriate
- **+1** to one or two behavioral tags

### Primary Signal
Highest total Signal score.

### Secondary Signal
Second-highest Signal score.

### Hybrid rule
Classify as a hybrid if the secondary score is within **2 points** of the primary.

### Tie-break order
If two Signals are tied:

1. Use the Signal with more +3 primary selections.
2. If still tied, use the Signal chosen most recently.
3. If still tied, return a balanced hybrid.

### Result confidence

- 5+ point lead: strong affinity
- 3–4 point lead: clear affinity
- 1–2 point lead: hybrid affinity
- tie: balanced hybrid

---

# 5. Final Quiz Questions

## Q1 — The Closing Gate

A teammate is trapped. The route closes in twenty seconds. What do you do first?

A. Map the sequence and assign exact actions.  
`WIT +3, FLUX +1, tags: pattern, control`

B. Break the obstruction before it seals.  
`KRASH +3, JUKE +1, tags: force, risk`

C. Reroute the mechanism powering the gate.  
`FLUX +3, WIT +1, tags: connection, control`

D. Reach the trapped teammate and stabilize them.  
`LUXA +3, FREDDIE +1, tags: care, sacrifice`

E. Hold the route open so everyone can cross.  
`ROKK +3, LUXA +1, tags: stability, sacrifice`

F. Remove the threat watching the corridor.  
`SHADE +3, WIT +1, tags: precision, patience`

G. Listen for the route the system is about to reveal.  
`MIRE +3, WIT +1, tags: intuition, truth`

H. Find a route nobody else noticed.  
`JUKE +3, SHADE +1, tags: motion, adaptation`

I. Keep the entire team coordinated while they act.  
`FREDDIE +3, ROKK +1, tags: unity, control`

---

## Q2 — The Failed Plan

The original plan is gone. Which instinct arrives first?

A. Rebuild the pattern from what remains.  
`WIT +3, FLUX +1, tags: pattern, adaptation`

B. Create momentum before fear takes over.  
`KRASH +3, FREDDIE +1, tags: force, unity`

C. Reconnect the resources still available.  
`FLUX +3, ROKK +1, tags: connection, stability`

D. Check who is most at risk.  
`LUXA +3, SHADE +1, tags: care, precision`

E. Establish one position that will hold.  
`ROKK +3, WIT +1, tags: stability, control`

F. Become still and observe what changed.  
`SHADE +3, MIRE +1, tags: precision, patience`

G. Listen for the consequence hidden in the noise.  
`MIRE +3, FLUX +1, tags: intuition, truth`

H. Move before the situation closes around you.  
`JUKE +3, KRASH +1, tags: motion, risk`

I. Give everyone one clear rhythm to follow.  
`FREDDIE +3, LUXA +1, tags: unity, care`

---

## Q3 — What Must Not Be Lost?

Choose the one thing you protect first.

A. Direction.  
`WIT +3, tags: pattern`

B. Courage.  
`KRASH +3, FREDDIE +1, tags: force, unity`

C. Connection.  
`FLUX +3, tags: connection`

D. Life.  
`LUXA +3, tags: care`

E. Ground.  
`ROKK +3, tags: stability`

F. Clarity.  
`SHADE +3, tags: precision`

G. Meaning.  
`MIRE +3, tags: intuition, truth`

H. Freedom of movement.  
`JUKE +3, tags: motion`

I. Each other.  
`FREDDIE +3, tags: unity`

---

## Q4 — The Unknown Signal

A transmission repeats your name from an impossible location. What do you do?

A. Compare the pattern against every known archive.  
`WIT +3, MIRE +1, tags: pattern, truth`

B. Trace it directly and confront the source.  
`KRASH +3, JUKE +1, tags: force, risk`

C. Isolate and reconstruct the carrier frequency.  
`FLUX +3, WIT +1, tags: connection, control`

D. Check whether anyone else is emotionally or physically affected.  
`LUXA +3, FREDDIE +1, tags: care, unity`

E. Secure the area before responding.  
`ROKK +3, SHADE +1, tags: stability, patience`

F. Observe without revealing that you heard it.  
`SHADE +3, MIRE +1, tags: precision, patience`

G. Listen for what exists beneath the words.  
`MIRE +3, WIT +1, tags: intuition, truth`

H. Follow it while the route is still open.  
`JUKE +3, KRASH +1, tags: motion, risk`

I. Answer in a way that lets the whole squad hear you.  
`FREDDIE +3, FLUX +1, tags: unity, connection`

---

## Q5 — The Impossible Choice

You can save the mission objective or save one unknown person. You cannot guarantee both.

A. Search for the hidden third option before committing.  
`WIT +3, JUKE +1, tags: pattern, adaptation`

B. Act immediately and accept the consequence.  
`KRASH +3, LUXA +1, tags: force, sacrifice`

C. Reconfigure the system to delay the choice.  
`FLUX +3, WIT +1, tags: connection, control`

D. Save the person. Objectives can be rebuilt.  
`LUXA +3, FREDDIE +1, tags: care, sacrifice`

E. Hold the situation stable until others can help.  
`ROKK +3, FLUX +1, tags: stability, patience`

F. Remove the exact threat causing the choice.  
`SHADE +3, KRASH +1, tags: precision, control`

G. Trust the outcome that feels least false.  
`MIRE +3, LUXA +1, tags: intuition, truth`

H. Move fast enough that the choice is not final yet.  
`JUKE +3, KRASH +1, tags: motion, risk`

I. Make sure nobody faces the decision alone.  
`FREDDIE +3, ROKK +1, tags: unity, care`

---

## Q6 — Under Pressure

When everyone around you begins to panic, what changes in you?

A. My thoughts become more structured.  
`WIT +3, SHADE +1, tags: pattern, control`

B. I become more decisive.  
`KRASH +3, ROKK +1, tags: force, stability`

C. I start connecting people and resources.  
`FLUX +3, FREDDIE +1, tags: connection, unity`

D. I focus on the person who is struggling most.  
`LUXA +3, tags: care`

E. I become the calmest point in the room.  
`ROKK +3, LUXA +1, tags: stability, care`

F. I become quieter and more observant.  
`SHADE +3, MIRE +1, tags: precision, patience`

G. I notice what the panic is trying to tell us.  
`MIRE +3, WIT +1, tags: intuition, truth`

H. I start moving and create options.  
`JUKE +3, KRASH +1, tags: motion, adaptation`

I. I give people something clear to do together.  
`FREDDIE +3, WIT +1, tags: unity, control`

---

## Q7 — The Broken Machine

You find an important machine that everyone else has declared dead.

A. Study its failure history before touching it.  
`WIT +3, SHADE +1, tags: pattern, patience`

B. Force the jammed parts free.  
`KRASH +3, FLUX +1, tags: force, connection`

C. Listen for the circuit that still responds.  
`FLUX +3, MIRE +1, tags: connection, intuition`

D. Ask what depends on it before deciding what to repair.  
`LUXA +3, WIT +1, tags: care, pattern`

E. Build a temporary structure around it so it can function safely.  
`ROKK +3, FLUX +1, tags: stability, adaptation`

F. Identify the one failure nobody noticed.  
`SHADE +3, WIT +1, tags: precision, truth`

G. Wait, listen and see whether it is truly silent.  
`MIRE +3, FLUX +1, tags: intuition, patience`

H. Improvise a bypass and keep moving.  
`JUKE +3, KRASH +1, tags: motion, adaptation`

I. Turn the repair into a team rhythm.  
`FREDDIE +3, FLUX +1, tags: unity, connection`

---

## Q8 — The Hidden Threat

You know something is wrong, but you cannot prove it yet.

A. Build a model and test every contradiction.  
`WIT +3, SHADE +1, tags: pattern, truth`

B. Push the situation until the threat reveals itself.  
`KRASH +3, MIRE +1, tags: force, risk`

C. Trace unusual links between systems and people.  
`FLUX +3, WIT +1, tags: connection, pattern`

D. Quietly protect the most vulnerable person.  
`LUXA +3, SHADE +1, tags: care, precision`

E. Prepare a position that can survive being wrong.  
`ROKK +3, WIT +1, tags: stability, control`

F. Watch until the threat makes one measurable mistake.  
`SHADE +3, MIRE +1, tags: precision, patience`

G. Trust the unease and listen deeper.  
`MIRE +3, LUXA +1, tags: intuition, truth`

H. Keep moving so the threat cannot trap you.  
`JUKE +3, KRASH +1, tags: motion, risk`

I. Tell the squad enough to keep them alert, not afraid.  
`FREDDIE +3, ROKK +1, tags: unity, control`

---

## Q9 — The Last Energy Cell

The squad has one energy cell left. Where does it go?

A. Into the navigation system.  
`WIT +3, tags: pattern`

B. Into the breaching tool.  
`KRASH +3, tags: force`

C. Into the network relay.  
`FLUX +3, tags: connection`

D. Into life support.  
`LUXA +3, tags: care`

E. Into the shield generator.  
`ROKK +3, tags: stability`

F. Into the sensor array.  
`SHADE +3, tags: precision`

G. Into the deep-signal receiver.  
`MIRE +3, tags: intuition`

H. Into the mobility rig.  
`JUKE +3, tags: motion`

I. Into squad communications.  
`FREDDIE +3, tags: unity`

---

## Q10 — When You Are Wrong

You realize your decision hurt the team. What do you do next?

A. Reconstruct exactly where my reasoning failed.  
`WIT +3, SHADE +1, tags: pattern, truth`

B. Own it immediately and act to repair the damage.  
`KRASH +3, LUXA +1, tags: force, sacrifice`

C. Reconnect what my decision disrupted.  
`FLUX +3, FREDDIE +1, tags: connection, unity`

D. Check who paid the highest price.  
`LUXA +3, ROKK +1, tags: care, sacrifice`

E. Stay and help rebuild trust over time.  
`ROKK +3, FREDDIE +1, tags: stability, unity`

F. Listen before defending myself.  
`SHADE +3, MIRE +1, tags: precision, patience`

G. Ask what the mistake is trying to reveal.  
`MIRE +3, WIT +1, tags: intuition, truth`

H. Adapt quickly and prove the lesson through action.  
`JUKE +3, KRASH +1, tags: motion, adaptation`

I. Say it clearly, apologize and bring everyone back together.  
`FREDDIE +3, LUXA +1, tags: unity, care`

---

## Q11 — The Long Night

The mission is stalled. Nobody knows when help will come. What role do you naturally take?

A. I keep watch over the larger pattern.  
`WIT +3, MIRE +1, tags: pattern, patience`

B. I keep everyone physically active and ready.  
`KRASH +3, JUKE +1, tags: force, motion`

C. I repair tools, power and communications.  
`FLUX +3, ROKK +1, tags: connection, stability`

D. I check wounds, fatigue and fear.  
`LUXA +3, FREDDIE +1, tags: care, unity`

E. I make the place safer and more permanent.  
`ROKK +3, FLUX +1, tags: stability, control`

F. I observe the dark and let others rest.  
`SHADE +3, ROKK +1, tags: precision, sacrifice`

G. I listen for changes nobody else can hear.  
`MIRE +3, SHADE +1, tags: intuition, patience`

H. I scout routes and keep options open.  
`JUKE +3, WIT +1, tags: motion, adaptation`

I. I keep people talking, laughing or singing.  
`FREDDIE +3, LUXA +1, tags: unity, care`

---

## Q12 — The Final Step

You reach the Gate. Nobody knows what happens after crossing. What makes you step forward?

A. The pattern is incomplete until someone enters.  
`WIT +3, MIRE +1, tags: pattern, truth`

B. Someone has to be first.  
`KRASH +3, JUKE +1, tags: force, risk`

C. I can still feel a connection on the other side.  
`FLUX +3, LUXA +1, tags: connection, intuition`

D. Someone may be waiting there.  
`LUXA +3, FREDDIE +1, tags: care, sacrifice`

E. The others need a stable path to follow.  
`ROKK +3, WIT +1, tags: stability, control`

F. I have watched long enough to know this is the window.  
`SHADE +3, WIT +1, tags: precision, patience`

G. The Gate has been calling longer than we have been listening.  
`MIRE +3, FLUX +1, tags: intuition, truth`

H. No path exists until somebody moves.  
`JUKE +3, KRASH +1, tags: motion, adaptation`

I. I will not let anyone cross alone.  
`FREDDIE +3, ROKK +1, tags: unity, care`

---

# 6. Primary Gate Mapping

Primary Gate is derived from the dominant Signal and supporting tags.

| Primary Signal | Default Gate | Alternate Gate trigger |
|---|---|---|
| WIT | Pattern | Truth if `truth > control` |
| KRASH | Force | Courage if `unity > risk` |
| FLUX | Connection | Resonance if `intuition > control` |
| LUXA | Life | Mercy if `sacrifice > control` |
| ROKK | Foundation | Endurance if `sacrifice > control` |
| SHADE | Silence | Clarity if `truth > patience` |
| MIRE | Echo | Meaning if `truth > risk` |
| JUKE | Motion | Freedom if `adaptation > risk` |
| FREDDIE | Unity | Heart if `care > control` |

---

# 7. Secondary Trait Mapping

Choose the highest secondary behavioral tag not already represented by the Primary Gate.

Suggested display names:

- pattern → Foresight
- force → Resolve
- connection → Resonance
- care → Compassion
- stability → Persistence
- precision → Clarity
- intuition → Depth
- motion → Adaptability
- unity → Presence
- risk → Boldness
- patience → Restraint
- sacrifice → Devotion
- control → Discipline
- adaptation → Improvisation
- truth → Insight

---

# 8. Hybrid Signal Type Naming

Order does not matter for naming. Use the stronger Signal first for affinity display.

| Pair | Signal Type |
|---|---|
| WIT + KRASH | Tactical Breaker |
| WIT + FLUX | Resonance Navigator |
| WIT + LUXA | Guiding Anchor |
| WIT + ROKK | Strategic Foundation |
| WIT + SHADE | Silent Strategist |
| WIT + MIRE | Echo Navigator |
| WIT + JUKE | Adaptive Pathfinder |
| WIT + FREDDIE | Signal Commander |
| KRASH + FLUX | Circuit Breacher |
| KRASH + LUXA | Rescue Breaker |
| KRASH + ROKK | Breach Guardian |
| KRASH + SHADE | Precision Striker |
| KRASH + MIRE | Instinct Breaker |
| KRASH + JUKE | Momentum Breaker |
| KRASH + FREDDIE | Rally Vanguard |
| FLUX + LUXA | Living Circuit |
| FLUX + ROKK | Grounded Resonance |
| FLUX + SHADE | Signal Calibrator |
| FLUX + MIRE | Deep Resonator |
| FLUX + JUKE | Flow Engineer |
| FLUX + FREDDIE | Harmony Conductor |
| LUXA + ROKK | Life Bastion |
| LUXA + SHADE | Silent Protector |
| LUXA + MIRE | Soul Listener |
| LUXA + JUKE | Rescue Runner |
| LUXA + FREDDIE | Heart Anchor |
| ROKK + SHADE | Watchful Bastion |
| ROKK + MIRE | Echo Foundation |
| ROKK + JUKE | Mobile Fortress |
| ROKK + FREDDIE | Rally Foundation |
| SHADE + MIRE | Silent Oracle |
| SHADE + JUKE | Ghost Runner |
| SHADE + FREDDIE | Quiet Signal |
| MIRE + JUKE | Future Runner |
| MIRE + FREDDIE | Echo Heart |
| JUKE + FREDDIE | Rhythm Pathfinder |

### Single-signal names

- WIT → Pattern Navigator
- KRASH → Breach Vanguard
- FLUX → Resonance Engineer
- LUXA → Life Anchor
- ROKK → Foundation Bearer
- SHADE → Silent Watcher
- MIRE → Deep Listener
- JUKE → Impossible Pathfinder
- FREDDIE → Heart Signal

---

# 9. Result Copy Structure

Every result must contain four balanced parts.

## Strength
What the user notices or contributes under pressure.

## Cost
How the same strength can become a blind spot.

## Squad Role
What others rely on them for.

## Growth Line
What they may need from people unlike themselves.

### Template

> You notice **[strength pattern]** before most people do. Under pressure, you tend to **[primary behavior]**. Others rely on you to **[squad role]**. Your strength becomes costly when **[blind spot]**. Your Signal grows strongest when you allow **[growth line]**.

---

# 10. Example Result

## Resonance Navigator

**Primary Signal:** FLUX  
**Secondary Signal:** WIT  
**Primary Gate:** Connection  
**Secondary Trait:** Foresight  
**Squad Affinity:** FLUX / WIT

**Strength**  
You notice the link before the object. Under pressure, you search for the connection that still works.

**Cost**  
You may keep repairing a system after it has stopped deserving your energy.

**Squad Role**  
You help people, tools and plans function as one living network.

**Growth Line**  
Your Signal becomes stronger when you accept that not every broken connection must be restored.

---

# 11. Visual Strain Selection

Personality result and visual preference remain separate.

After result reveal, ask:

> Which frequency answers you?

Launch options:

### First Signal
- clearer forms
- awakening
- early signal technology
- disciplined neon routing
- hopeful frontier tone

### Bioforge
- wet biomechanical growth
- asymmetry
- aggressive living systems
- organic-industrial signal routing
- survival and transformation tone

Future unlocks:

- Nine Gates
- Denied / Tri-Six
- Black Neon / Old Gods

---

# 12. Result Card Fields

Required:

- Callsign or display name
- Signal Type
- Primary Gate
- Secondary Trait
- Squad Affinity
- Visual Strain
- Signal color
- Gate glyph
- Signal ID
- one-line result quote
- SPACEFROGS / Find Your Signal branding

Example ID:

`FS-RN-09-1842`

Suggested components:

- strain code
- Signal Type code
- Gate number
- random persistent serial

---

# 13. Anti-Cringe and Safety Rules

- Never call it “Which frog are you?”
- Never diagnose users.
- Never claim psychological or scientific accuracy.
- Never frame one result as morally superior.
- Every profile must contain strength and cost.
- Avoid childish labels and fake mysticism.
- Do not imply that the result is destiny.
- Do not assign users to canonical Squad Nine membership.
- Keep language serious, warm and cinematic.

---

# 14. Prototype Acceptance Criteria

The v0.2 prototype passes when:

- all 12 questions render correctly
- answer order can be randomized
- every Signal can score competitively
- primary and secondary results calculate reliably
- hybrids trigger at a 0–2 point gap
- Primary Gate and Secondary Trait generate consistently
- result text always includes strength, cost, role and growth
- First Signal / Bioforge choice does not alter psychological result
- result can be saved locally
- result card can be shared or exported

---

# 15. Blind Test Plan

Test with 15–30 people who have not seen the scoring system.

After completion ask:

1. Did the result feel recognizably like you?
2. Which line felt most accurate?
3. Which line felt least accurate?
4. Did any answer feel obviously linked to a specific character?
5. Did the experience feel serious or gimmicky?
6. Would you share the result?
7. Did the cost/blind spot feel fair rather than negative?
8. Which visual strain did you choose?

Success target:

- 70%+ say result felt broadly accurate
- 50%+ say they would share it
- no Signal receives less than 5% of results in a 30+ person test without review
- no more than 10% describe the experience as childish or gimmicky

---

# 16. Next Build Step

Implement a functional scoring prototype with:

- question data stored as JSON or TypeScript objects
- deterministic scoring engine
- hybrid calculation
- tag calculation
- result-name lookup
- result-copy template
- local persistence
- one First Signal result-card design
- one Bioforge result-card design

**Canon rule:** Signal affinity is participatory identity, not canon replacement.
