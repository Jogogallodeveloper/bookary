Code style and formatting
=========================

We use **Prettier** + **ESLint** to keep code consistent and require semicolons.

Setup (some dependencies may already be installed):

1. Install dev dependencies (if missing):

```bash
npm install --save-dev prettier eslint eslint-config-prettier eslint-plugin-prettier
```

2. Recommended VS Code extensions:

- Prettier - Code formatter (esbenp.prettier-vscode)
- ESLint (dbaeumer.vscode-eslint)

3. Workspace settings enable Format on Save and Fix on Save for ESLint (`.vscode/settings.json`).

4. Useful scripts (already in `package.json`):

- `npm run format`      # format all files
- `npm run format:check`
- `npm run lint:fix`    # lint and auto-fix issues

Optional: To enforce formatting before commit, add `husky` + `lint-staged`. Ask me and I can add that for the repo.
