import { Handlers, PageProps } from "$fresh/server.ts";
import * as gfm from "$gfm";
import { Container } from "@/components/Container.tsx";
import { loadPost, Post } from "@/utils/posts.ts";
import { Header } from "@/components/Header.tsx";
import { ServerCodePage } from "@/routes/_404.tsx";
import { Layout } from "@/components/Layout.tsx";
import { Head } from "$fresh/runtime.ts";

interface Data {
  post: Post | null;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const post = await loadPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render({ post });
  },
};

export default function PostPage(props: PageProps<Data>) {
  const { post } = props.data;
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
      </Head>
      <Layout title={post?.title}>
        <Header />
        <main>
          {post ? (
            <Container>
              <h1 class="font-bold text-5xl pt-12 text-gray-100">
                {post.title}
              </h1>
              <time class="inline-block mt-4">
                {new Date(post.publishedAt).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <div class="mt-4">{post.snippet}</div>
              <div
                class="mt-8 mb-12 markdown-body !bg-default !text-gray-300"
                dangerouslySetInnerHTML={{ __html: gfm.render(post.content) }}
              ></div>
            </Container>
          ) : (
            <ServerCodePage
              serverCode={404}
              codeDescription={"We couldn't find the post you're looking for."}
            />
          )}
        </main>
      </Layout>
    </>
  );
}
