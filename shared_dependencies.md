1. Dependencies:
   - SvelteKit: Used in all `.svelte` files for creating components and pages.
   - Tailwind CSS: Used in all `.css` files for styling.
   - Firestore: Used in `firestore.js` for retrieving data, and indirectly used in all routes that display data.

2. Exported Variables:
   - `firestore` from `firestore.js`: Used in all routes that need to retrieve data from the database.

3. Data Schemas:
   - BlogPost schema: Used in `blog.svelte` and `BlogPost.svelte`.
   - PortfolioItem schema: Used in `portfolio.svelte` and `PortfolioItem.svelte`.

4. ID Names of DOM Elements:
   - `navbar`: Used in `Header.svelte` and `Navbar.svelte`.
   - `footer`: Used in `Footer.svelte`.
   - `blog-post`: Used in `blog.svelte` and `BlogPost.svelte`.
   - `portfolio-item`: Used in `portfolio.svelte` and `PortfolioItem.svelte`.

5. Message Names:
   - `NAVIGATION_EVENT`: Used in `Navbar.svelte` and all routes for navigation events.

6. Function Names:
   - `getBlogPosts`: Used in `blog.svelte` and `firestore.js`.
   - `getPortfolioItems`: Used in `portfolio.svelte` and `firestore.js`.

7. CSS Classes:
   - Tailwind CSS utility classes: Used in all `.svelte` and `.css` files for styling.
   - Custom CSS classes defined in `index.css`: Used in all `.svelte` files for styling.