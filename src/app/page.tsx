"use client";

import AOS from "aos";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FloatButtonWhatsApp } from "@/components/floatButtonWhatsapp";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
      <div className="w-screen h-[60vh]">
        <Swiper
          direction={"vertical"}
          loop={true}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Autoplay, Pagination]}
          className="h-full w-full"
        >
          <SwiperSlide>
            <img
              src="/fachada.jpg"
              className="h-full w-full object-cover object-top "
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex max-w-screen-xl w-full justify-between py-16">
          <img
            src="/interior.jpg"
            className="h-80 object-cover shadow-2xl rounded-lg"
            id="SOBRE"
            data-aos="fade-right"
          />
          <img
            src="/interior2.jpg"
            className="h-96 object-cover shadow-2xl rounded-lg"
            id="SOBRE"
            data-aos="fade-right"
          />
          <div className="h-100 w-0.5 bg-zinc-400 mx-12" data-aos="fade-up" />
          <div className="w-80" data-aos="fade-left">
            <h2 className="text-zinc-900 text-2xl font-bold">
              DESDE 1985, ATUANDO COM MARCAS LÍDERES DO MERCADO
            </h2>
            <p className="text-zinc-700 text-md">
              Atuamos no segmento de Lojas de Tintas, desde 1985, atendendo ao
              publico final e construtores. Ao longo dos anos,várias marcas
              foram incorporadas ao nosso portfólio, em virtude do
              reconhecimento ao trabalho desenvolvido.
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen h-80  mb-20 bg-[url('/banner2.png')] bg-no-repeat bg-cover " />

      <div className="w-full flex justify-center mb-20">
        <div className="max-w-screen-xl w-full flex flex-col items-center">
          <h2 className="text-3xl mb-8" id="MARCA">
            <b>As Melhores marcas</b> você encontra aqui
          </h2>

          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay, Pagination]}
            className="w-full h-60 text-zinc-900"
          >
            {[
              { uri: "/marcas/suvinil.png", name: "SUVINIL" },
              { uri: "/marcas/jimo.png", name: "JIMO" },
              { uri: "/marcas/coral.png", name: "CORAL" },
              { uri: "/marcas/suvinil.png", name: "SUVINIL" },
              { uri: "/marcas/jimo.png", name: "JIMO" },
              { uri: "/marcas/coral.png", name: "CORAL" },
            ].map((brand) => (
              <SwiperSlide key={brand.uri}>
                <img
                  src={brand.uri}
                  alt={brand.name}
                  className="h-52 object-cover rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="w-full flex justify-center mb-20">
        <div className="max-w-screen-xl w-full">
          <h2
            className="text-3xl font-bold mb-8"
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
          ></iframe>
        </div>
      </div>
      <Footer />

      <FloatButtonWhatsApp />
    </div>
  );
}
