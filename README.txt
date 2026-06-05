SPACEFROGS WEBSITE v1.4 — NETLIFY FORM NO SUCCESS REDIRECT

This replaces v1.3.

Why:
- /success.html was still giving 404 on the Netlify site.
- This version removes the dependency on the success page.
- The form now posts to "/" so it cannot hit a missing success URL.

Main changes:
- Form action changed from /success.html to /
- Version badge updated to v1.4
- Playtest Control Panel marker updated to v1.4

Files needed in GitHub:
- index.html
- README.txt

Optional:
- success.html can stay in the repo, but v1.4 does not depend on it.

After GitHub commit and Netlify deploy:
1. Open the live site.
2. Submit a test signup.
3. It should not go to /success.html.
4. In Netlify, go to Forms.
5. Look for form: spacefrogs-launch-signal.
