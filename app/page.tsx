import Carousel from "@/Components/Carousel";
import ServicesCards from "@/Components/ServicesCards";

export default function Home() {
  return (
    
    <main className="w-full flex flex-col">
      {/* 1. Banner Image*/}
      <section className="w-full">
        <div className="w-full overflow-hidden border-2 border-[#6174a1] shadow-[0_8px_10px_-1px_rgba(60,40,0,0.55)]">
          <div className="w-full h-64 sm:h-90 lg:h-[600px] overflow-hidden">
            <img alt="content" className="object-cover object-[50%_10%] h-full w-full" src="/reikithera.jpg" />
          </div>
        </div>
      </section>


{/* --- Empty Break Start --- */}
<div className="h-[60px] lg:h-[110px] w-full" />
{/* --- Empty Break End --- */}


      {/* 2. Carousel Testimonials */}
      <div className="mt-0 lg:mt-0 p-0">
      <Carousel />
      </div>


{/* --- Empty Break Start --- */}
<div className="h-[60px] lg:h-[110px] w-full -mt-12 lg:-mt-10 overflow-hidden" aria-hidden="true" />
{/* --- Empty Break End --- */}


{/* 3. Healing Info Image & Text Box */}
<section className="w-full pt-0 mt-0">
  {/* Title */}
  <div className="w-full text-center mb-4 lg:mb-10 px-6">
    <h2 className="text-3xl lg:text-4xl font-bold text-[#6986be] [-webkit-text-stroke:1px_#6986be] tracking-[-0.02em] [word-spacing:-0.1em] leading-tight">
      Awaken to the love the Universe has for you.
    </h2>
  </div>

  {/* Main Container for Image and Text Box */}
  <div className="w-full flex flex-col lg:flex-row items-start pt-0 lg:pr-12">

    {/* B. Left Side: Image (Order 1 on Mobile, Order 1 on Desktop now) */}
    <div className="w-full lg:w-1/2 flex justify-center order-1">
      <div className="w-full relative">
        <img 
          src="/yinyang_chakras2.png"
          alt="Healing Session"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>

    {/* C. Right Side: Dynamic Text Box */}
    <div className="w-full lg:w-1/2 bg-white/50 rounded-lg 
    px-8 lg:px-12 py-6 lg:py-8
    border border-gray-200 shadow-sm 
    h-fit 
    flex flex-col items-start justify-start gap-6 order-3">
        <p className="leading-relaxed indent-4 lg:indent-12 [word-spacing:-0.02em] lg:[word-spacing:-0.15em] text-left">
        ‘Healing Ka’ is a name inspired by the Egyptian perspective: each being
is made up of several parts designed to work together in harmony.  However,
life is messy and it’s difficult to live balanced each day in an imbalanced world.
Using the arts of Reiki, Qi Gong, and my psychic abilities, I offer a 
unique style of healing for the mind, body, and soul.
</p>

<p className="leading-relaxed indent-4 lg:indent-12 [word-spacing:-0.02em] lg:[word-spacing:-0.15em] text-left">
The Ka is the expression of where your soul meets your body, creating
a spiralling energy field made up of many smaller spirals.  These spirals, or
'chakras,' condense throughout your center, circulating electric and magnetic
energy through a network of pathways called meridian lines.  Through my
training in Qi Gong and Reiki and my study of acupuncture, I combine this
knowledge with my psychic gifts to feel and manipulate energy flow in
order to promote healing.  Though true healing starts at the spiritual level, 
I use my psychic abilities to see your soul at a deeper level, uncover deeper
physical and spiritual memory, emotions and karmic patterns, and provide
deep healing to restore balance to all the parts of you.
      </p>
    </div>

  </div>
</section>


{/* --- Empty Break Start --- */}
<div className="h-[60px] lg:h-[110px] w-full" />
{/* --- Empty Break End --- */}


{/* 4. Split-Screen Content Box */}
<section className="w-full mt-0">
  {/* The White Box Container */}
  <div className="w-full bg-white/50 border-y border-gray-200 shadow-[0_8px_10px_-1px_rgba(60,40,0,0.55)] overflow-hidden">
    
    {/* Internal Flex Wrapper: Row on Desktop, Column on Mobile */}
    <div className="w-full flex flex-col lg:flex-row items-stretch">
      
      {/* LEFT HALF: Reiki Couch */}
      <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-auto overflow-hidden">
        <img 
          src="/reiki_couch.jpg" 
          alt="Reiki Couch" 
          className="w-full h-full object-cover object-center" 
        />
      </div>

      {/* RIGHT HALF: Text Content */}
      {/* px-6 lg:px-12 py-10 lg:py-16 -> Matches your consistent padding style */}
      <div className="w-full lg:w-1/2 px-6 lg:px-12 lg:px-16 py-10 lg:py-16 flex flex-col justify-center gap-8">
        
        {/* Title (Aligned Left/Start within its half) */}
        <div className="w-full text-center">
          <h2 className="font-bold text-[#6986be] [-webkit-text-stroke:1px_#6986be] tracking-[-0.02em] [word-spacing:-0.1em] leading-tight">
            No matter where you are in the world.
          </h2>
        </div>

        {/* Text Area */}
        <div className="w-full flex flex-col gap-6">
          <p className="leading-relaxed indent-4 lg:indent-8 [word-spacing:-0.02em] lg:[word-spacing:-0.15em] text-left">
            Just like you, our Universe is made up of many parts:
            dimensional planes that vibrate across many frequencies.
            No matter where you are, I am able to use my abilities 
            to connect with you and work with your energy to 
            facilitate a healing that is truly soul-deep.
          </p>

          <p className="leading-relaxed indent-4 lg:indent-8 [word-spacing:-0.02em] lg:[word-spacing:-0.15em] text-left">
            Schedule with me at your convenience and relax into
            a video or voice call from the comfort of your home. 
            No matter your time zone or schedule 
            around work or family, I can accommodate you.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>


{/* --- Empty Break Start --- */}
<div className="h-[60px] lg:h-[110px] w-full" />
{/* --- Empty Break End --- */}


{/* 5. Geode Services Section */}
<section className="w-full relative"> 
  {/* The Background Image Layer */}
  <div className="w-full h-[750px] lg:h-[750px] overflow-hidden border-y-2 border-[#6174a1] shadow-[0_8px_10px_-1px_rgba(60,40,0,0.55)]">
    <img 
      alt="geodebg" 
      className="object-cover -scale-x-100 object-center h-full w-full" 
      src="/geodebg.jpg" 
    />
  </div>
  {/* THE COMPONENT (Floating on top) */}
  <ServicesCards />
</section>



{/* --- Empty Break Start --- */}
<div className="h-[60px] lg:h-[110px] w-full" />
{/* --- Empty Break End --- */}


      {/* 6. Lotus Booking Section */}
 <div className="w-full relative z-10">
        <div className="w-full overflow-hidden h-80 sm:h-80 lg:h-120 border-2 border-[#6174a1] shadow-[0_8px_10px_-1px_rgba(60,40,0,0.50)]">
          <img alt="Blue Lotus" className="object-cover object-left h-full w-full" src="/bluelotus_long.jpg"/>
        </div>
      </div>


        <h2 className="text-3xl lg:text-4xl py-10 font-bold text-[#6986be] [-webkit-text-stroke:1px_#6986be] tracking-[-0.02em] [word-spacing:-0.1em] leading-tight text-center">
        It's time to take care of you.
      </h2>


      <div className="flex justify-center px-5 py-0">
        <div className="bg-white/50 rounded-lg p-8 border border-gray-200 shadow-sm" style={{ maxWidth: '1000px', width: '100%' }}>
          <p className="text-center">
            Something something healing something something. <br />
            something something somethng <br />
            something something
          </p>
        </div>
      </div>

{/* --- Empty Break Start --- */}
<div className="h-[60px] lg:h-[110px] w-full" />
{/* --- Empty Break End --- */}


      {/* 7. Footer */}
      <footer className="text-gray-600 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex lg:items-center lg:items-start lg:flex-row lg:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 lg:mx-0 mx-auto text-center lg:text-left">
            <a className="flex title-font font-medium items-center lg:justify-start justify-center text-gray-900">
              <span className="text-xl">Healing Ka</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen.</p>
          </div>
          <div className="flex-grow flex flex-wrap lg:pl-20 -mb-10 lg:mt-0 mt-10 lg:text-left text-center">
            {/* Footer Categories - Shortened for brevity */}
            <div className="lg:w-1/4 lg:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">LINKS</h2>
              <nav className="list-none mb-10">
                <li><a className="hover:text-gray-800">Home</a></li>
                <li><a className="hover:text-gray-800">About</a></li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm">© 2026 Healing Ka</p>
          </div>
        </div>
      </footer>
    </main>
  );
}