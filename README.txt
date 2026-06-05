SPACEFROGS WEBSITE v1.3 — NETLIFY FORMS SIGNUP

This replaces v1.2.

Main practical upgrade:
- Converts Launch List placeholder into a real Netlify Forms form:
  * name / callsign
  * email
  * interest type
  * region
  * optional message
- Adds bot-field honeypot spam protection
- Adds /success.html confirmation page
- Updates visible version badge to v1.3
- Updates Playtest Control Panel marker to v1.3

After GitHub commit and Netlify deploy:
1. Open the live site.
2. Submit a test signup.
3. In Netlify, go to Forms.
4. Look for form: spacefrogs-launch-signal.
5. If the test appears, the signup backend is active.

Netlify settings remain:
- Branch: main
- Base directory: blank
- Build command: blank
- Publish directory: .
