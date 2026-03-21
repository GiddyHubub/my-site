import Link from 'next/link';
import Image from 'next/image'; // Recommended for Next.js

export default function Navbar() {
  return (
    <nav 
      className="p-0 pt-3 flex justify-center items-end sticky top-0 z-50 bg-cover bg-center overflow-hidden relative" 
      style={{ 
        backgroundImage: "url('/parchment2.png')",
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.69)',
        height: 'auto',
      }} 
    >
      {/* White Overlay */}
      <div 
        className="absolute" 
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.35)',
          width: '100%',
          maxWidth: '700px',
          height: '30px',
          left: '50%',
          bottom: '6px',
          transform: 'translateX(-50%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      
      {/* Links Container */}
      <div className="flex justify-center items-end gap-4 relative z-10">
        {/* Left Links */}
        <Link href="/home" className="hover:text-white nav-link tracking-wide pb-2 -mr-1">Home</Link>
        <Link href="/about" className="hover:text-white nav-link tracking-wide pb-2 -mr-1" style={{ paddingLeft: '25px' }}>About Me</Link>
        <Link href="/services" className="hover:text-white nav-link tracking-wide pb-2 -mr-25" style={{ paddingLeft: '25px', zIndex: 10 }}>Services</Link>
        
        {/* Logo Container */}
        <div className="flex flex-col items-center gap-2 px-0">
          <Image 
            src="/healingka2.png" 
            alt="Healing Ka Logo" 
            width={400} 
            height={400}
            className="object-contain"
            style={{ maxWidth: '300px', maxHeight: '200px' }}
          />
          <Image 
            src="/healingka_logo.png" 
            alt="Logo" 
            width={65} 
            height={55}
            className="object-contain"
            style={{ maxWidth: '300px', maxHeight: '70px' }}
          />
        </div>
        
        {/* Right Links */}
        <Link href="/schedule" className="hover:text-white nav-link tracking-wide pb-2 -ml-25" style={{ paddingRight: '25px' }}>Schedule</Link>
        <Link href="/shop" className="hover:text-white nav-link tracking-wide pb-2 -ml-1" style={{ paddingRight: '25px' }}>Shop</Link>
        <Link href="/contact" className="hover:text-white nav-link tracking-wide pb-2 -ml-1">Contact</Link>
        </div>
    </nav>
  );
}
