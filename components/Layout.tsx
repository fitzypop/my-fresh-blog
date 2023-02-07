import { Head, IS_BROWSER } from "$fresh/runtime.ts";
import { site } from "../utils/site.ts";
import { Footer } from "../components/Footer.tsx";
import { ComponentChildren } from "preact";

export interface LayoutProps {
  title?: string;
  children: ComponentChildren;
}

export function Layout(props: LayoutProps) {
  const title = props.title ? `${site.title} - ${props.title}` : site.title;

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={site.description} />
        {/* Theme */}
        <meta name="theme-color" content="#000" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:image" content={site.ogImage} />
        <meta
          property="og:url"
          content={`https://fitzypop.deno.dev/${
            IS_BROWSER ? window.location.pathname : ""
          }`}
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={site.description} />
        <meta property="twitter:image" content={site.ogImage} />
      </Head>
      <body class="font-sans leading-normal tracking-normal">
        <div
          class="min-h-screen grid grid-cols-1 bg-default text-gray-300"
          style="grid-template-rows: auto 1fr auto;"
        >
          {props.children}
          <Footer />
        </div>
      </body>
    </>
  );
}
