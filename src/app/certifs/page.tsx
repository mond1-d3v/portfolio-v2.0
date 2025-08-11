"use client";
import Link from 'next/link';
export default function Certifs() {
  const certifications = [
    { 
      title: "CCNA ITN", 
      year: "2025",
      description: "Validation des compétences fondamentales en sécurité informatique : compréhension des menaces, des vulnérabilités et des mécanismes de défense. Approche méthodique axée sur la pratique et la résolution de cas concrets.",
      link: "/ccna_itn.png",
      image: "/ccna_itn.png"
    },
    { 
      title: "SQL (Advanced)", 
      year: "2024",
      description: "Maîtrise des requêtes complexes, optimisation des performances et gestion avancée des bases de données relationnelles. Approche orientée pratique avec des cas d'usage réels : jointures imbriquées, sous-requêtes, indexation, vues, procédures stockées et gestion des transactions.",
      link: "https://www.hackerrank.com/certificates/iframe/aa1545972f70",
      image: "/sql.png"
    },
    { 
      title: "Python (Basic)", 
      year: "2024",
      description: "Acquisition des bases essentielles du langage Python : structures de données, boucles, conditions, fonctions et manipulation de fichiers. Certification validée par des exercices pratiques et des défis de logique algorithmique.",
      link: "https://www.hackerrank.com/certificates/iframe/0e5be338b770",
      image: "/python.png"
    },
    { 
      title: "C# (Basic)", 
      year: "2024",
      description: "Initiation aux fondamentaux du langage C# : syntaxe, types de données, structures de contrôle, fonctions et programmation orientée objet. Certification validée par des exercices pratiques illustrant les principes de développement sur la plateforme .NET.",
      link: "https://www.hackerrank.com/certificates/iframe/d970381b0c16",
      image: "/c_sharp.png"
    }
  ];

  return (
    <div className="flex-1 bg-[#282828] min-h-screen flex flex-col items-start justify-start pl-[30rem] pt-20">
      <div className="flex items-center gap-8 w-full pr-20" data-animate>
        <h2 className="text-[4rem] text-white font-bold whitespace-nowrap">
          Certifications
          <span className="text-[rgb(61,106,255)]">.</span>
        </h2>
        <div className="h-[1px] bg-white w-[38rem]"></div>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-10 max-w-7xl">
        {certifications.map((cert, index) => (
          <a
            key={index} 
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-[32rem] h-80 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl"
            data-animate
          >
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url(${cert.image})`
              }}
            />
            <div className="absolute top-1/2 left-1/2 w-full h-full p-5 bg-white opacity-0 transition-all duration-500 group-hover:opacity-100"
                 style={{ transform: 'translate(-50%, -50%)' }}>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{cert.year}</p>
              <p className="text-xs text-gray-700 leading-relaxed">{cert.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
