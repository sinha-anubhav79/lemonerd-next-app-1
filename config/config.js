const dev = process.env.NODE_ENV !== 'production';

export const server = process.env.NODE_ENV === "development" ? process.env.SERVER_URI: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;