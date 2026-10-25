// Server entry used only at build time by scripts/prerender.mjs.
//
// renderToString turns each route into static HTML that gets baked into the
// served page, so crawlers (and the AdSense reviewer) see real content instead
// of an empty <div id="root">. The client then hydrates this markup. getRoutes
// enumerates every prerenderable URL, including dynamic blog posts, so the
// prerender step and sitemap stay in sync with the actual content.

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import { SEO_PAGES } from './seo.data';
import { posts } from './blog';
import { templates } from './templates';
import { TEMPLATE_DETAILS } from './templateDetails';
import { templateSeo } from './pages/TemplateDetail';
import { lastUpdated as changelogUpdated } from './changelog';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  noindex: boolean;
  image?: string;
  lastmod?: string;
}

export function getRoutes(): RouteMeta[] {
  const routes: RouteMeta[] = [];

  for (const [path, meta] of Object.entries(SEO_PAGES)) {
    routes.push({
      path,
      title: meta.title,
      description: meta.description,
      noindex: !!meta.noindex,
      lastmod: path === '/changelog' ? changelogUpdated : meta.updated,
    });
  }

  for (const t of templates) {
    routes.push({
      path: `/templates/${t.id}`,
      ...templateSeo(t.name, TEMPLATE_DETAILS[t.id].tagline),
      noindex: false,
      lastmod: SEO_PAGES['/templates'].updated,
    });
  }

  for (const post of posts) {
    routes.push({
      path: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      noindex: false,
      image: post.image,
      lastmod: post.date,
    });
  }

  return routes;
}

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
