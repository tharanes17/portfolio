# GitHub Pages Deployment Guide

## Overview

This guide explains how the portfolio application is configured for deployment on GitHub Pages with proper routing support.

## Routing Issues and Solutions

### Problem
GitHub Pages doesn't support client-side routing by default. When users navigate directly to URLs like:
- `https://username.github.io/portfolio/about`
- `https://username.github.io/portfolio/projects`

They get a 404 error because GitHub Pages looks for actual files at those paths.

### Solution
We've implemented a comprehensive solution using:

1. **Router Basename Configuration**: React Router is configured with the correct basename for production
2. **404.html Redirect**: A custom 404 page that redirects all routes to index.html
3. **URL Restoration**: JavaScript in index.html restores the original URL from the redirect

## Configuration Files

### 1. App.tsx - Router Configuration
```typescript
<Router basename={process.env.NODE_ENV === 'production' ? '/portfolio' : '/'}>
```

### 2. vite.config.ts - Base Path
```typescript
base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
```

### 3. package.json - Homepage
```json
"homepage": "https://tharanes17.github.io/portfolio"
```

### 4. public/404.html - Redirect Handler
This file contains JavaScript that redirects all 404s to index.html with the original path as a query parameter.

### 5. index.html - URL Restoration
Contains JavaScript that restores the original URL from the query parameter and updates the browser history.

## Deployment Process

### 1. Build the Application
```bash
npm run build
```

### 2. Deploy to GitHub Pages
```bash
npm run deploy
```

This command:
- Runs the predeploy script (build)
- Uses gh-pages to deploy the dist folder to the gh-pages branch

### 3. Configure GitHub Pages
1. Go to your repository settings
2. Navigate to Pages section
3. Set source to "Deploy from a branch"
4. Select "gh-pages" branch
5. Set folder to "/ (root)"
6. Save the configuration

## Testing the Deployment

### Expected Behavior
1. **Direct Navigation**: `https://username.github.io/portfolio/about` should work
2. **Internal Navigation**: Clicking links should work without page reloads
3. **Browser Back/Forward**: Should work correctly
4. **Bookmarking**: Any page URL should be bookmarkable

### Test Cases

| Test Case | Expected Result |
|-----------|-----------------|
| Navigate to `/portfolio` | Home page loads correctly |
| Navigate to `/portfolio/about` | About page loads correctly |
| Navigate to `/portfolio/projects` | Projects page loads correctly |
| Navigate to `/portfolio/contact` | Contact page loads correctly |
| Click "Home" from any page | Navigate to home page |
| Click "About" from any page | Navigate to about page |
| Use browser back button | Previous page loads correctly |
| Use browser forward button | Next page loads correctly |
| Bookmark any page URL | Page loads correctly when accessed directly |

## Troubleshooting

### Common Issues

1. **404 Errors on Direct Navigation**
   - Ensure 404.html is in the public folder
   - Verify the redirect script is working

2. **Incorrect Base Path**
   - Check vite.config.ts base configuration
   - Verify package.json homepage setting

3. **Router Not Working**
   - Ensure Router basename is set correctly
   - Check that all links use React Router's Link component

4. **Assets Not Loading**
   - Verify base path in vite.config.ts
   - Check that assets are being built to the correct location

### Debug Steps

1. **Check Browser Console**: Look for JavaScript errors
2. **Verify Network Tab**: Ensure all assets are loading from correct paths
3. **Test Locally**: Run `npm run preview` to test the production build locally
4. **Check GitHub Pages Logs**: Look for deployment errors in GitHub Actions

## File Structure After Deployment

```
gh-pages branch:
├── index.html
├── 404.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
└── vite.svg
```

## Security Considerations

- The 404.html redirect script is safe and only handles routing
- No sensitive information is exposed in the client-side code
- All external links use `rel="noopener noreferrer"`

## Performance Notes

- The redirect script runs only once per page load
- No additional network requests are made for routing
- The solution is lightweight and doesn't impact performance

## Future Considerations

- If moving to a custom domain, update the homepage in package.json
- If changing the repository name, update all path configurations
- Consider implementing service worker for offline support 