"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const photos = {
  photo1: "/images/photo1.png",
  photo2: "/images/photo2.png",
  photo3: "/images/photo3.png",
  photo4: "/images/photo4.png",
  photo6: "/images/photo6.png",
  photo7: "/images/photo7.png",
  photo8: "/images/photo8.png",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-10">

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center border border-white/30 text-[10px]">
            SP
          </div>

          <span className="text-[10px] uppercase tracking-[0.3em] text-white/80">
            Sushant Prajapati
          </span>

        </div>

        <div className="flex items-center gap-6">

          <span className="text-[10px] uppercase tracking-[0.25em] text-white/70">
            EN
          </span>

        </div>

      </header>


      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative min-h-screen overflow-hidden bg-black">


        {/* =================================================
            DESKTOP PHOTO 1
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
          className="absolute left-[3%] top-[11%] z-10 hidden h-[180px] w-[130px] overflow-hidden md:block lg:h-[210px] lg:w-[150px]"
        >
          <img
            src={photos.photo1}
            alt="Sushant Prajapati editorial portrait"
            className="h-full w-full object-cover grayscale transition-transform duration-[1800ms] hover:scale-105"
          />
        </motion.div>


        {/* =================================================
            DESKTOP PHOTO 2
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="absolute left-[23%] top-[6%] z-10 hidden h-[230px] w-[165px] overflow-hidden md:block lg:h-[290px] lg:w-[210px]"
        >
          <img
            src={photos.photo2}
            alt="Sushant Prajapati editorial portrait"
            className="h-full w-full object-cover grayscale-[20%] transition-transform duration-[1800ms] hover:scale-105"
          />
        </motion.div>


        {/* =================================================
            DESKTOP PHOTO 3
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="absolute right-[4%] top-[7%] z-10 hidden h-[270px] w-[43%] overflow-hidden md:block lg:h-[330px]"
        >
          <img
            src={photos.photo3}
            alt="Sushant Prajapati editorial portrait"
            className="h-full w-full object-cover transition-transform duration-[2200ms] hover:scale-105"
          />
        </motion.div>


        {/* =================================================
            DESKTOP PHOTO 4
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="absolute left-[6%] top-[30%] z-10 hidden h-[260px] w-[190px] overflow-hidden md:block lg:h-[310px] lg:w-[225px]"
        >
          <img
            src={photos.photo4}
            alt="Sushant Prajapati editorial portrait"
            className="h-full w-full object-cover grayscale-[10%] transition-transform duration-[1800ms] hover:scale-105"
          />
        </motion.div>


        {/* =================================================
            DESKTOP PHOTO 6
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="absolute right-0 top-[15%] z-10 hidden h-[300px] w-[14%] overflow-hidden md:block lg:h-[300px]"
        >
          <img
            src={photos.photo6}
            alt="Sushant Prajapati editorial portrait"
            className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-105"
          />
        </motion.div>


        {/* =================================================
            DESKTOP PHOTO 7
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.7,
          }}
          className="absolute bottom-0 left-[1%] z-10 hidden h-[310px] w-[49%] overflow-hidden md:block lg:h-[390px]"
        >
          <img
            src={photos.photo7}
            alt="Sushant Prajapati editorial portrait"
            className="h-full w-full object-cover grayscale-[5%] transition-transform duration-[2400ms] hover:scale-105"
          />
        </motion.div>


        {/* =================================================
            DESKTOP PHOTO 8
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="absolute bottom-0.5 right-[4%] z-10 hidden h-[390px] w-[43%] overflow-hidden md:block lg:h-[390px]"
        >
          <img
            src={photos.photo8}
            alt="Sushant Prajapati editorial portrait"
            className="h-full w-full object-cover grayscale-[5%] transition-transform duration-[2400ms] hover:scale-105"
          />
        </motion.div>


        {/* =================================================
            DESKTOP CENTER CONTENT
            IMPORTANT:
            hidden on mobile so it does not duplicate
            the mobile Welcome section.
            ================================================= */}

        <div className="absolute left-1/2 top-1/2 z-30 hidden w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center md:flex">


          {/* X FRAME / SP */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -45,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="relative mb-7 flex h-[58px] w-[58px] items-center justify-center"
          >

            <div className="absolute inset-0 border border-white/30" />

            <span className="absolute -left-[2px] -top-[2px] h-4 w-4 border-l border-t border-white/80" />

            <span className="absolute -right-[2px] -top-[2px] h-4 w-4 border-r border-t border-white/80" />

            <span className="absolute -bottom-[2px] -left-[2px] h-4 w-4 border-b border-l border-white/80" />

            <span className="absolute -bottom-[2px] -right-[2px] h-4 w-4 border-b border-r border-white/80" />

            <div className="text-2xl font-medium tracking-[0.18em]">
              SP
            </div>

          </motion.div>


          {/* WELCOME */}

          <div className="overflow-hidden">

            <motion.h1
              initial={{
                opacity: 0,
                y: "110%",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.1,
                delay: 0.7,
              }}
              className="font-serif text-[11vw] font-light leading-[0.78] tracking-[-0.055em] md:text-[7vw] lg:text-[6.2vw]"
            >
              Welcome
            </motion.h1>

          </div>


          {/* TO MY WORLD */}

          <div className="overflow-hidden">

            <motion.h1
              initial={{
                opacity: 0,
                y: "110%",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.1,
                delay: 0.82,
              }}
              className="font-serif text-[11vw] font-light leading-[0.86] tracking-[-0.055em] md:text-[7vw] lg:text-[6.2vw]"
            >
              to my world
            </motion.h1>

          </div>


          {/* EXPLORE MORE */}

          <motion.a
            href="/portfolio"
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.25,
            }}
            whileHover={{
              scale: 1.05,
            }}
            className="group mt-8 flex items-center gap-3 border-2 border-white/45 px-6 py-3.5 transition-all duration-500 hover:border-white"
          >

            <span
              className="font-serif text-[24px] font-light text-transparent transition-all duration-500 group-hover:text-white"
              style={{
                WebkitTextStroke:
                  "1px rgba(255,255,255,0.95)",
              }}
            >
              Explore Portfolio
            </span>

            <ArrowUpRight
              size={17}
              strokeWidth={1.2}
              className="text-white/80 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
            />

          </motion.a>


          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 1.45,
            }}
            className="mt-7 text-[9px] uppercase tracking-[0.4em] text-transparent"
            style={{
              WebkitTextStroke:
                "0.65px rgba(255,255,255,0.75)",
            }}
          >
            Discover the story behind the work
          </motion.p>

        </div>


        {/* =====================================================
            MOBILE
            ===================================================== */}

        <div className="relative flex min-h-screen flex-col px-5 pb-12 pt-28 md:hidden">


          {/* =================================================
              MOBILE TOP PHOTO GROUP
              ================================================= */}

          <div className="grid grid-cols-2 gap-3">

            {/* PHOTO 1 */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="h-[220px] overflow-hidden"
            >
              <img
                src={photos.photo1}
                alt="Sushant Prajapati editorial portrait"
                className="h-full w-full object-cover grayscale"
              />
            </motion.div>


            {/* PHOTO 2 */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mt-8 h-[220px] overflow-hidden"
            >
              <img
                src={photos.photo2}
                alt="Sushant Prajapati editorial portrait"
                className="h-full w-full object-cover"
              />
            </motion.div>


            {/* PHOTO 3 — WIDE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="col-span-2 h-[210px] overflow-hidden"
            >
              <img
                src={photos.photo3}
                alt="Sushant Prajapati editorial portrait"
                className="h-full w-full object-cover"
              />
            </motion.div>

          </div>


          {/* =================================================
              MOBILE CENTER CONTENT
              ONLY ONE WELCOME SECTION
              ================================================= */}

          <div className="flex flex-col items-center py-20 text-center">


            {/* SP FRAME */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative mb-8 flex h-12 w-12 items-center justify-center"
            >

              <div className="absolute inset-0 border border-white/30" />

              <span className="absolute -left-[2px] -top-[2px] h-3 w-3 border-l border-t border-white/80" />

              <span className="absolute -right-[2px] -top-[2px] h-3 w-3 border-r border-t border-white/80" />

              <span className="absolute -bottom-[2px] -left-[2px] h-3 w-3 border-b border-l border-white/80" />

              <span className="absolute -bottom-[2px] -right-[2px] h-3 w-3 border-b border-r border-white/80" />

              <div className="text-xl font-medium tracking-[0.12em]">
                SP
              </div>

            </motion.div>


            {/* WELCOME */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="font-serif text-[15vw] font-light leading-[0.8] tracking-[-0.05em]"
            >
              Welcome
            </motion.h1>


            {/* TO MY WORLD */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.3,
              }}
              className="mt-2 font-serif text-[15vw] font-light leading-[0.85] tracking-[-0.05em]"
            >
              to my world
            </motion.h1>


            {/* EXPLORE MORE */}

            <motion.a
              href="/portfolio"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-9 flex items-center gap-3 border-2 border-white/40 px-6 py-3.5 transition-all duration-500 active:bg-white active:text-black"
            >

              <span
                className="font-serif text-2xl font-light text-transparent"
                style={{
                  WebkitTextStroke:
                    "1px rgba(255,255,255,0.95)",
                }}
              >
                Explore Portfolio
              </span>

              <ArrowUpRight
                size={16}
                strokeWidth={1}
              />

            </motion.a>


            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="mt-7 text-[8px] uppercase tracking-[0.35em] text-transparent"
              style={{
                WebkitTextStroke:
                  "0.65px rgba(255,255,255,0.75)",
              }}
            >
              Discover the story behind the work
            </motion.p>

          </div>


          {/* =================================================
              MOBILE BOTTOM PHOTO GROUP
              ================================================= */}

          <div className="grid grid-cols-2 gap-3">


            {/* PHOTO 4 */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="h-[230px] overflow-hidden"
            >
              <img
                src={photos.photo4}
                alt="Sushant Prajapati editorial portrait"
                className="h-full w-full object-cover"
              />
            </motion.div>


            {/* PHOTO 6 */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="mt-8 h-[230px] overflow-hidden"
            >
              <img
                src={photos.photo6}
                alt="Sushant Prajapati editorial portrait"
                className="h-full w-full object-cover"
              />
            </motion.div>


            {/* PHOTO 7 — WIDE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="col-span-2 h-[220px] overflow-hidden"
            >
              <img
                src={photos.photo7}
                alt="Sushant Prajapati editorial portrait"
                className="h-full w-full object-cover grayscale-[5%]"
              />
            </motion.div>


            {/* PHOTO 8 */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="col-span-2 h-[260px] overflow-hidden"
            >
              <img
                src={photos.photo8}
                alt="Sushant Prajapati editorial portrait"
                className="h-full w-full object-cover grayscale-[5%]"
              />
            </motion.div>

          </div>

        </div>

      </section>

    </main>
  );
}