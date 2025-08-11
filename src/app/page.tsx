"use client";
import Navbar from "@/components/Navbar";
import SocialButtons from "@/components/SocialButtons";
import EarthGlobe from "@/components/EarthGlobe";
import About from "@/app/about/page";
import Projets from "@/app/projets/page";
import Certifs from "@/app/certifs/page";
import Contact from "@/app/contact/page";
import { useState, useEffect, useRef } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Home() {
  useScrollAnimation();

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const words = [
    "Etudiant en Systemes et Reseaux",
    "Passionné par la Protection de la vie Privée et la Sécurité des Données",
    "Futur expert en cybersécurité",
  ];
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentIndex];
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const nodes: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    const nodeCount = 120;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
      });
    }
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });
      ctx.strokeStyle = "rgba(59, 130, 246, 0.2)";
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 300) {
            const opacity = 1 - distance / 300;
            ctx.strokeStyle = `rgba(122, 122, 122, ${opacity * 0.4})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = "rgba(122, 122, 122, 0.6)";
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex">
      <Navbar />
      <SocialButtons />
      <EarthGlobe />
      <main className="flex-1">
        <section
          id="home"
          className="min-h-screen flex items-center justify-start relative bg-[#282828] pl-[20rem]"
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0"
          />
          <div className="text-left relative z-20" data-animate>
            <h1 className="text-[5rem] text-white font-bold mb-4">
              Mondi Xharda
            </h1>
            <div className="h-16 flex items-center justify-start">
              <h2 className="text-3xl text-white font-bold">
                {currentText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            <div className="mt-6 flex justify-start">
              <AnimatedButton />
            </div>
          </div>
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="projets" className="min-h-screen">
          <Projets />
        </section>
        <section id="certifs" className="min-h-screen">
          <Certifs />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
    </div>
  );
}