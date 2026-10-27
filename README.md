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

## React Bits animations
CSS for all four is at the bottom of `src/utility/animations.css`. Components: `src/components/animations/`.
- MaskedHeading (needs `gsap`): Home hero title, image `public/hero-mask.svg`
- SpecularButton (WebGL2): hero buttons on Home and About
- CircularCarousel: Home "Trending Now"
- FlipCard (needs `motion`): About "What we stand for"
Run `npm install` after unzipping (gsap and motion were added to package.json).

## Photos
Optimised copies live in `src/assets/img/` (your originals are still in `src/assets/`; you can delete them to shrink the project).
about-hero, shop-hero, cart-hero, contact-hero (page banners) | login-bg, signup-bg (side photo) | team-bg (Meet Our Team) |
quality/pricing/care-card (About flip cards) | delivery/secure/support-card + cart-hero (Home benefits) | mall-bg (Home newsletter)

## API backup
If the API fails (offline, blocked, error, empty answer or no reply in 8 seconds), `ProductContext` shows the saved copy
in `src/data/products.json` with the local images in `src/assets/products/`. To change the saved data, edit that JSON file
(keep the image file names in sync with the files in `src/assets/products/`).

## Pop-ups (SweetAlert2)
All pop-ups are in one file: `src/utility/alerts.js` (helpers: toastSuccess, toastInfo, showSuccess, showError, confirmAction).
Pages never import `sweetalert2` directly. Theme classes (`.verdora-swal`, `.verdora-toast`) are at the bottom of `src/index.css`.
Used for: Add to cart (toast), remove item (toast), Clear cart (confirm), Checkout (confirm + success), Login / Sign up (success, validation errors),
Contact (success), Newsletter (toast).
