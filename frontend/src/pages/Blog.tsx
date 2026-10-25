import { Link } from 'react-router-dom';
import { posts, CATEGORIES, BlogPost } from '../blog';
import { AdSenseBanner, formatDate } from '../components';
import { useSeo } from '../seo';

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-200 ring-1 ring-gray-900/5 shadow-lg overflow-hidden hover:border-brand-pink hover:ring-brand-pink/20 hover:shadow-2xl hover:-translate-y-1 transition-all"
    >
      {post.image && (
        <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
          <img
            src={post.image}
            alt={post.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-blue transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">{post.description}</p>
        <div className="mt-4 text-xs text-gray-400">
          {formatDate(post.date)} &middot; {post.readingTime} min read
        </div>
      </div>
    </Link>
  );
}

export default function Blog() {
  useSeo({ path: '/blog' });

  const [featured, ...rest] = posts;
  const sections = CATEGORIES
    .map(c => ({ ...c, posts: rest.filter(p => p.category === c.id) }))
    .filter(c => c.posts.length > 0);

  return (
    <>
      {/* ═══ Header ═══ */}
      <section className="relative py-16 sm:py-20 bg-brand-blue-dark border-b border-black/20 overflow-hidden">
        <img src="/email-hero-2-web.jpeg" alt="The Email Writing Blog" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand-blue-dark/85" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-white">
            The Email Writing Blog
          </h1>
          <p className="mt-5 leading-8 text-white/90 max-w-2xl mx-auto">
            Practical guides on writing better emails: subject lines, greetings, sign-offs, follow-ups,
            etiquette, and everything in between. Free advice from the team behind the free email signature generator.
          </p>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="py-20 bg-page-bg">
          <div className="mx-auto max-w-3xl px-6 text-center text-gray-500">
            New articles are on the way. Check back soon.
          </div>
        </section>
      ) : (
        <section className="py-16 sm:py-20 bg-page-bg">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Featured post */}
            {featured && (
              <Link
                to={`/blog/${featured.slug}`}
                className="group block bg-white rounded-2xl border border-gray-200 ring-1 ring-gray-900/5 shadow-lg overflow-hidden hover:border-brand-pink hover:ring-brand-pink/20 hover:shadow-2xl hover:-translate-y-1 transition-all mb-12 sm:grid sm:grid-cols-2"
              >
                {featured.image && (
                  <div className="aspect-[16/10] sm:aspect-auto sm:h-full bg-gray-100 overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.imageAlt}
                      loading="eager"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
                    />
                  </div>
                )}
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-gray-600 leading-relaxed">{featured.description}</p>
                  <div className="mt-4 text-sm text-gray-400">
                    {formatDate(featured.date)} &middot; {featured.readingTime} min read
                  </div>
                </div>
              </Link>
            )}

            {/* Topic jump links */}
            <nav aria-label="Blog topics" className="mb-12 flex flex-wrap justify-center gap-2">
              {sections.map(c => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  {c.label}
                </a>
              ))}
            </nav>

            {/* One grid per topic */}
            <div className="space-y-16">
              {sections.map((c, i) => (
                <div key={c.id}>
                  <section id={c.id} aria-labelledby={`${c.id}-heading`} className="scroll-mt-20">
                    <h2 id={`${c.id}-heading`} className="text-2xl font-bold text-gray-900">{c.label}</h2>
                    <p className="mt-2 mb-6 text-gray-500">{c.blurb}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {c.posts.map(post => <PostCard key={post.slug} post={post} />)}
                    </div>
                  </section>

                  {/* Single in-feed ad after the first topic */}
                  {i === 0 && (
                    <div className="mt-16 bg-page-bg-alt rounded-xl">
                      <AdSenseBanner />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-14">
              <Link
                to="/create"
                className="bg-brand-pink hover:bg-brand-pink-dark text-white rounded-md px-6 py-3 font-semibold transition-colors inline-block"
              >
                Create your free email signature
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
