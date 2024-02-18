#FROM denoland/deno:1.40.5
FROM denoland/deno:alpine-1.40.4

ENV DENO_DEPLOYMENT_ID=2024.02.17

WORKDIR /app

COPY . .
RUN deno cache main.ts

EXPOSE 8000

CMD ["run", "-A", "main.ts"]
