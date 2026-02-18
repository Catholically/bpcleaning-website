import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { getAllPosts, categoryLabels, type BlogPost } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog Pulizie Professionali | Guide e Consigli | BP Cleaning",
  description:
    "Guide, consigli pratici e normativa sulle pulizie professionali. Articoli su pulizia uffici, condomini, studi medici, trattamento pavimenti e sanificazione.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria } = await searchParams;
  const allPosts = getAllPosts();
  const activeCategory = categoria as BlogPost["category"] | undefined;
  const posts = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog Pulizie Professionali
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Guide pratiche, normativa e consigli per la pulizia e
              sanificazione di uffici, condomini e ambienti professionali.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-500">Filtra:</span>
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                !activeCategory
                  ? "bg-[#1e3a5f] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              Tutti
            </Link>
            {(
              Object.entries(categoryLabels) as [BlogPost["category"], string][]
            ).map(([key, label]) => (
              <Link
                key={key}
                href={`/blog?categoria=${key}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === key
                    ? "bg-[#1e3a5f] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0d9488] bg-teal-50 px-3 py-1 rounded-full">
                    {categoryLabels[post.category]}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    {post.readingTime} min
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <time
                    dateTime={post.date}
                    className="text-sm text-gray-400"
                  >
                    {new Date(post.date).toLocaleDateString("it-IT", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-[#0d9488] font-semibold hover:text-[#0f766e] transition text-sm"
                  >
                    Leggi <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                Nessun articolo in questa categoria.
              </p>
              <Link
                href="/blog"
                className="inline-block mt-4 text-[#0d9488] font-semibold hover:text-[#0f766e] transition"
              >
                Vedi tutti gli articoli
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hai bisogno di un servizio di pulizia professionale?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Richiedi un preventivo gratuito e senza impegno. Rispondiamo entro 2
            ore.
          </p>
          <Link
            href="/preventivo"
            className="inline-block bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition"
          >
            Richiedi Preventivo Gratuito
          </Link>
        </div>
      </section>
    </>
  );
}
