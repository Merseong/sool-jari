# Sool-Jari

안녕하세요

## Prisma settings

DB 만드는 명령어

```bash
# 그냥 DB파일만 만들때
npx prisma db push

# DB 테이블의 변경사항을 적용
npx prisma migrate dev

# 만들어진 DB를 확인하는 인터페이스
npx prisma studio
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
