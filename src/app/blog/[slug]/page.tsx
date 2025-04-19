import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostsMeta, getPostBySlug } from "../../../lib/content-utils";

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// generate static params for all posts
export async function generateStaticParams() {
  const posts = await getAllPostsMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

// generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description || `Read ${post.title}`,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  let MDXContent;
  try {
    const module = await import(`../../../content/blog/${slug}.mdx`);
    MDXContent = module.default;
  } catch (e) {
    console.error("Failed to load MDX content:", e);
    notFound();
  }

  return (
    <div className="prose mx-auto max-w-2xl px-6 py-10">
      <h1>{post.title}</h1>
      {post.date && (
        <time dateTime={post.date} className="text-gray-500">
          {new Date(post.date).toISOString().split("T")[0]}
        </time>
      )}
      <div className="mt-8">
        <MDXContent />
      </div>
    </div>
  );
}
