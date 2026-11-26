# Coorg Myco Ventures

The website for Coorg Myco Ventures, an oyster mushroom grower in Kushalnagar, Kodagu. Customers can explore the daily harvest, order fresh mushrooms through WhatsApp, and find nutrition information and five easy recipes.

**Delivery is available only in Kushalnagar, Kodagu, Karnataka.**

[Live website](https://coorg-myco-ventures.vercel.app/) · [Instagram](https://www.instagram.com/coorgmycoventures/)

## Run locally

The site uses plain HTML, CSS, and JavaScript. From the repository root, serve the `dist` directory with Python 3.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Open [localhost on port 8000](http://localhost:8000/).

## Project structure

| Path | Purpose |
| --- | --- |
| `dist/index.html` | Homepage, harvest details, growing story, nutrition, recipes, and ordering |
| `dist/styles.css` | Responsive layout, typography, and styling |
| `dist/navigation.js` | Mobile navigation and keyboard focus |
| `dist/assets/` | Logo and mushroom imagery |
| `vercel.json` | Vercel configuration that serves `dist` as a static site |

## Deployment

Vercel serves the tracked files in `dist`. The repository includes the output directory configuration, so it can be deployed from the repository root without a build step.
