"use client";

import AOS from "aos";
import { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IoLocationSharp, IoTimeSharp } from "react-icons/io5";

import { FloatButtonWhatsApp } from "@/components/FloatButtonWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      once: true,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />

      <Swiper
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        className="w-full h-[65vh] max-sm:h-[35vh]"
      >
        {[
          { src: "/fachada.webp", label: "Matriz" },
          { src: "/fachada-filial.webp", label: "Filial" },
        ].map(({ src, label }) => (
          <SwiperSlide key={src} className="relative">
            <img src={src} className="w-full h-full object-cover object-top" />
            <span className="absolute bottom-6 left-6 bg-black/50 text-white text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-widest">
              {label}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center w-full" id="SOBRE">
        <div className="px-6 lg:px-0 lg:flex-row flex flex-col max-w-screen-xl w-full justify-between py-16">
          <div className="mb-14 relative h-96 flex w-full">
            <div className="max-sm:h-2/3 border-[16px] border-white top-0 left-0 z-10 h-80 object-cover rounded-lg absolute">
              <img
                src="/interior.webp"
                className="  h-full w-full object-cover rounded-lg"
                id="Balcão"
                data-aos="fade-left"
              />
            </div>

            <img
              src="/interior2.webp"
              className="h-2/3 bottom-0 right-0  object-cover rounded-lg  absolute"
              id="Showroom"
              data-aos="fade-right"
            />
          </div>

          <div className=" w-0.5 bg-zinc-400 mx-12" data-aos="fade-up" />

          <div className="w-full" data-aos="fade-left">
            <div className="w-96 ">
              <h2 className="text-zinc-900 text-2xl font-bold mb-4">
                DESDE 1985, ATUANDO COM MARCAS LÍDERES DO MERCADO
              </h2>
              <p className="text-zinc-600 text-md">
                Atuamos no segmento de Lojas de Tintas, desde 1985, atendendo ao
                consumidor e construtores. Ao longo dos anos,várias marcas foram
                incorporadas ao nosso portfólio, em virtude do reconhecimento ao
                trabalho desenvolvido.
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/banner2.png"
        className="h-80 w-full object-cover object-top mb-20"
      />

      <div className="w-full flex justify-center mb-20">
        <div className="max-w-screen-xl w-full flex flex-col items-center">
          <h2 className="lg:px-0  px-6 text-3xl mb-8" id="MARCA">
            <b>As Melhores marcas</b> você encontra aqui
          </h2>

          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay, Pagination]}
            className="w-full h-52 text-zinc-900"
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
              <SwiperSlide key={brand.uri}>
                <img
                  src={brand.uri}
                  alt={brand.name}
                  className="h-full w-[25rem] object-contain rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="w-full flex justify-center mb-10">
        <div className="max-w-screen-xl w-full px-6 lg:px-0">
          <h2
            className="text-3xl font-bold mb-8"
            id="LOCALIZAÇÃO"
            data-aos="fade-right"
          >
            ONDE ESTAMOS
          </h2>
          <div className="flex max-sm:flex-col gap-6">
            <div className="flex-1" data-aos="fade-right">
              <p className="text-zinc-500 text-xs font-semibold uppercase mb-3 flex items-center gap-1">
                <IoLocationSharp /> Matriz
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13830.593439276856!2d-51.075315!3d-29.932024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951973eb31facfc7%3A0x91fa8faedfa799d2!2sPetry%20Tintas!5e0!3m2!1spt-BR!2sbr!4v1691456809959!5m2!1spt-BR!2sbr"
                width="100%"
                height="380"
                loading="lazy"
                className="rounded-lg"
              />
              <p className="text-zinc-600 text-sm mt-3">
                Av. Dorival Cândido Luz de Oliveira, 8018 - Bom Princípio,
                Gravataí - RS, 94070-000
              </p>
              <div className="flex items-center gap-1 mt-3">
                <IoTimeSharp className="text-zinc-500" />
                <p className="text-zinc-600 text-sm">
                  Seg–Sex: 8h às 12h e 13h30 às 18h &nbsp;|&nbsp; Sáb: 8h às 12h
                </p>
              </div>
            </div>
            <div className="flex-1" data-aos="fade-left">
              <p className="text-zinc-500 text-xs font-semibold uppercase mb-3 flex items-center gap-1">
                <IoLocationSharp /> Filial
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.7775352923472!2d-50.9289611!3d-29.9283061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95190b0062e07f5b%3A0x4ca12e6f3b218ca5!2sPetry%20Tintas%2098%20Gravatai!5e0!3m2!1spt-BR!2sbr!4v1783947684486!5m2!1spt-BR!2sbr"
                width="100%"
                height="380"
                loading="lazy"
                className="rounded-lg"
              />
              <p className="text-zinc-600 text-sm mt-3">
                Av. Ely Corrêa, 5564 - Parque do Itatiaia, Gravataí - RS,
                94197-012
              </p>
              <div className="flex items-center gap-1 mt-3">
                <IoTimeSharp className="text-zinc-500" />
                <p className="text-zinc-600 text-sm">
                  Seg–Sex: 8h30 às 12h e 13h30 às 18h &nbsp;|&nbsp; Sáb: 8h30 às
                  12h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <FloatButtonWhatsApp />
    </div>
  );
}
