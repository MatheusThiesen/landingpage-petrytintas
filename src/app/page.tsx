"use client";

import AOS from "aos";
import { useEffect, useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IoLocationSharp, IoNavigate, IoTimeSharp } from "react-icons/io5";
import {
  MdFormatPaint,
  MdSupportAgent,
  MdWhatsapp,
} from "react-icons/md";
import { SiWaze } from "react-icons/si";

import { FloatButtonWhatsApp } from "@/components/FloatButtonWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const DASH_COLORS = [
  "bg-orange-600",
  "bg-yellow-400",
  "bg-green-400",
  "bg-blue-400",
  "bg-red-500",
];

function ColorDashes() {
  return (
    <div className="flex gap-1.5" aria-hidden="true">
      {DASH_COLORS.map((color) => (
        <span key={color} className={`${color} h-1 w-6 rounded-full`} />
      ))}
    </div>
  );
}

const LOJAS = [
  {
    nome: "Matriz",
    mapa: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3457.7775352923472!2d-51.075315!3d-29.932024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951973eb31facfc7%3A0x91fa8faedfa799d2!2sPetry%20Tintas!5e1!3m2!1spt-BR!2sbr!4v1691456809959!5m2!1spt-BR!2sbr",
    endereco:
      "Av. Dorival Cândido Luz de Oliveira, 8018 - Bom Princípio, Gravataí - RS, 94070-000",
    horario: "Seg–Sex: 8h às 12h e 13h30 às 18h · Sáb: 8h às 12h",
    aos: "fade-right",
  },
  {
    nome: "Filial",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.7775352923472!2d-50.9289611!3d-29.9283061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95190b0062e07f5b%3A0x4ca12e6f3b218ca5!2sPetry%20Tintas%2098%20Gravatai!5e1!3m2!1spt-BR!2sbr!4v1783947684486!5m2!1spt-BR!2sbr",
    endereco:
      "Av. Ely Corrêa, 5564 - Parque do Itatiaia, Gravataí - RS, 94197-012",
    horario: "Seg–Sex: 8h30 às 12h e 13h30 às 18h · Sáb: 8h30 às 12h",
    aos: "fade-left",
  },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 0, once: true });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.5 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />

      {/* HERO */}
      <Swiper
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        className="w-full h-[80vh] max-sm:h-[60vh]"
      >
        {[
          { src: "/fachada.webp", label: "Matriz" },
          { src: "/fachada-filial.webp", label: "Filial" },
        ].map(({ src, label }) => (
          <SwiperSlide key={src} className="relative">
            <img src={src} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#71717a]/80 via-[#71717a]/30 to-transparent" />
            <div className="absolute bottom-20 max-sm:bottom-12 left-8 right-8 lg:left-16">
              <span className="text-white/50 text-xs uppercase tracking-[5px]">
                {label}
              </span>
              <h1 className="text-white text-6xl max-sm:text-3xl font-bold mt-1 leading-none">
                PETRY TINTAS
              </h1>
              <a
                href="https://wa.me/555134902950?text=Ol%C3%A1%21+Cheguei+atrav%C3%A9s+do+site+petrytintas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3 rounded-full hover:bg-zinc-100 transition-colors text-sm"
              >
                <MdWhatsapp className="text-green-500 text-xl" />
                Fale conosco
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SOBRE */}
      <section className="flex justify-center w-full py-24 bg-white" id="SOBRE">
        <div className="px-6 lg:px-0 max-w-screen-xl w-full flex flex-col lg:flex-row gap-20 items-center">
          <div
            className="order-last lg:order-none w-full lg:w-auto lg:ml-10 flex-shrink-0 flex justify-center"
            data-aos="fade-right"
          >
            <figure className="relative w-full max-w-[270px] sm:max-w-[320px]">
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 lg:-left-10 lg:-top-10 right-8 bottom-24 rounded-3xl bg-[#EFE9DF]"
              />
              <div className="relative shadow-2xl rounded-2xl overflow-hidden aspect-[9/16] bg-[#F6F3EE]">
                <video
                  ref={videoRef}
                  src="/institucional.mp4"
                  poster="/institucional-capa.jpg"
                  className="h-full w-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Vídeo institucional da Petry Tintas"
                />
              </div>
              <div className="relative mt-5">
                <ColorDashes />
              </div>
            </figure>
          </div>

          <div className="w-full" data-aos="fade-left">
            <ColorDashes />
            <span
              className="block mt-4 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#71717a" }}
            >
              Sobre nós
            </span>
            <h2 className="text-zinc-900 text-4xl max-sm:text-2xl font-bold mt-3 mb-6 leading-tight">
              Há 41 anos oferecendo as melhores soluções em tintas e muito mais
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Há 41 anos, oferecemos as melhores soluções em tintas, texturas,
              impermeabilizantes, acessórios para pintura e muito mais.
              Trabalhamos com as principais marcas do mercado para garantir o
              melhor resultado em cada ambiente, seja na sua casa, empresa ou
              obra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div
                className="flex-1 rounded-2xl p-6 bg-zinc-50 border-l-4"
                style={{ borderColor: "#71717a" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#71717a" }}
                >
                  <MdFormatPaint className="text-white text-xl" />
                </div>
                <p className="font-bold text-zinc-800 text-base mb-2">
                  Variedade de produtos e marcas
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Tintas, texturas, impermeabilizantes, ferramentas e acessórios
                  das principais marcas do mercado.
                </p>
              </div>
              <div
                className="flex-1 rounded-2xl p-6 bg-zinc-50 border-l-4"
                style={{ borderColor: "#71717a" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#71717a" }}
                >
                  <MdSupportAgent className="text-white text-xl" />
                </div>
                <p className="font-bold text-zinc-800 text-base mb-2">
                  Solução para cada ambiente
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Atendimento consultivo para ajudar na escolha ideal — para
                  casas, empresas, obras e reformas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <img src="/banner2.png" className="h-80 w-full object-cover object-top" />

      {/* MARCAS */}
      <section
        className="w-full flex justify-center py-20"
        // style={{ backgroundColor: "#71717a" }}
        id="MARCA"
      >
        <div className="max-w-screen-xl w-full flex flex-col items-center">
          <span className="text-white/50 text-xs uppercase tracking-widest mb-2">
            Portfólio
          </span>
          <h2 className="px-6 lg:px-0 text-3xl font-bold text-zinc-800 mb-12">
            As melhores marcas você encontra aqui
          </h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={12}
            loop={true}
            pagination={{ dynamicBullets: true }}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            modules={[Navigation, Autoplay, Pagination]}
            className="w-full h-44"
          >
            {[
              { uri: "/marcas/suvinil.png", name: "SUVINIL" },
              { uri: "/marcas/coral.png", name: "CORAL" },
              { uri: "/marcas/atlas.png", name: "ATLAS" },
              { uri: "/marcas/ciacollor.png", name: "CIACOLLOR" },
              { uri: "/marcas/montana.jpg", name: "MONTANA" },
              { uri: "/marcas/jimo.png", name: "JIMO" },
              { uri: "/marcas/sayerlack.png", name: "SAYERLACK" },
              { uri: "/marcas/tigre.jpg", name: "TIGRE" },
            ].map((brand) => (
              <SwiperSlide
                key={brand.uri}
                className="!flex items-center justify-center bg-white rounded-2xl"
              >
                <img
                  src={brand.uri}
                  alt={brand.name}
                  className="h-36 w-full object-contain p-4"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section
        className="w-full flex justify-center py-20 bg-white"
        id="LOCALIZAÇÃO"
      >
        <div className="max-w-screen-xl w-full px-6 lg:px-0">
          <span
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: "#71717a" }}
          >
            Venha nos visitar
          </span>
          <h2
            className="text-3xl font-bold mt-2 mb-12 text-zinc-900"
            data-aos="fade-right"
          >
            Onde Estamos
          </h2>
          <div className="flex max-sm:flex-col gap-8">
            {LOJAS.map((loja) => (
              <div key={loja.nome} className="flex-1" data-aos={loja.aos}>
                <p
                  className="text-xs font-semibold uppercase mb-4 flex items-center gap-1"
                  style={{ color: "#71717a" }}
                >
                  <IoLocationSharp /> {loja.nome}
                </p>
                <iframe
                  src={loja.mapa}
                  width="100%"
                  height="360"
                  loading="lazy"
                  className="rounded-2xl"
                  title={`Mapa da Petry Tintas ${loja.nome}`}
                />
                <p className="text-zinc-600 text-sm mt-4">{loja.endereco}</p>
                <div className="flex items-center gap-2 mt-2">
                  <IoTimeSharp style={{ color: "#71717a" }} />
                  <p className="text-zinc-400 text-sm">{loja.horario}</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-5">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      `Petry Tintas, ${loja.endereco}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-zinc-900 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-zinc-700 transition-colors text-sm"
                  >
                    <IoNavigate />
                    Como chegar
                  </a>
                  <a
                    href={`https://waze.com/ul?q=${encodeURIComponent(
                      loja.endereco
                    )}&navigate=yes`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-zinc-300 text-zinc-800 font-semibold px-5 py-2.5 rounded-full hover:bg-zinc-50 transition-colors text-sm"
                  >
                    <SiWaze className="text-[#33CCFF]" />
                    Waze
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatButtonWhatsApp />
    </div>
  );
}
