"use client";

export default function Projets() {
  const experiences = [
    {
      title: "Pyrat",
      date: "Juillet 2025",
      company: "TryHackMe",
      location: "France",
      description:
        "Mise en pratique des compétences en énumération sur une machine virtuelle dédiée. Exploration des vecteurs d'attaque et renforcement des capacités d'analyse dans un environnement simulé.",
      technologies: [
        "Linux",
        "Apache"
      ],
    },
    {
      title: "Pre Security",
      date: "Juillet 2025",
      company: "TryHackMe",
      location: "France",
      description:
        "Approche des fondamentaux avant toute pratique offensive : bases de la cybersécurité, du réseau, du web et des attaques courantes. Familiarisation avec l'environnement Linux pour une maîtrise technique solide.",
      technologies: [
        "Linux", 
      ],
    },
    {
      title: "Simulation Centre de Données avec Cloud et IA",
      date: "Juin 2025",
      company: "Sup de Vinci",
      location: "Bordeaux, France",
      description:
        "Création d'une infrastructure simulée intégrant des services cloud, sécurité et automatisation dans un environnement virtualisé.",
      technologies: [
        "Proxmox",
        "Wazuh",
        "OpnSense",
        "Suricata",
        "Urbackup",
        "Docker",
        "Ollama",
        "n8n",
        "Nextcloud",
      ],
    },
    {
      title: "Infrastructure Réseau Sécurisée",
      date: "Mai 2025",
      company: "Sup de Vinci",
      location: "Bordeaux, France",
      description:
        "Déploiement d'une architecture réseau complète avec supervision, sécurité avancée et services collaboratifs dans un environnement virtualisé.",
      technologies: [
        "Proxmox", 
        "Wazuh", 
        "Zabbix", 
        "OpnSense", 
        "WireGuard", 
        "Suricata", 
        "Apache", 
        "Windows Server", 
        "Zimbra"
      ],
    },
    {
      title: "Topologies Réseau Complexes",
      date: "Février 2025",
      company: "Sup de Vinci",
      location: "Bordeaux, France",
      description:
        "Conception et simulation de réseaux d'entreprise complexes. Validation des configurations en amont du déploiement pour garantir la fiabilité et la performance.",
      technologies: [
        "Cisco Packet Tracer",
      ],
    },
  ];

  return (
    <div className="flex-1 bg-[#282828] min-h-screen flex flex-col items-start justify-start pl-[30rem] pt-20">
      <div className="flex items-center gap-8 w-full pr-20" data-animate>
        <h2 className="text-[4rem] text-white font-bold whitespace-nowrap">
          Expérience
          <span className="text-[rgb(61,106,255)]">.</span>
        </h2>
        <div className="h-[1px] bg-white w-[50rem]"></div>
      </div>
      <div className="mt-12 w-full max-w-[75rem] space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item" data-animate>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl text-white font-semibold">{exp.title}</h3>
              <span className="text-xl text-gray-300">{exp.date}</span>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl text-[rgb(61,106,255)] font-bold">
                {exp.company}
              </h4>
              <span className="text-lg text-gray-400">{exp.location}</span>
            </div>

            <div className="mb-6">
              <p className="text-white text-lg leading-relaxed">
                {exp.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {exp.technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="px-4 py-2 bg-[#383838] text-white rounded-md text-sm inline-block whitespace-nowrap"
                >
                  {tech}
                </div>
              ))}
            </div>

            {index < experiences.length - 1 && (
              <div className="h-[1px] bg-gray-700/50 w-full mt-16"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
