'use client';

import dynamic from 'next/dynamic';

// Use dynamic import with no SSR to ensure the component only loads on the client
const ContactUs = dynamic(
  () => import('@/Components/(postclips)/contact-us/ContactUs'),
  { ssr: false }
);

export default function ContactUsPage() {
  return <ContactUs />;
}