import { Metadata } from 'next';
import ClientPage from './client-page';

export const metadata: Metadata = {
  title: 'Category Directory',
  description: 'Find professionals and services in various categories',
};

// This is a Server Component that can be statically generated
export default function CategoryPage({ params }: { params: { category: string, subcategory: string } }) {
  return <ClientPage params={params} />;
}

export function generateStaticParams() {
  return [
    { category: 'professionals', subcategory: 'doctors-specialists' },
    { category: 'professionals', subcategory: 'lawyers-advocates' },
    { category: 'services', subcategory: 'healthcare' },
    { category: 'services', subcategory: 'education' },
    { category: 'services', subcategory: 'financial' },
    { category: 'institutions', subcategory: 'schools' },
    { category: 'institutions', subcategory: 'hospitals' },
    { category: 'personalities', subcategory: 'leaders' },
    { category: 'personalities', subcategory: 'experts' },
  ];
} 