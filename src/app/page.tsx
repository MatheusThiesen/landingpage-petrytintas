"use client";

import AOS from "aos";
import { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IoLocationSharp, IoTimeSharp } from "react-icons/io5";
import { MdFormatPaint, MdSupportAgent, MdWhatsapp } from "react-icons/md";

import { FloatButtonWhatsApp } from "@/components/FloatButtonWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 0, once: true });
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
          <div className="relative h-96 w-full lg:w-1/2 flex-shrink-0">
            <div
              className="border-white border-[10px] shadow-2xl top-0 left-0 z-10 h-80 w-72 max-sm:w-full rounded-2xl absolute overflow-hidden"
              data-aos="fade-right"
            >
              <img
                src="/interior.webp"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="border-white border-[10px] h-64 w-64 max-sm:w-48 max-sm:h-48 bottom-0 right-0 rounded-2xl absolute overflow-hidden shadow-2xl"
              data-aos="fade-left"
            >
              <img
                src="/interior2.webp"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="w-full" data-aos="fade-left">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
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
            <div className="flex-1" data-aos="fade-right">
              <p
                className="text-xs font-semibold uppercase mb-4 flex items-center gap-1"
                style={{ color: "#71717a" }}
              >
                <IoLocationSharp /> Matriz
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13830.593439276856!2d-51.075315!3d-29.932024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951973eb31facfc7%3A0x91fa8faedfa799d2!2sPetry%20Tintas!5e0!3m2!1spt-BR!2sbr!4v1691456809959!5m2!1spt-BR!2sbr"
                width="100%"
                height="360"
                loading="lazy"
                className="rounded-2xl"
              />
              <p className="text-zinc-600 text-sm mt-4">
                Av. Dorival Cândido Luz de Oliveira, 8018 - Bom Princípio,
                Gravataí - RS, 94070-000
              </p>
              <div className="flex items-center gap-2 mt-2">
                <IoTimeSharp style={{ color: "#71717a" }} />
                <p className="text-zinc-400 text-sm">
                  Seg–Sex: 8h às 12h e 13h30 às 18h · Sáb: 8h às 12h
                </p>
              </div>
            </div>

            <div className="flex-1" data-aos="fade-left">
              <p
                className="text-xs font-semibold uppercase mb-4 flex items-center gap-1"
                style={{ color: "#71717a" }}
              >
                <IoLocationSharp /> Filial
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.7775352923472!2d-50.9289611!3d-29.9283061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95190b0062e07f5b%3A0x4ca12e6f3b218ca5!2sPetry%20Tintas%2098%20Gravatai!5e0!3m2!1spt-BR!2sbr!4v1783947684486!5m2!1spt-BR!2sbr"
                width="100%"
                height="360"
                loading="lazy"
                className="rounded-2xl"
              />
              <p className="text-zinc-600 text-sm mt-4">
                Av. Ely Corrêa, 5564 - Parque do Itatiaia, Gravataí - RS,
                94197-012
              </p>
              <div className="flex items-center gap-2 mt-2">
                <IoTimeSharp style={{ color: "#71717a" }} />
                <p className="text-zinc-400 text-sm">
                  Seg–Sex: 8h30 às 12h e 13h30 às 18h · Sáb: 8h30 às 12h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatButtonWhatsApp />
    </div>
  );
}
