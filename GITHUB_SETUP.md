# GitHub Repository Setup Instructions

## Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `little-professor-app` (or your preferred name)
4. Description: "Educational math practice app inspired by the classic Little Professor toy"
5. Choose visibility: Public or Private
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Connect Local Repository to GitHub

After creating the GitHub repository, run these commands:

```bash
cd little-professor-app

# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/little-professor-app.git

# Verify the remote was added
git remote -v

# Push your code to GitHub
git branch -M main
git push -u origin main
```

## Verify Setup

1. Go to your GitHub repository page
2. Verify all files are present (README.md, .gitignore, package.json, tsconfig.json)
3. Check that the README displays correctly

## Next Steps

After repository is created:
- Set up GitHub Actions workflows for CI/CD
- Configure branch protection rules
- Create issue templates
- Add project description and topics

---

*Created: 2025-11-06*

