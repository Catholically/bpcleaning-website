import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { getAllPosts, getPostBySlug, categoryLabels } from "@/lib/blog";
import { generateArticleSchema, generateFAQSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.metaTitle} | BP Cleaning`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.bpcleaning.it/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = generateArticleSchema({
    title: post.metaTitle,
    description: post.metaDescription,
    url: `https://www.bpcleaning.it/blog/${post.slug}`,
    datePublished: post.date,
  });

  const faqSchema = generateFAQSchema(post.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0d9488] bg-teal-900/40 px-3 py-1 rounded-full">
                {categoryLabels[post.category]}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                {post.readingTime} min di lettura
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <time dateTime={post.date} className="text-gray-400">
              {new Date(post.date).toLocaleDateString("it-IT", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          {post.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {section.content}
              </p>
              {section.list && (
                <ul className="space-y-2 mb-4">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#0d9488] rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Internal Links */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Approfondisci
            </h3>
            <div className="flex flex-col gap-2">
              {post.internalLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-[#0d9488] font-medium hover:text-[#0f766e] transition"
                >
                  <ArrowRight className="w-4 h-4" />
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Domande Frequenti
            </h2>
            <div className="space-y-4">
              {post.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Back + CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna al blog
            </Link>
            <Link
              href="/preventivo"
              className="inline-block bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition"
            >
              Richiedi Preventivo Gratuito
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
