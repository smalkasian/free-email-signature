// Public changelog shown at /changelog.
//
// Hand-written from the git history so it reads for users, not developers.
// Add a new entry at the top whenever a user-visible change ships. The newest
// entry's date also becomes the page's sitemap lastmod (see entry-server.tsx).

export interface ChangelogEntry {
  date: string; // ISO yyyy-mm-dd, the day it shipped
  title: string;
  changes: string[];
}

export const changelog: ChangelogEntry[] = [
  {
    date: '2026-10-25',
    title: 'A page for every template, and this changelog',
    changes: [
      'Each of the ten templates now has its own page with a live preview, who it suits, and how it handles photos, color, and long contact details.',
      'The Create page has a full guide and FAQ below the editor covering phone formatting, transparent photos, and email client support.',
      'Added this changelog so you can see what changed and when.',
      'Setup guides now show when they were last updated.',
      'The blog is now organized by topic, and signature articles link to the template pages.',
    ],
  },
  {
    date: '2026-07-23',
    title: 'International phone format',
    changes: [
      'New "International format" checkbox under the phone field. With UK selected, 020 7946 0958 becomes +44 20 7946 0958: the country code is added and the leading zero dropped.',
      'Unticking it converts the number back to national format.',
      'Numbers stay in national as-you-type formatting until they are complete and valid, so partial numbers are never mangled.',
      'Your choice is remembered between visits and works for every country in the list.',
    ],
  },
  {
    date: '2026-07-20',
    title: 'Mastodon, Signal, and two-line addresses',
    changes: [
      'Added Mastodon and Signal to social links, for fourteen networks in total.',
      'New "Show address on two lines" option for longer street addresses.',
      'Added footer links to send feedback or request a new template.',
    ],
  },
  {
    date: '2026-07-19',
    title: 'Phone numbers for every country',
    changes: [
      'A country selector next to the phone field formats numbers the way they are written locally, as you type.',
      'Numbers that start with + use their own country code automatically.',
      'Your selected country is remembered between visits.',
    ],
  },
  {
    date: '2026-07-16',
    title: 'Transparent photos and more reliable uploads',
    changes: [
      'The photo cropper can now keep a transparent background, saved as PNG, or fill it with white or any custom color.',
      'Uploaded photos are checked to make sure they load before they are added to your signature, so a failed upload can no longer leave a broken image.',
      'Upload sessions refresh themselves if they expire instead of failing silently.',
    ],
  },
  {
    date: '2026-07-07',
    title: 'Create page guide',
    changes: [
      'Added a how-it-works section and FAQ under the signature editor.',
    ],
  },
  {
    date: '2026-06-24',
    title: 'Five new templates',
    changes: [
      'Added the Elegant, Sidebar, Stacked, Corporate, and Creative templates, bringing the total to ten.',
      'Improved layouts on phones and small screens across the site.',
      'Removed a third-party ad network to cut down on ads.',
    ],
  },
  {
    date: '2026-06-07',
    title: 'Faster pages that work without JavaScript',
    changes: [
      'Every page is now served as ready-made HTML, so content appears immediately and is readable even before scripts load.',
      'Reduced the number of ads on every page.',
      'Added image banners and card layouts to the guide pages.',
    ],
  },
  {
    date: '2026-06-01',
    title: 'Gmail and Mac generator pages',
    changes: [
      'Added dedicated signature generator pages for Gmail and for Mac and Apple Mail.',
      'Redesigned the templates showcase so each preview card fits its signature.',
      'Added a "choose your email client" section to the home page.',
    ],
  },
  {
    date: '2026-05-29',
    title: 'My Signatures and setup guides',
    changes: [
      'New My Signatures page keeps a history of the signatures you copy, stored only in your own browser.',
      'Added step-by-step setup guides for Gmail, Outlook, and Apple Mail, plus a signature best practices guide.',
      'The footer now shows how many signatures have been created with the tool.',
    ],
  },
  {
    date: '2026-05-27',
    title: 'New name: Free Signature Co.',
    changes: [
      'The site was renamed from My Free Email Signature to Free Signature Co.',
    ],
  },
  {
    date: '2026-04-08',
    title: 'New logo, one less ad',
    changes: [
      'Removed a pop-under ad that opened new windows when you clicked the page.',
      'Added a logo and favicon.',
    ],
  },
  {
    date: '2026-04-06',
    title: 'Launch',
    changes: [
      'Five templates: Professional, Minimal, Modern, Bold, and Compact.',
      'Photo upload with in-browser cropping, social links, and brand colors.',
      'Copy as rich text for your email client, or as raw HTML.',
      'No account, no paywall, and no watermark.',
    ],
  },
];

export const lastUpdated = changelog[0].date;
