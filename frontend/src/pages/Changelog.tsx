import { Link } from 'react-router-dom';
import { changelog } from '../changelog';
import { PageHero, formatDate } from '../components';
import { useSeo } from '../seo';

// Optional public source repo; the GitHub mention is hidden when unset.
const SOURCE_URL = import.meta.env.VITE_SOURCE_URL || '';

export default function Changelog() {
  useSeo({ path: '/changelog' });

  return (
    <>
      <PageHero
        title="Changelog"
        subtitle="Every user-facing change to the signature generator, newest first."
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80&auto=format&fit=crop"
      />
      <section className="py-16 sm:py-20 bg-page-bg-alt">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <ol className="relative border-l-2 border-gray-300 ml-2 space-y-10">
            {changelog.map(entry => (
              <li key={entry.date + entry.title} className="pl-6 sm:pl-8">
                <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-brand-blue border-2 border-white" aria-hidden="true" />
                <time dateTime={entry.date} className="text-sm font-medium text-gray-500">{formatDate(entry.date)}</time>
                <div className="mt-2 bg-white rounded-2xl border border-gray-200 ring-1 ring-gray-900/5 shadow-sm p-5 sm:p-6">
                  <h2 className="text-lg font-semibold text-gray-900">{entry.title}</h2>
                  <ul className="mt-3 space-y-2 text-gray-600 leading-relaxed list-disc list-inside">
                    {entry.changes.map(c => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 text-center text-gray-600 leading-relaxed">
            {SOURCE_URL && (
              <p>
                Have an idea or found a bug? The project is{' '}
                <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-blue-hover font-medium">open source</a>,
                and the full commit history is public.
              </p>
            )}
            <Link
              to="/create"
              className="mt-6 bg-brand-pink hover:bg-brand-pink-dark text-white rounded-md px-6 py-3 font-semibold transition-colors inline-block"
            >
              Create your free signature
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
