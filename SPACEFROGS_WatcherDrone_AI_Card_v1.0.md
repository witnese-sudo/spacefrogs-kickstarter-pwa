# SPACEFROGS™ WATCHER DRONE AI CARD v1.0

Use this as a simple enemy AI card for Mission 0.

## WATCHER DRONE TURN

For each Watcher Drone, check in order:

### 1. TARGET
Can the Drone see a Frog in range?
- YES: Shoot.
- NO: Continue.

### 2. SIGNAL
Is there a Noise token on the board?
- YES: Move toward nearest Noise token.
- NO: Continue.

### 3. OBJECTIVE
Move toward the Relay Objective.

### 4. SCAN
If adjacent to the Relay Objective:
- Add +1 Alert.

---

## ALERT 3+
Aggressive protocol activates.

If the Drone can see a Frog:
- Shoot first.
- Then move toward cover, relay or signal if needed.

---

## DESIGN FEEL

The Drone should not feel like a human soldier.

It follows:
SIGNAL → TARGET → PROTOCOL → PRESSURE

It should be:
- readable
- cold
- consistent
- relentless

If players can predict it, that is good.
If players can exploit it too easily, add Alert pressure.
