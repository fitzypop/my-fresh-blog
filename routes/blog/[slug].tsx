import { Handlers, PageProps } from "$fresh/server.ts";
import * as gfm from "$gfm";
import { Container } from "../../components/Container.tsx";
import { loadPost, Post } from "../../utils/posts.ts";
import { Header } from "../../components/Header.tsx";
import { ServerCodePage } from "../_404.tsx";
import { Marked } from "markdown";

// TODO use marked instead of gfm
// interface Data {
//   post: Post | null;
// }

export const handler: Handlers = {
  async GET(_req, ctx) {
    // const post = await loadPost(ctx.params.slug);
    const decoder = new TextDecoder("utf-8");

    const markdown = decoder.decode(
      await Deno.readFile(`./data/posts/${ctx.params.slug}.md`),
    );
    return ctx.render({ ...ctx.state, markdown });
  },
};

export default function PostPage(props: PageProps) {
  const { markdown } = props.data;
  const markup = Marked.parse(markdown);
  // console.log(markup.content);
  // console.log(JSON.stringify(markup.meta));

  return markdown
    ? (
      <>
        <Header />
        <Container>
          <h1 class="font-bold text-5xl pt-20 mb-4">{markup.meta.title}</h1>

          {
            /* <time class="inline-block mt-4">
            {new Date(markup.meta.publishedAt).toLocaleDateString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time> */
          }
          {/* <style dangerouslySetInnerHTML={{ __html: gfm.CSS }} /> */}
          {
            /* <article
            class="mt-12 markdown-body"
            data-color-mode="dark"
            data-dark-theme="dark"
            dangerouslySetInnerHTML={{ __html: gfm.render(post.content) }}
          /> */
          }
          <article>{markup.content}</article>
        </Container>
      </>
    )
    : (
      <ServerCodePage
        serverCode={404}
        codeDescription={"We couldn't find the post you're looking for."}
      />
    );
}
