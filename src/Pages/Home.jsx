import React, { lazy, Suspense } from "react";
import Header from "../components/global/Header";
import Loading from "../components/global/Loading";

import react from "../assets/imgs/Logos/react-2.svg";
import tailwind from "../assets/imgs/Logos/tailwind-css-2.svg";
import clerk from "../assets/imgs/Logos/clerk.png";
import convex from "../assets/imgs/Logos/Convex.png";
import stream from "../assets/imgs/Logos/stream-dark.png";
import Footer from "../components/global/Footer";
import StripeCard from "../components/StripeCard";

import capa01 from "../assets/imgs/Capas/capa01.png";
import capa02 from "../assets/imgs/Capas/capa02.png";
import capa03 from "../assets/imgs/Capas/capa03.png";
import capa04 from "../assets/imgs/Capas/capa04.png";
import perfil from "../assets/imgs/Capas/perfilJoao.jpeg";
import PerfilCard from "../components/PerfilCard";

const Home = () => {
  const WorldMap = lazy(() => import("../components/UI/world-map"));
  const arr = [react, tailwind, clerk, convex, stream];

  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col items-center gap-5 justify-center lg:mt-20 mt-5">
          <div className="flex flex-col items-center gap-7">
            <h1 className="text-transparent bg-clip-text lg:w-[60%] w-full bg-gradient-to-r from-white to-gray-500 px-1 lg:px-0 lg:text-[50px] text-[25px] leading-[1.2] font-second font-bold text-center">
              Conecte-se sem limites com RoomOM. Chamada de vídeo 🎥 para todos
              os momentos!
            </h1>

            <p className="text-second lg:text-lg text-[13px] lg:px-0 px-1 lg:w-[50%] w-full font-[300] text-center  text-white">
              O RoomOM torna mais fácil se conectar com as pessoas, não importa
              a distância. Seja para conversar com amigos, trabalhar com colegas
              ou compartilhar momentos especiais com a família.
            </p>
          </div>

          <div className="relative group">
            <div className="relative w-64 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
              <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

              <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
                <button
                  name="text"
                  className="input font-semibold text-lg h-full opacity-90 w-full px-3 py-3 rounded-xl bg-black"
                >
                  Comece gratuitamente
                </button>
              </div>
              <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-green-500 to-yellow-500 blur-[30px]"></div>
            </div>
          </div>
        </div>

        <div className="py-5 flex justify-center items-center w-full">
          <Suspense fallback={<Loading />}>
            <WorldMap
              dots={[
                {
                  start: { lat: 64.2008, lng: -149.4937 },
                  end: { lat: 34.0522, lng: -118.2437 },
                },
                {
                  start: { lat: 64.2008, lng: -149.4937 },
                  end: { lat: -15.7975, lng: -47.8919 },
                },
                {
                  start: { lat: -15.7975, lng: -47.8919 },
                  end: { lat: 38.7223, lng: -9.1393 },
                },
                {
                  start: { lat: 51.5074, lng: -0.1278 },
                  end: { lat: 28.6139, lng: 77.209 },
                },
                {
                  start: { lat: 28.6139, lng: 77.209 },
                  end: { lat: 43.1332, lng: 131.9113 },
                },
                {
                  start: { lat: 28.6139, lng: 77.209 },
                  end: { lat: -1.2921, lng: 36.8219 },
                },
              ]}
            />
          </Suspense>
        </div>
      </main>
      <section className="flex flex-col items-center mb-[100px] mt-14">
        <h2 className="font-second font-semibold text-[16px] lg:text-[25px] text-white lg:mb-[50px] mb-5">
          Desenvolvido com as tecnologias
        </h2>
        <div className="flex flex-wrap justify-center lg:gap-[100px] gap-[10px]">
          {arr.map((Logo, index) => (
            <div
              key={index}
              className="relative h-full w-fit flex items-center justify-center"
            >
              <img src={Logo} className="h-[50px] w-auto" />
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-5 mb-[120px]">
        <div className="flex flex-col items-center gap-7">
          <h2 className="text-transparent bg-clip-text lg:w-[60%] w-full bg-gradient-to-r from-white to-gray-300 px-1 lg:px-0 lg:text-[50px] text-[25px] leading-[1.2] font-second font-semibold text-center">
            Seja mais produtivo no trabalho, na vida e na organização das suas
            tarefas diárias.
          </h2>

          <p className="text-second lg:text-lg text-[13px] lg:px-0 px-1 lg:w-[50%] w-full font-[300] text-center  text-white">
            Nossa ferramenta de reuniões é a chave para aumentar sua
            produtividade, seja no trabalho ou na sua vida pessoal. Ela te ajuda
            a se manter organizado e eficiente, garantindo que você nunca
            esqueça detalhes importantes, tarefas ou prazos.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex lg:flex-row flex-col gap-4 items-center justify-center">
            <StripeCard
              img={capa01}
              title="A solução ideal para se conectar com quem importa, em qualquer lugar do mundo."
              btnTitle="Começar agora"
            />
            <StripeCard
              img={capa02}
              title="Facilite seu trabalho em equipe e maximize sua produtividade."
              btnTitle="Começar agora"
            />
          </div>
          <div className="flex lg:flex-row flex-col gap-4 items-center justify-center">
            <StripeCard
              img={capa03}
              title="Compartilhe experiências únicas com sua família e amigos, sem barreiras."
              btnTitle="Começar agora"
            />
            <StripeCard
              img={capa04}
              title="Facilite seu trabalho em equipe e maximize sua produtividade com chamadas de vídeo intuitivas."
              btnTitle="Começar agora"
            />
            <PerfilCard
              img={perfil}
              title="João Pedro Oliveira Mariano"
              btnTitle="Conhecer mais"
              description="Desenvolvedor front-end com paixão por criar experiências digitais incríveis e ajudar pessoas a alcançarem seus objetivos através da tecnologia."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
