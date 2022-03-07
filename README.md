<p align="center">
  <img src="https://github.com/harshhhdev/groovi/blob/master/public/Banner.png?raw=true" />
  <a href="https://issure.vercel.app/">
    <h2 align="center">Groovi</h2>
  </a>
</p> 
<p align="center">🍃 Create soothing concentration mixes</p>
<p align="center">
  <a href="https://www.figma.com/file/imEzzbwD0dUNAJg2cdF4MK/Issure">Branding/Design Board</a>
    ·
  <a href="https://groovi.hxrsh.in/">Demo</a>
 </p>

# 🚀 Quickstart

Run the website locally

```
git clone https://github.com/harshhhdev/groovi.git
```

## Setting up the development environment

```bash
cd groovi

# Install deps
yarn
```

## Setting up the database

NOTE: This project uses [PostgreSQL](https://www.postgresql.org/) database platform on [Microsoft Azure](https://azure.microsoft.com/en-us/services/postgresql) store data.

To start with this project, go ahead and setup your [PostgreSQL](https://www.postgresql.org/) database, and input your connection string under `DATABASE_URL` in `.env`

```zsh
# Generate the Prisma client
yarn prisma generate

# Migrate the schema into PostgreSQL
yarn prisma migrate dev
```

## Authentication 

As this app uses JWT tokens for authentication, go to [generate-secret](https://generate-secret.now.sh/32) or type in `openssl rand -hex 32`. 

This app also uses [Twitter](https://twitter.com), [Google](https://developers.google.com/) and [Facebook](https://facebook.com/) for authentication.

 - [Twitter: OAuth 2.0 Docs](https://developer.twitter.com/en/docs/authentication/oauth-2-0)
 - [Google: Setting up OAuth 2.0](https://support.google.com/cloud/answer/6158849?hl=en)
 - [Facebook: Manually build a login flow](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/)

## Starting server

```bash
# Start the server
yarn dev
```

Server should now be running on [localhost](https://localhost:3000)

# 🔧 Tools Used

- [Kraftuur](https://harshhhdev.github.io/kraftuur/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://postgresql.org)
- [Prisma](https://prisma.io)
- [NextAuth.js](https://next-auth.js.org/)
- [Next.js](https://nextjs.org/)
- [Stitches](https://stitches.dev/)
- [Framer Motion](https://framer.com/motion)
- [react-icons](https://react-icons.github.io/react-icons/)
- [nanoid](https://zelark.github.io/nano-id-cc/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Figma](https://www.figma.com/)

# 🤞 Contributing

After setting up the project, and making changes:

```git
git add .
git commit -m "commit message"
git push YOUR_REPO_URL YOUR_BRANCH
```
