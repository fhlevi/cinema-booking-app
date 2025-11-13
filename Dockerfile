FROM node:20.9.0-alpine3.18 AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json ./
RUN npm install --legacy-peer-deps

FROM base AS builder

RUN apk add --no-cache

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS runner

WORKDIR /app
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3125

CMD ["node", "./dist/server/entry.mjs"]



