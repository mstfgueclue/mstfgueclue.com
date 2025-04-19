import { notFound } from "next/navigation";
import { getPostBySlug } from "../../../lib/content-utils";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  let MDXContent;
  try {
    const module = await import(`../../../content/blog/${params.slug}.mdx`);
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
          {new Date(post.date).toLocaleDateString()}
        </time>
      )}
      <div className="mt-8">
        <MDXContent />
      </div>
    </div>
  );
}
