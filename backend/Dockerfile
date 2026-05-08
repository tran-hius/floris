# 1. Base image
FROM node:18-alpine

# 2. Root workspace
WORKDIR /app

# 3. Copy shared + backend
COPY shared ./shared
COPY backend ./backend

# 4. Move into backend
WORKDIR /app/backend

# 5. Install deps
RUN npm install

# 6. Build TS
RUN npm run build

# 7. Remove dev deps
RUN npm prune --production

# 8. Expose
EXPOSE 8080

# 9. Run
CMD ["node", "dist/backend/src/server.js"]