# Inventory Management System

## View Demo

[Demo](http://asd.com)

## Running the application

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

## Package Used

1. Prisma as database adapter
2. prisma-next-crud-generator to generate CRUD
3. fakerJS  
4. prisma-generator-fake-data to generate composable seeder
5. prisma-markdown to generate ERD. View ERD [here](https://asd.com)
6. NextAuth for authentication

## Credit to

1. NextAuth for authentication module database design
2. Laravel Spatie Permission for authorization database design

## Package in development

1. NextCrud which compatible with NextJS 14+

    Current NextCrud package does not compatible with NextJS 13+ due to changes in app router convention
