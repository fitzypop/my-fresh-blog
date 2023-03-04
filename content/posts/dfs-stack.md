---
title: "My new new favorite stack: DFS"
published_at:  2023-03-03
snippet: "Deno Deploy, Fresh, and Supabase."
---

## Wait, Deja vu?

In my previous post [here](https://fitzypop.deno.dev/blog/dfps-stack), I talked about DFPS stack, which is Deno, Fresh, Prisma, and Supabase. After using this stack in a couple more tiny projects, I found Prisma to be completely unneeded.

Supabase is just that awesome, and maybe my current requirements aren't advanced enough to need an orm like Prisma. Supabase provides soooooo many things out of the box for developers. An sdk that works with Deno, a Postgresql database, multiple types of user auth, etc.

Deno is pretty cool in it's own right. Native typescript, a singular tooling interface (deno cli), more control over script security, and technically more distributed packaging. In practice though, deno.land/x as effectively become the standard to look for deno packages. I wouldn't even know where else to look for one.

### Tangent about distributed systems

Side note, distrubted systems are great to think about, design, engineer, and develop. But an inheret problem with the approach is Discovery, Observablity and Syncing. As a developer with a day job and a son at home, I don't have time to keep up with the constantly shifting landscape of javascript. It's hard enough keeping up with my job's requirements and training to stay up-to-date with best practices and system design.

As a busy developer who likes to hack things together on the weekends, having a single source for third-party libraries is required for me to get simple projects done fast. If I have to hunt down and integrate desparate repos and packages and everything that comes with installing other people's code, I problem will ditch the project if it's too much of a headache.

**BUT**, I completely understand the otherside of the argument. What happens when that original source becomes outdated, bloated, ideological, and dogmatic in its approach, or refuses to compromise with the community? 

Having a builtin mechanism to spin up your own deno package server is awesome, but not many people either want todo that, have the time todo that, or the money.

## Back to our scheduled program

Anyway, Prisma on top of Supabase is bloat for side projects. If I was atempting to build a serious product, I probably wouldn't go with Supabase right now. It's still not technically fully released. It's in like community beta or some weird nebulus status. Kind of like early release games on Steam. The initial launch the product wasn't feature complete, but because of that they don't charge anything. They just give a promise that some day, they will be feature complete enough to "fully release" supabase.

I like this idea though for Supabase, because they are trying to leverage themselves as the "Open Source Alternative to Firebase." This free tier approach is perfect for my needs, and I would love to contribute in turn to supabase's codebase.

I've actually been looking at the supabase-cli go repo. One, to get a better understanding of "production go code", and two because I thought I found a bug and wanted todo a PR. But it turns out, I'm just a retard who doesn't rtfm!

In my defense, their TUI prompt for supabase-cli isn't always great. And their abbreviations between the docs and the cli text doesn't match either.

## My new favorite from this point

Deno - amazing js engine, written in rust, native typescript  
Fresh - NextJS routing, Astro islands, and a middleware and api framework  
Supabase - The Open Source Alt. to Firebase, user auth, realtime and storage

This will be my framework of choice for my website side projects.

Until the new shiny changes my mind again.
