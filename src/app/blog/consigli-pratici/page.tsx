import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { getPostsByCategory, categoryLabels } from "@/lib/blog/index";

export const metadata: Metadata = {
  title: "Consigli Pulizie Professionali | BP Cleaning",
  description:
    "Consigli pratici per la pulizia e manutenzione di uffici, condomini e ambienti professionali. Trucchi, prodotti e tecniche dei professionisti.",
  alternates: {
    canonical: "https://www.bpcleaning.it/blog/consigli-pratici",
  },
};

export default function ConsigliPraticiCategoryPage() {
  const posts = getPostsByCategory("consigli-pratici");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Consigli Pratici" },
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Consigli Pratici per le Pulizie
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trucchi del mestiere, prodotti consigliati e tecniche professionali
              per mantenere ogni ambiente pulito e igienizzato.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-[#0d9488] transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Tutti gli articoli
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/blog/guide"
              className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition"
            >
              Guide
            </Link>
            <Link
              href="/blog/normativa"
              className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition"
            >
              Normativa
            </Link>
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
                className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col overflow-hidden"
              >
                <Link href={`/blog/${post.slug}`} className="relative h-48 block">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-1">
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
                  <p className="text-gray-600 mb-4 flex-1 text-sm">{post.excerpt}</p>
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
                </div>
              </article>
            ))}
          </div>
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
