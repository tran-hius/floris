# =========================
# 1. Builder Stage
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy source
COPY frontend ./frontend
COPY shared ./shared

# Move vào frontend
WORKDIR /app/frontend

# Install deps
RUN npm install

# Build next app
RUN npm run build

# =========================
# 2. Runner Stage
# =========================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy built app
COPY --from=builder /app/frontend/.next ./.next
COPY --from=builder /app/frontend/public ./public
COPY --from=builder /app/frontend/package.json ./package.json
COPY --from=builder /app/frontend/node_modules ./node_modules
COPY --from=builder /app/frontend/next.config.ts ./next.config.ts

EXPOSE 3000

CMD ["npm", "start"]