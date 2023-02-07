import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts, Post } from "../utils/posts.ts";
import { Container } from "../components/Container.tsx";
import { HomeHeader } from "../components/HomeHeader.tsx";
import { Layout } from "../components/Layout.tsx";

interface Data {
  posts: Post[];
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const posts = await listPosts();
    return ctx.render({ ...ctx.state, posts });
  },
};

export default function Home(props: PageProps<Data>) {
  const { posts } = props.data;
  return (
    <>
      <Layout>
        <HomeHeader />
        <main>
          <Container>
            <ul>
              {posts.map((post) => (
                <li class="border-t">
                  <a
                    href={`/blog/${post.slug}`}
                    class="py-12 pl-5 group grid sm:grid-cols-3"
                  >
                    <time class="">
                      {new Date(post.publishedAt).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <div class="sm:col-span-2">
                      <h2 class="text-2xl font-bold group-hover:underline text-gray-100">
                        {post.title}
                      </h2>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </main>
      </Layout>
    </>
  );
}
