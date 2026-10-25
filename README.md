# Verdora (p-commerce)

React + React Router DOM + Tailwind CSS v4 + Context API, using the FakeStore API.

## Run
    npm install
    npm run dev

## Colours
The site uses only this palette: ice, powder, sky, azure, cornflower, cobalt, sapphire,
royal, navy, midnight. All colours live in one block at the top of `src/index.css`
(`@theme { ... }`). Edit that block to re-theme the site; no other file needs to change.
Cards and the header use `--color-surface` (white). Set it to `#dadce7` for a fully palette-only look.

## Change the API
Open `src/config.js` and change `API_URL`.
Note: the code reads FakeStore fields (`image`, `rating.rate`). DummyJSON uses `thumbnail`,
a plain `rating` number and returns `{ products: [...] }`.

## Structure
    src/
      main.jsx                 Router + ProductProvider
      App.jsx                  Routes
      config.js                API_URL
      index.css                Tailwind + colour palette
      context/ProductContext   products + loading (cart logic removed; buttons are text only)
      layout/RootLayout        Header + Outlet + Footer
      components/common/       Header, Footer, ProductCard (no JS responsive logic; Tailwind classes only), Lightfall (WebGL hero animation from reactbits.dev)
      pages/                   Home, Shop, ProductDetails, Cart, About, Contact, Login, Signup (UI only)
