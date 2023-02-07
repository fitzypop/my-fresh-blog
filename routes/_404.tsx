import { FlexRowCenter } from "../components/Flex.tsx";
import { Header } from "../components/Header.tsx";
import { Layout } from "../components/Layout.tsx";

export function ServerCodePage(
  props: { serverCode: number; codeDescription: string },
) {
  return (
    <>
      <Header />
      <main>
        <FlexRowCenter class="w-full mt-10">
          <div class="text-center">
            <h1 class="text-6xl md:text-9xl font-extrabold">
              {props.serverCode}
            </h1>

            <p class="p-4 text-2xl md:text-3xl">
              {props.codeDescription}
            </p>

            <p class="p-4">
              <a href="/" rel="noopener noreferrer" class="hover:underline">
                Back to the Homepage
              </a>
            </p>
          </div>
        </FlexRowCenter>
      </main>
    </>
  );
}

export default function PageNotFound() {
  return (
    <Layout>
      <ServerCodePage
        serverCode={404}
        codeDescription={"We couldn't find the page you're looking for."}
      />
    </Layout>
  );
}
