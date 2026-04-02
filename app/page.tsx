import Carousel from "@/Components/Carousel";

export default function Home() {
  return (
    <main className="w-full">
      {/* 1. Banner Image*/}
      <section className="w-full">
        <div className="w-full overflow-hidden mb-10 border-2 border-[#6174a1] shadow-[0_8px_10px_-1px_rgba(60,40,0,0.55)]">
          <div className="w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
            <img alt="content" className="object-cover object-[50%_10%] h-full w-full" src="/reikithera.jpg" />
          </div>
        </div>
      </section>

      {/* 2. Welcome Title and Carousel */}
      <h1 className="text-4xl font-bold mb-8 text-center"></h1>
      <Carousel />


 {/* 3. Healing Info Text Box */}
      <div className="flex justify-center px-5 py-24">
        <div className="bg-white/50 rounded-lg p-8 border border-gray-200 shadow-sm" style={{ maxWidth: '1000px', width: '100%' }}>
          <p className="text-xl text-center">
            Something something healing something something. <br />
            something something somethng <br />
            something something
          </p>
        </div>
      </div>

      {/* 4. Second Geode Image Section */}
      <div className="w-full overflow-hidden">
        <div className="w-full h-48 sm:h-64 lg:h-80 overflow-hidden mb-12 border-2 border-[#6174a1] shadow-[0_8px_10px_-1px_rgba(60,40,0,0.50)]">
          <img alt="geodebg" className="object-cover object-center h-full w-full" src="/geodebg.jpg" />
        </div>
      </div>

      {/* 5. Second Info Text Box */}
      <div className="flex justify-center px-5 py-24">
        <div className="bg-white/50 rounded-lg p-8 border border-gray-200 shadow-sm" style={{ maxWidth: '1000px', width: '100%' }}>
          <p className="text-xl text-center">
            Something something healing something something. <br />
            something something somethng <br />
            something something
          </p>
        </div>
      </div>



      {/* 7. Footer */}
      <footer className="text-gray-600 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="text-xl">Healing Ka</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen.</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            {/* Footer Categories - Shortened for brevity */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
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