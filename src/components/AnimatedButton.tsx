"use client";
export default function AnimatedButton() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "CV_Mondi_Xharda.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex gap-4">
      <div>
        <style jsx>{`
          @keyframes sh02 {
            from {
              opacity: 0;
              left: 0%;
            }
            50% {
              opacity: 1;
            }
            to {
              opacity: 0;
              left: 100%;
            }
          }
          .shine-effect:hover::before {
            animation: sh02 0.5s 0s linear;
          }
        `}</style>
        <button
          onClick={scrollToContact}
          className="shine-effect relative w-[160px] h-[45px] rounded-[7px] border border-[rgb(61,106,255)] text-sm uppercase font-semibold tracking-[2px] bg-transparent text-white overflow-hidden shadow-none transition-all duration-200 ease-in hover:bg-[rgb(61,113,255)] hover:shadow-[0_0_30px_5px_rgba(0,142,236,0.815)] hover:transition-all hover:duration-200 hover:ease-out active:shadow-none active:transition-shadow active:duration-200 active:ease-in before:content-[''] before:block before:w-0 before:h-[86%] before:absolute before:top-[7%] before:left-0 before:opacity-0 before:bg-white before:shadow-[0_0_50px_30px_#fff] before:transform before:skew-x-[-20deg]"
        >
          Me Contacter
        </button>
      </div>
      <div>
        <style jsx>{`
          .file-front {
            position: absolute;
            width: 100%;
            height: 70%;
            border: 2px solid rgb(255, 255, 255);
            border-bottom: 1px solid white;
            transform: skewX(-40deg);
            transform-origin: bottom right;
            background-color: rgb(61, 106, 255);
            transition: all 0.5s;
            bottom: 0;
          }
          .open-file:hover .file-front {
            height: 50%;
            transform-origin: bottom right;
            transform: skewX(-55deg);
          }
        `}</style>
        <button
          onClick={downloadCV}
          className="open-file bg-[rgb(61,106,255)] w-[160px] h-[45px] flex items-center justify-center gap-3 border border-[rgb(61,106,255)] text-[13px] text-white cursor-pointer transition-all duration-300 rounded-[10px] hover:shadow-[0_10px_10px_rgba(0,0,0,0.048)]"
        >
          <div className="file-wrapper w-[15px] h-auto flex items-end justify-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 71 67"
              className="w-full"
            >
              <path
                strokeWidth={5}
                stroke="white"
                d="M41.7322 11.7678L42.4645 12.5H43.5H68.5V64.5H2.5V2.5H32.4645L41.7322 11.7678Z"
              />
            </svg>
            <span className="file-front" />
          </div>
          Télécharger CV
        </button>
      </div>
    </div>
  );
}
