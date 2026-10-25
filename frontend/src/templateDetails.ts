// Written descriptions of each signature template, shared by the /templates
// overview and the per-template pages at /templates/:id.
//
// The layout, photo, color, and contact notes describe what each template's
// builder in templates.ts actually renders. Update them when a builder changes.

import { TemplateId } from './types';

export interface TemplateDetail {
  tagline: string;
  whenToUse: string;
  layout: string;
  photo: string;
  color: string;
  contact: string;
  watchOut: string;
  // Blog posts that pair well with this template (slugs).
  reading: string[];
}

export const TEMPLATE_DETAILS: Record<TemplateId, TemplateDetail> = {
  professional: {
    tagline: 'A polished corporate signature with photo, dividers, and clear contact hierarchy.',
    whenToUse: 'Best for client-facing roles, sales, recruiting, and anyone in a buttoned-up industry where a headshot reinforces trust.',
    layout: 'Two columns. Your photo sits on the left with your social icons centered beneath it, and a vertical divider separates it from your name, title, company, and contact details on the right. Without a photo, it collapses to a single column with the social icons at the bottom.',
    photo: 'The largest photo of any template, at 130 pixels wide and cropped to a circle. That size suits a clear headshot. A small or busy logo can look oversized here, so consider Compact or Corporate for logos.',
    color: 'Uses your divider color for the vertical rule and the horizontal line under your company name. The accent color is not used, so the look stays neutral whatever your brand color is.',
    contact: 'Every contact detail gets its own line, and both address lines always print separately. That makes it the most forgiving template for long email addresses and full street addresses.',
    watchOut: 'It is also the tallest layout, so in a long reply thread it takes up more space than Compact or Minimal.',
    reading: ['email-signature-photo', 'email-signature-etiquette', 'how-to-write-a-professional-email'],
  },
  minimal: {
    tagline: 'Pure text, a single divider, and not a pixel of decoration.',
    whenToUse: 'Best for engineers, writers, founders, and anyone who finds heavy signatures embarrassing on a plain-text reply.',
    layout: 'A single column: your name, then your title and company joined with "at", a short divider, and your email, phone, and website on one line separated by dots. Your address and social icons follow underneath.',
    photo: 'Optional. When you add one, it appears above your name at 80 pixels in a circle. Most people using Minimal leave it out.',
    color: 'Only your divider color and icon color are used. Names and links stay in neutral grays, so the signature never clashes with a colorful email thread.',
    contact: 'Email, phone, and website share one line. With a long email address or website, that line wraps on narrow phone screens, which still reads fine but looks less tidy.',
    watchOut: 'Because it is so plain, a missing title or company is very noticeable. Fill in both if you have them.',
    reading: ['how-to-write-concise-emails', 'how-to-end-an-email', 'email-signature-etiquette'],
  },
  modern: {
    tagline: 'Accent bar on the left with contemporary spacing and typography.',
    whenToUse: 'Best for startups, designers, and product folks who want a touch of brand color without looking like a banner ad.',
    layout: 'A 3 pixel accent-colored bar runs down the left of your details. Your name is the largest text, followed by title and company separated by a vertical bar, then each contact detail on its own line.',
    photo: 'Shown to the left of the accent bar at 100 pixels with gently rounded corners rather than a circle, which suits logos and headshots equally well.',
    color: 'Your accent color drives the side bar, your name, and your website link. Pick a color with enough contrast against white, since your name is printed in it.',
    contact: 'One detail per line, so long addresses and email addresses never crowd each other.',
    watchOut: 'A very light accent color, such as pale yellow, makes your name hard to read. Darker brand colors work best.',
    reading: ['email-in-dark-mode', 'email-signature-photo', 'mobile-friendly-emails'],
  },
  bold: {
    tagline: 'A colored header bar and strong type for maximum visual presence.',
    whenToUse: 'Best for agencies, freelancers, and anyone using their signature as a small piece of personal branding.',
    layout: 'A solid accent-colored header holds your name and title in white. Below it, a bordered box holds your contact details on one line, then your address and social icons.',
    photo: 'Placed to the right of the whole block at 100 pixels with rounded corners.',
    color: 'Your accent color fills the header bar and colors your website link. Your divider color draws the border around the contact box. White text sits on the accent color, so choose a mid to dark shade.',
    contact: 'Email, phone, and website share a single line separated by dots, which keeps the box short but wraps with long details.',
    watchOut: 'Your company only appears in the header when you also fill in a title ("Title at Company"). If you leave the title blank, the company is not shown.',
    reading: ['email-signature-etiquette', 'email-in-dark-mode', 'networking-email'],
  },
  compact: {
    tagline: 'A condensed, one-line-feeling layout that takes up the least possible space.',
    whenToUse: 'Best for high-volume email senders, support teams, and anyone who replies thirty times a day and hates seeing their own giant signature in every thread.',
    layout: 'Your name, title, and company share one line, and your email, phone, and website share a second. Address and social icons sit below in smaller type, with tighter spacing between icons than any other template.',
    photo: 'A small 50 pixel circle beside the text, vertically centered. It works well for a logo mark or a tightly cropped headshot.',
    color: 'No accent color is used. Text stays in grays and only your icon color changes, so it fits any brand.',
    contact: 'Built for short details. Very long titles or email addresses make the two main lines wrap, which undoes some of the compactness.',
    watchOut: 'At 50 pixels, detailed logos with small text become unreadable. Use a simple mark or initials.',
    reading: ['customer-service-email-templates', 'reply-all-etiquette', 'inbox-zero'],
  },
  elegant: {
    tagline: 'A centered serif layout with symmetric dividers and quiet, refined typography.',
    whenToUse: 'Best for consultants, lawyers, writers, and anyone in a field where a classic, understated look reads as more credible than a splash of brand color.',
    layout: 'Everything is centered and set in Georgia, a serif font every email client has. Your name is followed by a short divider, then your title and company in spaced capitals, then your contact details on one line.',
    photo: 'Optional, centered above your name at 90 pixels in a circle.',
    color: 'Your accent color is used only for the title and company line, and your divider color for the rule under your name. That restraint keeps the look formal even with a bright brand color.',
    contact: 'Email, phone, and website share one centered line. Long details wrap onto a second centered line, which keeps the symmetry.',
    watchOut: 'The title line is uppercase with wide letter spacing, so a long title like "Senior Director of Business Development" gets very wide. Shorten it if you can.',
    reading: ['formal-vs-casual-email-tone', 'how-to-write-a-professional-email', 'email-disclaimer'],
  },
  sidebar: {
    tagline: 'A colored side panel holds your photo and name next to a clean block of contact details.',
    whenToUse: 'Best for people who want a business-card feel with a touch of brand color, without the signature taking over the message.',
    layout: 'A 140 pixel accent-colored panel on the left holds your photo, name, and title in white. To the right, your company name leads a clean block of contact details, one per line.',
    photo: 'An 80 pixel circle with a thin white ring, centered in the colored panel.',
    color: 'Your accent color fills the side panel and colors your website link. Because your name is white on that panel, mid to dark colors read best.',
    contact: 'Each detail gets its own line on the right, so long details are fine. Your title in the panel has less room, so very long titles wrap within it.',
    watchOut: 'The panel is a fixed 140 pixels wide. A long name may wrap to two lines inside it.',
    reading: ['email-signature-photo', 'networking-email', 'introduction-email'],
  },
  stacked: {
    tagline: 'A centered single column with the photo on top and everything aligned down the middle.',
    whenToUse: 'Best for personal brands, creators, and anyone who wants a balanced, symmetric signature that reads well on both desktop and mobile.',
    layout: 'A single centered column: photo, name, title and company, a short divider, then each contact detail on its own line and your social icons at the bottom.',
    photo: 'A 110 pixel circle at the top, the second largest photo of any template.',
    color: 'No accent color is used. Your divider color draws the short center rule and your icon color sets the social icons.',
    contact: 'One detail per line, centered, so nothing crowds on a narrow screen. That makes it one of the best templates for people who mostly email from a phone.',
    watchOut: 'It is tall, like Professional. If you send a lot of short replies, Compact will feel lighter.',
    reading: ['mobile-friendly-emails', 'email-signature-for-students', 'email-signature-photo'],
  },
  corporate: {
    tagline: 'A formal two-column layout with labeled contact rows and a short accent rule.',
    whenToUse: 'Best for finance, legal, enterprise sales, and anyone whose signature needs to look like it came out of a brand guidelines document.',
    layout: 'A short, thick accent rule sits on top. Below it, your name, title, and company sit in the left column, and labeled rows (Email, Phone, Web, Office) sit in the right column, with a divider between them. Social icons get their own row along the bottom.',
    photo: 'An 80 pixel square with slightly rounded corners on the far left, which suits a company logo as well as a headshot.',
    color: 'Your accent color draws the top rule and your company name, which is set in spaced capitals, and colors your website link. Your divider color separates the columns and the social row.',
    contact: 'Labeled rows keep long details tidy, and your address appears under "Office". It is the clearest template for people with several ways to be reached.',
    watchOut: 'It is the widest layout. On small phone screens some email apps shrink it to fit, so check it on your own phone after installing.',
    reading: ['email-disclaimer', 'professional-email-address', 'email-signature-etiquette'],
  },
  creative: {
    tagline: 'A softly tinted card with an accent bar across the top and a rounded photo.',
    whenToUse: 'Best for designers, marketers, and small teams who want a friendly, branded card that still renders cleanly in every email client.',
    layout: 'A light gray card with a 4 pixel accent bar across the top. Your name leads, your title and company follow in bold accent color, and your contact details stack below, one per line.',
    photo: 'An 84 pixel square with rounded corners on the right side of the card.',
    color: 'Your accent color draws the top bar and your title line. The card background is a fixed very light gray, which keeps it distinct from the email body.',
    contact: 'Contact details stack one per line inside the card, so long details are fine.',
    watchOut: 'The card relies on rounded corners. Classic Outlook for Windows shows them square, which still looks clean but less soft.',
    reading: ['email-in-dark-mode', 'newsletter-writing', 'email-signature-photo'],
  },
};
