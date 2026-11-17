# TERRYNOVA Studio — starter prototype

This repository contains the first branded interface for TERRYNOVA, an AI video creation studio.

## Files
- `index.html` — responsive front-end prototype.
- `worker.js` — Cloudflare Worker placeholder for a future secure backend.

## Important: what works now
- The landing page and project brief form display in a browser.
- The form validates that a prompt was entered and explains the next integration step.

## What is not connected yet
This starter does **not** generate video, voice, music, sound effects or subtitles. It does not yet provide 30-minute projects or 4K exports. Those require provider integrations, asynchronous job processing, storage, rendering and testing. Free website hosting does not mean unlimited free AI generation or rendering.

## Safe deployment notes
- Do not put API keys, passwords or provider tokens in `index.html`, GitHub commits or public source code.
- Store secrets in your backend platform's secret manager only.
- Check each provider's age requirements, terms, pricing and commercial-use rights. Ask a parent/guardian to help with any account that requires an adult account holder.
- Use original characters, voices and music, or assets you have permission to use.

## Suggested next architecture
1. Static site hosting for this interface.
2. Worker/API backend for authentication, validation and provider requests.
3. Database and object storage for projects and generated assets.
4. Queue-based scene generation for long projects.
5. Separate audio, subtitle and video-rendering stages.
6. Export pipeline with verified resolution and duration limits.
