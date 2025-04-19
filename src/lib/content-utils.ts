import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export async function getAllPostsMeta() {
  const files = fs.readdirSync(BLOG_DIR);
  const posts = [];

  for (const filename of files) {
    if (filename.endsWith(".mdx")) {
      const slug = filename.replace(".mdx", "");
      const post = await getPostBySlug(slug);
      if (post) {
        posts.push(post);
      }
    }
  }

  // Sort by date
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug) {
  try {
    const module = await import(`../content/blog/${slug}.mdx`);
    const { metadata } = module;

    if (!metadata) {
      console.error(`No metadata found for ${slug}`);
      return null;
    }

    return {
      slug,
      title: metadata.title || "Untitled Post",
      date: metadata.date || null,
      description: metadata.description || "",
      tags: metadata.tags || [],
    };
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error);
    return null;
  }
}
