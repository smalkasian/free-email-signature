import { Link, useParams } from 'react-router-dom';
import { templates, SAMPLE_DATA, SAMPLE_PHOTOS } from '../templates';
import { TEMPLATE_DETAILS } from '../templateDetails';
import { getPost } from '../blog';
import { StyleOptions } from '../types';
import { PageHero } from '../components';
import { useSeo } from '../seo';
import NotFound from './NotFound';

const PREVIEW_STYLE: StyleOptions = { accentColor: '#1B8FF2', separatorColor: '#e5e7eb', iconColor: '#6b7280', addressTwoLines: false };
// A second brand color shows how the accent changes the template.
const ALT_STYLE: StyleOptions = { accentColor: '#16A34A', separatorColor: '#d1d5db', iconColor: '#16A34A', addressTwoLines: true };

export function templateSeo(name: string, tagline: string) {
  return {
    title: `${name} Email Signature Template | Free Signature Co.`,
    description: `Free ${name.toLowerCase()} email signature template for Gmail, Outlook, and Apple Mail. ${tagline}`,
  };
}

export default function TemplateDetail() {
  const { id = '' } = useParams();
  const index = templates.findIndex(t => t.id === id);
  const template = templates[index];
  const detail = template ? TEMPLATE_DETAILS[template.id] : undefined;

  useSeo({
    path: `/templates/${id}`,
    ...(template && detail ? templateSeo(template.name, detail.tagline) : { title: 'Template Not Found | Free Signature Co.', noindex: true }),
  });

  if (!template || !detail) return <NotFound />;

  const withPhoto = { ...SAMPLE_DATA, photoUrl: SAMPLE_PHOTOS[index % SAMPLE_PHOTOS.length] };
  const noPhoto = { ...SAMPLE_DATA, photoUrl: '', addressLine1: '400 Locust Street, Suite 200', addressLine2: 'Des Moines, IA 50309' };
  const reading = detail.reading.map(getPost).filter(p => p !== undefined);
  const others = templates.filter(t => t.id !== template.id);

  const sections: { heading: string; body: string }[] = [
    { heading: 'Layout', body: detail.layout },
    { heading: 'Photo or logo', body: detail.photo },
    { heading: 'Brand color', body: detail.color },
    { heading: 'Long contact details', body: detail.contact },
    { heading: 'Watch out for', body: detail.watchOut },
  ];

  return (
    <>
      <PageHero
        title={`${template.name} Email Signature Template`}
        subtitle={detail.tagline}
        image="/email-hero-web.jpeg"
      />

      <section className="py-12 sm:py-16 bg-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/templates" className="hover:text-gray-700 transition-colors">Templates</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{template.name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <figure className="min-w-0">
              <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-2xl shadow-gray-500/30 overflow-x-auto">
                <div dangerouslySetInnerHTML={{ __html: template.build(withPhoto, PREVIEW_STYLE) }} />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600 text-center">With a photo and the default blue accent</figcaption>
            </figure>
            <figure className="min-w-0">
              <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-2xl shadow-gray-500/30 overflow-x-auto">
                <div dangerouslySetInnerHTML={{ __html: template.build(noPhoto, ALT_STYLE) }} />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600 text-center">No photo, a green accent, and a two-line address</figcaption>
            </figure>
          </div>
          <div className="mt-10 text-center">
            <Link
              to={`/create?template=${template.id}`}
              className="bg-brand-pink hover:bg-brand-pink-dark text-white rounded-md px-6 py-3 font-semibold transition-colors inline-block"
            >
              Use the {template.name} template
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-page-bg-alt">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-gray-200 ring-1 ring-gray-900/5 shadow-lg p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-gray-900">Who it suits</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">{detail.whenToUse}</p>

            {sections.map(s => (
              <div key={s.heading} className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">{s.heading}</h2>
                <p className="mt-2 text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">Email client support</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Like every template here, {template.name} is built from inline-styled HTML tables, so it renders in
                Gmail, Outlook on the web, new Outlook, Apple Mail, and Thunderbird. Classic Outlook for Windows ignores
                rounded corners, so round and rounded photos appear square there. Everything else looks the same. For
                installation steps, see the guides for{' '}
                <Link to="/how-to-add-email-signature-gmail" className="text-brand-blue hover:text-brand-blue-hover font-medium">Gmail</Link>,{' '}
                <Link to="/how-to-add-email-signature-outlook" className="text-brand-blue hover:text-brand-blue-hover font-medium">Outlook</Link>, and{' '}
                <Link to="/how-to-add-email-signature-apple-mail" className="text-brand-blue hover:text-brand-blue-hover font-medium">Apple Mail</Link>.
              </p>
            </div>

            {reading.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">Further reading</h2>
                <ul className="mt-3 space-y-2 list-disc list-inside text-gray-600">
                  {reading.map(p => (
                    <li key={p.slug}>
                      <Link to={`/blog/${p.slug}`} className="text-brand-blue hover:text-brand-blue-hover font-medium">{p.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-page-bg">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Compare other templates</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {others.map(t => (
              <Link
                key={t.id}
                to={`/templates/${t.id}`}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 hover:border-brand-blue hover:shadow-md transition-all"
              >
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="mt-1 text-xs text-gray-500 leading-snug">{t.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
