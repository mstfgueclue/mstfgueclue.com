import { getAllPostsMeta } from "../../lib/content-utils";

export async function BlogSection() {
  const posts = await getAllPostsMeta();

  return (
    <div className="py-24 sm:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-5xl font-decoration tracking-tight mb-8 -skew-y-2 text-balance">
          Mein digitales Notizbuch für Software, Architektur & Technik
        </h2>
        <div className="space-y-4 text-lg">
          <p>
            Ich dokumentiere hier regelmäßig meine Erkenntnisse, Erfahrungen und
            technische Lösungsansätze, sowohl für mich selbst als auch für alle,
            die sich für Softwarearchitektur, Entwicklung oder allgemeine
            IT-Themen interessieren.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 pt-10 sm:mt-16 sm:pt-16 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="shadow rounded-xl p-8 bg-white gap-2"
          >
            <h3 className="font-bold text-gray-900 group-hover:text-gray-600 text-balance">
              <a href={`/blog/${post.slug}`}>{post.title}</a>
            </h3>
            {post.date && (
              <time
                dateTime={post.date}
                className="text-gray-400 text-sm font-medium"
              >
                {new Date(post.date).toLocaleDateString()}
              </time>
            )}
            {post.description && (
              <p className="mt-2 text-gray-600">{post.description}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
