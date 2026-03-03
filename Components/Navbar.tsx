import Link from 'next/link';
export default function Navbar() {
    return (
        <nav className="p-5 flex justify-between items-center bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <h1 className="text-xl font-bold">Shop</h1>
        <div className="space-x-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About Me</Link>
            <Link href="/about" className="hover:text-blue-600">Services</Link>
            <Link href="/shop" className="hover:text-blue-600">Shop</Link>
        </div>
        </nav>
    );
    }
