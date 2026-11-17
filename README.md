# Sonia Cakes — React storefront + separate API

A responsive, Kenyan cake shop and cake academy starter. The storefront uses a cart, custom cake details, order submission to the API, and opens a pre-filled WhatsApp conversation at checkout. Orders are recorded by the API before the WhatsApp handoff. Admins can manage orders, cake listings, descriptions, prices, photos and video/social links.

## Run locally

1. Install Node.js 20 or newer.
2. In `backend`, copy `.env.example` to `.env`, set a long `ADMIN_PASSWORD`, and set `WHATSAPP_NUMBER` in international format without `+` (Kenyan example: `2547XXXXXXXX`). For durable online orders, provide a Neon PostgreSQL connection string in `DATABASE_URL`; without it, local JSON files are used for development.
3. In `frontend`, copy `.env.example` to `.env` and set `VITE_API_URL=http://localhost:4000`.
4. From this folder run `npm install`, `npm install --prefix backend`, `npm install --prefix frontend`, then `npm run dev`.
5. Open `http://localhost:5173`; admin is at `/admin`.

The API uses Neon/PostgreSQL for durable orders and product data when `DATABASE_URL` is set, and local JSON files for development. Configure Cloudflare R2 variables in the backend to keep uploaded photos and videos durable across deploys. Set a strong `JWT_SECRET`, `ADMIN_PASSWORD`, `CORS_ORIGIN`, `WHATSAPP_NUMBER`, and `DATABASE_URL` in production. Deploy `frontend` and `backend` as separate services. Without R2, uploads are stored locally and can be lost when a hosted service restarts.

## Deploy

**Vercel frontend:** Import the repository and set the project Root Directory to `frontend`. Vercel detects Vite; use `npm run build` and `dist`. Add `VITE_API_URL` (the deployed API URL with no trailing slash), `VITE_WHATSAPP_NUMBER` (Kenya country code, digits only), and `VITE_INSTAGRAM_URL` (Sonia's confirmed profile URL) as environment variables, then redeploy.

**Render API:** Create a Node web service with Root Directory `backend`, Build Command `npm install`, and Start Command `npm start`. Set `CORS_ORIGIN` to the exact deployed Vercel origin. Set `DATABASE_URL` to a Neon PostgreSQL connection string; set a strong `ADMIN_PASSWORD`, `ADMIN_EMAIL`, `JWT_SECRET`, and the same `WHATSAPP_NUMBER`. For media that survives redeploys, set `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET`, and `R2_PUBLIC_BASE_URL` to the bucket's public custom domain. `/api/health` is the health-check endpoint.

## Sonia's social content

The provided TikTok links are in the home page's “From Sonia's kitchen” gallery and point back to @mesangora. TikTok controls whether each embed is viewable; visitors can always open the original post. The inspiration reference informed the shoppable categories, add-to-cart flow, delivery messaging, customer feedback, and social gallery; this implementation has original branding and layout.

Instagram is configurable through `VITE_INSTAGRAM_URL` (the example uses @mesangora based on the supplied TikTok name; confirm this is Sonia's Instagram account). Add the production WhatsApp number before launch.
