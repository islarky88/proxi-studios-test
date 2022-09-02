# Docker Deployment

Make sure that Docker is installed and running.

```bash
# npm
docker-compose build
docker-compose up
```

It should be running after the above command. MySQL installed and can then be accessed via http://localhost:3000

# Local Development Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# run prisma scripts
npx prisma migrate deploy
npx prisma generate
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
