"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NotFoundPage() {
    const pathname = usePathname();
    const location = { pathname };

    // Convert URL path to readable title (e.g., "/company/about-us" -> "About Us")
    const title = location.pathname.split('/').pop()?.replace(/-/g, ' ');
    
    return <div className="py-32 container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-slate-800 capitalize mb-4">
            {title || 'Page Not Found'}
        </h1>
        <p className="text-slate-500 text-lg mb-8">
            This page is currently under construction. Please check back later!
        </p>
        <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700">
            Go Back Home
        </Link>
    </div>;
}
