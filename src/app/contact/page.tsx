"use client";

export default function Contact() {
  return (
    <div className="flex-1 bg-[#282828] min-h-screen flex flex-col items-center justify-start pt-20">
      <div className="flex items-center gap-8 w-full max-w-6xl px-20" data-animate>
        <h2 className="text-[4rem] text-white font-bold whitespace-nowrap">
          Contact
          <span className="text-[rgb(61,106,255)]">.</span>
        </h2>
        <div className="h-[1px] bg-white flex-1"></div>
      </div>     
      <div className="mt-16 w-full max-w-2xl px-8" data-animate>
        <div className="bg-white/5 border border-gray-500/30 rounded-lg backdrop-blur-sm p-12 flex flex-col items-center justify-center text-white">
          <p className="text-center text-xl mb-12 font-light leading-relaxed">
            Je suis disponible pour discuter de vos projets ou opportunités professionnelles. 
            N'hésitez pas à me contacter via les coordonnées ci-dessous.
          </p>
          
          <div className="space-y-8 w-full max-w-md">
            <a 
              href="mailto:mondi.xharda@supdevinci-edu.fr" 
              className="flex items-center group transition-all duration-300 hover:translate-x-2"
            >
              <div className="w-12 h-12 rounded-full bg-[rgb(61,106,255)]/10 flex items-center justify-center mr-6 transition-all duration-300 group-hover:bg-[rgb(61,106,255)]/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(61,106,255)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Email</p>
                <span className="text-lg text-white font-light transition-all duration-300 group-hover:text-[rgb(61,106,255)]">mondi.xharda@supdevinci-edu.fr</span>
              </div>
            </a>
            <a 
              href="tel:+33767058456" 
              className="flex items-center group transition-all duration-300 hover:translate-x-2"
            >
              <div className="w-12 h-12 rounded-full bg-[rgb(61,106,255)]/10 flex items-center justify-center mr-6 transition-all duration-300 group-hover:bg-[rgb(61,106,255)]/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(61,106,255)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Téléphone</p>
                <span className="text-lg text-white font-light transition-all duration-300 group-hover:text-[rgb(61,106,255)]">+33 7 67 05 84 56</span>
              </div>
            </a>
            <a 
              href="https://www.linkedin.com/in/mondi-xharda" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center group transition-all duration-300 hover:translate-x-2"
            >
              <div className="w-12 h-12 rounded-full bg-[rgb(61,106,255)]/10 flex items-center justify-center mr-6 transition-all duration-300 group-hover:bg-[rgb(61,106,255)]/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(61,106,255)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">LinkedIn</p>
                <span className="text-lg text-white font-light transition-all duration-300 group-hover:text-[rgb(61,106,255)]">Mondi Xharda</span>
              </div>
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700/30 w-full text-center">
            <p className="text-gray-400 text-sm">
              Disponible pour des opportunités à partir de Septembre 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
