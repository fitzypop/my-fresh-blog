---
title: The DFPS Stack
published_at:  2023-01-15
---

## My new stack of choice

Thanks to Deno's [v1.28 release](https://deno.com/blog/v1.28), npm and custom repos are usable in Deno applications. Results vary between npm packages, but regardless of performance, a new tech stack has been birthed. A framework decades in the making. Knowledge gather from thousands of hours coding, working in and out of every abstraction layer known to js developers. All converging together to create the most open and easily accessible tech stack to the average developer, we now have:

# DFPS: Deno, Fresh, Prisma, and Supabase!

I'm trying to come up with a catchy acronym or phrase, like "supa fresh primas" or something. But DFSP works as a project title placeholder.

Regardless of title, I'm currently learning how to tie all these technologies and products into a usable and efficeient tech stack. 

Deno and Fresh have been my favorite frontend framework and engine for the past couple months, because I think Deno and Fresh have improved a lot of 
aspects of the JS and React Meta ecosystem (insert current buzzword here). And React is the only component style I know how to use effectively, and Fresh uses preact and twind under the hood. 

Preact is a smaller react bundle, and twind is a replacement for tailwind.

Prisma has been on my radar now since last summer. I haven't, as of writing this post, sat down and written anything using it, 
but it promises some pretty awesome advantages over other ORM + migration tools. Mainly prisma scripts can be applied to a multitude of laungages and integrations with a lot of backends.

And Supabase. I could go on and on about this project, both good and bad. But the supabase team has working their asses off, and their 'firebase alternative' 
platform has become a viable backend for simple web applications.

Also worthy of a shoutout, Deno Deploy. This product gives me the warm and fuzzies as a developer. All I have to do is spin up a deno deploy project, point it to
 a Fresh repon on github, add some env variables and BOMB!!! Frontend deployed to users!

## Objectives

As of now, my goal is to create a usable app, with login, github auth, a usuable user interface, and all the steps to make the app logged and documented.

First though, I need to actually learn how to use prisma and integrate it with a supabase app.

I need to get comfortable with the supabase cli, local development, and deployments.

And I really need to know more about TypeScript. I can write a basic app with it, but I don't feel like I'm getting a lot out of it, over using js.

Also, how do I integrate "Deno Deploy" to the acronym? Encompass it with 'Deno'? IDK, but it's a corner stone of this stack 
