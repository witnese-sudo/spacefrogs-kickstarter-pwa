SPACEFROGS WEBSITE v1.5 — AJAX NETLIFY FORM FIX

This replaces v1.4.

Why:
- The form was still causing a 404 after submit.
- v1.5 prevents navigation completely.
- The form submits in the background using fetch('/').
- The user stays on the same page.
- No /success.html dependency.
- No action="/" redirect dependency.

Main changes:
- Adds hidden Netlify detection form
- Adds visible AJAX signup form
- Adds inline success/error message
- Updates version badge to v1.5
- Updates Playtest Control Panel marker to v1.5

Files needed in GitHub:
- index.html
- README.txt

After GitHub commit and Netlify deploy:
1. Open the working Netlify preview/production URL.
2. Confirm badge: SPACEFROGS HQ // v1.5
3. Scroll to Launch List.
4. Submit test.
5. It should stay on the same page.
6. Check Netlify → Forms for:
   spacefrogs-launch-signal

If Netlify Forms still does not show submissions:
- Wait 1 minute after deploy.
- Trigger Deploy latest commit once.
- Re-submit the form.
