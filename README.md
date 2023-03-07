# OnURL

OnURL is a URL shortener which makes it easy to shorten and share your short URLs.  
Live site on [Vercel](https://vercel.com) is **[here](https://onurl.now.sh/)**.

## Stack

- Framework: [Next.js](https://nextjs.org/)
- UI Components: [Material-UI](https://material-ui.com/)
- Styling: [Emotion](https://emotion.sh/docs/introduction)
- Forms: [Formik](https://jaredpalmer.com/formik)
- Form Validations: [Yup](https://github.com/jquense/yup)
- Icons: [Material Icons](https://material-ui.com/components/material-icons/)
- Social Media Share Buttons: [react-share](https://github.com/nygardk/react-share)
- SEO: [Next SEO](https://github.com/garmeeh/next-seo)
- Database: [MongoDB](https://www.mongodb.com/)
- ODM: [Prisma](https://www.prisma.io/)
- Illustrations: [unDraw](https://undraw.co/)
- Linting: [ESLint](https://eslint.org/)
- Code Formatting: [Prettier](https://prettier.io/)

## Development

First, you need to set a MongoDB connection string for `DATABASE_URL` in `.env.development`.

Install dependencies:

### `npm install`

Create db constaints (like `@unique` indexes):

### `npm run db:migrate`

Run it in development mode:

### `npm run dev`

## Vercel Deployment

First, you need to set a MongoDB connection string for `DATABASE_URL` in `.env.production`.  
[Vercel's Now](https://vercel.com/) is one of the simplest deployment options ever. [Deploying a Next.js App](https://nextjs.org/learn/basics/deploying-a-nextjs-app) guide is just what you would need. I just downloaded the [official cli](https://vercel.com/download) and run `vercel`. That's it!
