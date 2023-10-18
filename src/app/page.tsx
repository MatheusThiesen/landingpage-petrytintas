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
      <div className="">
        <img
          src="/fachada.webp"
          className="max-sm:h-[40vh] w-screen h-[60vh]  object-cover object-top "
        />
      </div>
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
        <div className="max-w-screen-xl w-full">
          <h2
            className="text-3xl font-bold mb-8 px-6 lg:px-0"
            id="LOCALIZAÇÃO"
            data-aos="fade-right"
          >
            ONDE ESTAMOS
          </h2>
          <iframe
            data-aos="fade-left"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13830.593439276856!2d-51.075315!3d-29.932024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951973eb31facfc7%3A0x91fa8faedfa799d2!2sPetry%20Tintas!5e0!3m2!1spt-BR!2sbr!4v1691456809959!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="w-full flex justify-center mb-16">
        <div className="lg:px-0  px-6 max-w-screen-xl w-full  flex justify-between max-sm:flex-col max-sm:gap-12">
          <div data-aos="fade-left">
            <div className="flex items-center">
              <IoLocationSharp className="text-2xl mr-2" />
              <h2 className="text-xl font-bold">LOCALIZAÇÃO</h2>
            </div>
            <p className="text-zinc-600 max-w-xs text-sm">
              Av. Dorival Cândido Luz de Oliveira, 8018 - Bom Princípio,
              Gravataí - RS, 94070-000
            </p>
          </div>

          <div data-aos="fade-right">
            <div className="flex items-center">
              <IoTimeSharp className="text-2xl mr-2" />
              <h2 className="text-xl font-bold">HORÁRIOS DE ATENDIMENTO</h2>
            </div>
            <p className="text-zinc-600 max-w-xs text-sm">
              De segunda à sexta, das 8h às 12h e das 13h30 às 18h e sábado das
              8h às 12h.
            </p>
          </div>
        </div>
      </div>

      <Footer />

      <FloatButtonWhatsApp />
    </div>
  );
}
