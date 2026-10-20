This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses `next/font` to load Raleway and Merriweather.

## Particle landing screen

`components/landingTransition.tsx` wraps the existing portfolio with the supplied React Bits `Particles` and `TextType` components. The headline **Hi, I'm Niko.** types once with a blue cursor, with **Scroll to explore** above the entry arrow. The landing screen uses the existing charcoal, white, gray, and blue palette. Scroll one viewport or activate **Scroll to explore** to zoom and blur into the portfolio. Scroll back to the top to reverse the transition.

The portfolio uses internal scrolling. The outer document scrollbar is hidden while scrolling remains enabled; the portfolio's internal scrollbar stays visible. Hidden portfolio controls are inactive until entry; the entry link supports keyboard navigation and transfers focus to the portfolio. Reduced-motion preferences replace the zoom/blur with a fade and static particles. Without JavaScript, the portfolio is shown directly.

Adjust particle and typing settings in `components/landingTransition.tsx`; transition styles are scoped in `components/landingTransition.module.css`. The supplied components live in `components/Particles.tsx` / `Particles.css` and `components/TextType.tsx` / `TextType.css`. TextType uses GSAP for cursor animation and respects reduced-motion preferences. Browsers without WebGL2 still show the landing text and entry link.

A 4px white loading bar sits at the top of the landing screen on a transparent track. `components/landingLoadingBar.tsx` tracks document and font readiness, fills the bar, then fades it away. The bar remains outside the zooming scene and respects reduced-motion preferences.

## Responsive layout

The portfolio fills the available viewport with navigation above a single internal scroll area. Below 768px, the profile sits above the content and scrolls with the page. At 768px and wider (tablet and desktop), it sits alongside the content and stays pinned while the content scrolls. In short windows, the card can scroll independently so all its links remain reachable. Resizing or rotating after entry keeps the portfolio open.

Headings scale with the viewport. Projects stack images above descriptions below 640px and use rows on larger screens. Tool grids choose columns from the available content width, with icons that retain their proportions. Navigation has 44px touch targets, and contact fields fit narrow screens with 16px text and visible keyboard focus. Layout rules live in `app/layout.module.css`; section typography lives in `app/globals.css`.

## Portfolio scroll reveals

`app/page.tsx` uses `components/scrollReveal.tsx` to reveal elements marked with `data-scroll-reveal` in Home, Projects, Tools, and Contacts. Headings, paragraphs, project cards, tool items, and the contact form fade in and move up 24px with a 650ms ease-in transition. Items entering together are staggered by 75ms, capped at 225ms.

The observer follows the portfolio's internal `main` scroll area and starts after the landing transition completes. Each element reveals once, including when reached through navigation links. Keyboard focus reveals controls immediately. Reduced-motion preferences, unavailable IntersectionObserver, and disabled JavaScript leave content visible without animation. Timing and motion are defined in `components/scrollReveal.module.css`.

## Contact form feedback

`components/contactForm.tsx` calls `sendContactMessage` from `lib/contact.ts`, which submits JSON directly from the browser to Web3Forms. This supports the Web3Forms free plan; no `/api/contact` server proxy is used. Keep request logic in this helper and interaction feedback in the component.

Set `NEXT_PUBLIC_WEB3FORMS_KEY=YOUR_WEB3FORMS_ACCESS_KEY` in a root `.env` or `.env.local` file. This replaces the previous server-only `accessKey` name. Restart development after environment changes, and set this variable before production builds because Next.js embeds public variables at build time. Web3Forms access keys are designed to be public; this prefix exposes this specific key to the browser. The helper handles missing configuration, unsuccessful or non-JSON responses, and network errors without clearing form values.

The submit button stays full width and 44px tall in every state: blue with its normal label when idle, a centered 20px spinner while sending, a checkmark and "Message sent!" on `--successcolor`, or an X and "Couldn't send. Try again." on `--errorcolor`. Success uses dark text for contrast. Colors transition over 300ms with ease-in timing. Submission is disabled while sending; success clears the form, and errors retain the entered fields for retry. A visually hidden live region announces feedback. Reduced-motion settings stop the spinner animation and color transition.

`components/atoms/button.tsx` forwards native button props so the form can provide styling and accessibility attributes. Verify feedback by mocking the Web3Forms endpoint to avoid sending real messages. Server-side Web3Forms delivery requires a paid plan and IP approval; the browser helper avoids that requirement.

## Container workflow

With Docker running:

```bash
docker build -t portfolio-dev .
docker run --rm -p 3000:3000 portfolio-dev
```

Run the project checks in the container:

```bash
docker run --rm portfolio-dev sh -c "npm run lint && npx tsc --noEmit && npm run build"
```

If the Docker engine is unavailable, use the existing local dependencies: `npm run lint`, `npx tsc --noEmit`, and `npm run build`. Next.js 16 keeps the development output under `.next/dev` and production output under `.next`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
