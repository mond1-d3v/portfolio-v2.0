"use client";
import { useEffect, useRef } from 'react';
const logos = [
  { src: "/opnsense.png", alt: "OPNSense" },
  { src: "/VMW.svg", alt: "VMware" },
  { src: "/n8n.svg", alt: "n8n" },
  { src: "/Proxmox.png", alt: "Proxmox" },
  { src: "/Suricata.png", alt: "Suricata" },
  { src: "/wazuh.svg", alt: "Wazuh" },
  { src: "/WireGuard.png", alt: "WireGuars" },
  { src: "/zabbix.svg", alt: "Zabbix" },
  { src: "/docker.svg", alt: "Docker" }
];
export default function About() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const allLogos = [...logos, ...logos, ...logos];
  useEffect(() => {
    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let animationId: number;
    function animate() {
      if (carouselRef.current) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= carouselRef.current.scrollWidth / 3) {
          scrollPosition = 0;
        }
        carouselRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="flex-1 bg-[#282828] min-h-screen flex flex-col items-start justify-start pl-[30rem] pt-[6rem]">
      <div className="flex items-center gap-8 w-full pr-20" data-animate>
        <h2 className="text-[4rem] text-white font-bold whitespace-nowrap">
          À propos
          <span className="text-[rgb(61,106,255)]">.</span>
        </h2>
        <div className="h-[1px] bg-white w-[50rem]"></div>
      </div>
      
      <div className="mt-12 max-w-[71rem]" data-animate>
        <p className="text-white text-lg leading-relaxed text-justify">
          Salut ! Moi c&apos;est Mondi, 20 ans, étudiant en ingénierie des systèmes d&apos;information à Sup de Vinci Bordeaux depuis 2023. Curieux, méthodique et passionné par la cybersécurité et les infrastructures réseaux, j&apos;ai eu l&apos;opportunité de mener plusieurs projets techniques concrets qui ont renforcé mes compétences sur le terrain.<br></br><br></br>Parmi mes réalisations, j&apos;ai simulé un centre de données intégrant des technologies Cloud et IA, avec des outils comme Proxmox, Docker, Wazuh, n8n et Nextcloud. J&apos;ai également déployé des architectures réseau sécurisées avec Suricata, WireGuard, OpnSense, Zabbix et Windows Server — avec un focus sur le monitoring, la résilience et la détection des intrusions.<br></br><br></br>En parallèle, j&apos;ai conçu des topologies réseau complexes via Cisco Packet Tracer, tout en analysant le trafic avec Wireshark pour en garantir la stabilité et la sécurité. Ces projets m&apos;ont permis de me familiariser avec les environnements Linux et Windows, la virtualisation (VMware, Hyper-V), ainsi que l&apos;initiation à AWS et Azure.<br></br><br></br>Je suis toujours motivé par l&apos;envie d&apos;apprendre, de comprendre les rouages des systèmes, et de contribuer à des solutions robustes et évolutives. Mes projets sont le reflet de ma démarche proactive, mon sens du détail, et ma volonté de monter en compétence sur les sujets stratégiques du numérique.
        </p>
      </div>
      
      <div className="overflow-hidden bg-[#282828] backdrop-blur-sm py-16 mt-10 max-w-[71rem]" data-animate>
        <div 
          ref={carouselRef}
          className="flex space-x-16"
          style={{ width: 'fit-content', display: 'flex', gap: '4rem' }}
        >
          {allLogos.map((logo, index) => (
            <img 
              key={index}
              src={logo.src} 
              alt={logo.alt} 
              className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
