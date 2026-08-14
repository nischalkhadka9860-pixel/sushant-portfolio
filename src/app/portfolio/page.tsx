"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Menu,
  X,
} from "lucide-react";

type Project = {
  id: number;
  name: string;
  category: string;
  year: string;
  images: string[];
  description: string;
};

/* =========================================================
   PROJECT DATA
   Add or remove images from the arrays below.
   ========================================================= */

const brands: Project[] = [
  {
    id: 1,
    name: "Brand 01",
    category: "Creative Project",
    year: "2026",
    images: [
      "/images/123.png",
      "/images/photo1.png",
      "/images/photo2.png",
      "/images/photo3.png",
    ],
    description:
      "A creative project showcasing visual work, collaboration, and the story behind the final result.",
  },

  {
    id: 2,
    name: "Brand 02",
    category: "Visual Campaign",
    year: "2026",
    images: [
      "/images/photo4.png",
      "/images/photo6.png",
      "/images/photo7.png",
      "/images/photo8.png",
    ],
    description:
      "A visual campaign created through a combination of creative direction, visual development, and execution.",
  },

  {
    id: 3,
    name: "Brand 03",
    category: "Creative Direction",
    year: "2026",
    images: [
      "/images/photo1.png",
      "/images/photo3.png",
      "/images/photo6.png",
    ],
    description:
      "A creative direction project focused on developing a strong visual language and memorable presentation.",
  },

  {
    id: 4,
    name: "Brand 04",
    category: "Visual Identity",
    year: "2026",
    images: [
      "/images/photo2.png",
      "/images/photo4.png",
      "/images/photo7.png",
    ],
    description:
      "A visual identity project exploring composition, photography, and a distinctive visual direction.",
  },
];

const selectedWork: Project[] = [
  {
    id: 5,
    name: "Selected Project 01",
    category: "Featured Work",
    year: "2026",
    images: [
      "/images/photo2.png",
      "/images/photo3.png",
      "/images/photo6.png",
    ],
    description:
      "A featured project that represents the creative approach and visual style behind the work.",
  },

  {
    id: 6,
    name: "Selected Project 02",
    category: "Featured Work",
    year: "2026",
    images: [
      "/images/photo3.png",
      "/images/photo7.png",
      "/images/photo8.png",
    ],
    description:
      "Another selected project showcasing creative development and visual storytelling.",
  },
];

/* =========================================================
   ANIMATION
   ========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* =========================================================
   PROJECT CARD
   ========================================================= */

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={fadeUp}
      transition={{
        delay: index * 0.08,
      }}
      className="group block w-full text-left"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.03]">
        <motion.img
          src={project.images[0]}
          alt={project.name}
          className="h-full w-full object-cover"
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.7,
           ease: [0.22, 1, 0.36, 1] as const,
          }}
        />

        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />

        <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-black/30 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} strokeWidth={1.5} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
            {project.category}
          </p>

          <p className="mt-1 text-lg font-medium">
            {project.name}
          </p>

          <p className="mt-2 text-xs text-white/50">
            {project.images.length} images
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-lg tracking-tight text-white">
            {project.name}
          </p>

          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
            {project.category}
          </p>
        </div>

        <span className="text-xs text-white/40">
          {project.year}
        </span>
      </div>
    </motion.button>
  );
}

/* =========================================================
   PROJECT MODAL / GALLERY
   ========================================================= */

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((current) =>
      current === project.images.length - 1 ? 0 : current + 1,
    );
  };

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? project.images.length - 1 : current - 1,
    );
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl md:p-8"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 30,
          scale: 0.97,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        onClick={(event) => event.stopPropagation()}
        className="relative flex h-[94vh] w-[92vw] max-w-[1450px] flex-col overflow-hidden rounded-sm border border-white/10 bg-[#171717] shadow-2xl"
      >
        {/* CLOSE BUTTON */}

        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur-md transition hover:bg-white hover:text-black"
          aria-label="Close project"
        >
          <X size={18} />
        </button>

        {/* MODAL CONTENT */}

        <div className="grid min-h-0 flex-1 md:grid-cols-[1.5fr_0.5fr]">
          {/* IMAGE AREA */}

          <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-black md:min-h-[650px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={project.images[currentImage]}
                src={project.images[currentImage]}
                alt={`${project.name} ${currentImage + 1}`}
                initial={{
                  opacity: 0,
                  scale: 1.03,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="h-full max-h-[82vh] w-full scale-[1.12] object-contain"
              />
            </AnimatePresence>

            {/* IMAGE COUNTER */}

            <div className="absolute bottom-5 left-5 border border-white/15 bg-black/50 px-4 py-2 text-[10px] uppercase tracking-[0.2em] backdrop-blur-md">
              {String(currentImage + 1).padStart(2, "0")} /{" "}
              {String(project.images.length).padStart(2, "0")}
            </div>

            {/* PREVIOUS / NEXT */}

            {project.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={previousImage}
                  className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md transition hover:bg-white hover:text-black"
                  aria-label="Previous image"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md transition hover:bg-white hover:text-black"
                  aria-label="Next image"
                >
                  <ArrowRight size={18} />
                </button>
              </>
            )}
          </div>

          {/* PROJECT INFORMATION */}

          <div className="flex min-h-0 flex-col overflow-y-auto border-l border-white/10 p-7 md:p-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                {project.category}
              </p>

              <h3 className="mt-5 text-4xl tracking-[-0.04em] md:text-5xl">
                {project.name}
              </h3>

              <p className="mt-7 text-sm leading-7 text-white/45">
                {project.description}
              </p>
            </div>

            {/* THUMBNAILS */}

            <div className="mt-10">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                  Project Images
                </p>

                <p className="text-[10px] text-white/30">
                  {project.images.length} images
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {project.images.map((image, index) => (
                  <button
                    type="button"
                    key={`${image}-${index}`}
                    onClick={() => setCurrentImage(index)}
                    className={`relative aspect-square overflow-hidden border transition ${
                      currentImage === index
                        ? "border-white"
                        : "border-white/10 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.name} thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* PROJECT DETAILS */}

            <div className="mt-auto pt-12">
              <div className="border-t border-white/10 pt-6">
                <div className="flex justify-between text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-white/35">
                    Year
                  </span>

                  <span>
                    {project.year}
                  </span>
                </div>

                <div className="mt-5 flex justify-between text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-white/35">
                    Category
                  </span>

                  <span>
                    {project.category}
                  </span>
                </div>

                <div className="mt-5 flex justify-between text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-white/35">
                    Images
                  </span>

                  <span>
                    {project.images.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
/* =========================================================
   BACKGROUND PARTICLES
   ========================================================= */

function BackgroundParticles() {
  const particles = Array.from({ length: 60 }, (_, index) => ({
    id: index,
    left: `${(index * 37) % 100}%`,
    top: `${(index * 67) % 100}%`,
    size: 1 + (index % 3),
    duration: 5 + (index % 6),
    delay: -(index % 5),
    moveX:
      (index % 2 === 0 ? 1 : -1) *
      (25 + (index % 45)),
    moveY:
      (index % 3 === 0 ? -1 : 1) *
      (20 + (index % 40)),
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: 0.16,
            boxShadow: "0 0 8px rgba(255,255,255,0.25)",
          }}
          animate={{
            x: [0, particle.moveX, 0],
            y: [0, particle.moveY, 0],
            opacity: [0.08, 0.22, 0.08],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
/* =========================================================
   MAIN PAGE
   ========================================================= */

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);

return (
  <main className="relative min-h-screen overflow-hidden bg-[#171717] text-white selection:bg-white selection:text-black">
    <BackgroundParticles />
      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#171717]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 md:px-10">
          <a
            href="#top"
            className="text-sm font-medium tracking-[0.18em]"
          >
            SP.
          </a>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-xs uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#brands"
              className="text-xs uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
            >
              Brands
            </a>

            <a
              href="#work"
              className="text-xs uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
            >
              Work
            </a>

            <a
              href="#experience"
              className="text-xs uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="text-xs uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
            >
              Contact
            </a>
          </nav>

          {/* MOBILE MENU */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center border border-white/15 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              className="overflow-hidden border-t border-white/10 md:hidden"
            >
              <div className="flex flex-col px-6 py-6">
                {[
                  "about",
                  "brands",
                  "work",
                  "experience",
                  "contact",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-white/10 py-4 text-xs uppercase tracking-[0.25em] text-white/70"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        id="top"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#171717] px-6 pt-28 md:px-10"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[5%] top-[20%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[120px]" />

          <div className="absolute bottom-[-10%] right-[10%] h-[450px] w-[450px] rounded-full bg-white/[0.02] blur-[110px]" />
        </div>

        <div className="relative mx-auto flex w-full max-w-[1500px] flex-col justify-center md:min-h-[80vh]">
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-8 text-[10px] uppercase tracking-[0.35em] text-white/40"
          >
            Portfolio / 2026
          </motion.p>

          <div className="relative grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            {/* HERO TEXT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="relative z-10"
            >
              <h1 className="text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.8] tracking-[-0.07em]">
                Sushant
              </h1>

              <h1 className="mt-3 ml-[7vw] text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.8] tracking-[-0.07em] text-white/30">
                Prajapati
              </h1>

              <div className="mt-12 ml-[7vw] max-w-md">
                <p className="text-sm leading-7 text-white/45 md:text-base">
                 A young model with a growing presence in fashion, bringing confidence, character, and individuality to every frame.
                </p>

                <a
                  href="#brands"
                  className="group mt-8 flex w-fit items-center gap-3 text-xs uppercase tracking-[0.25em]"
                >
                  Explore work

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition duration-500 group-hover:-rotate-45 group-hover:bg-white group-hover:text-black">
                    <ArrowDown size={15} />
                  </span>
                </a>
              </div>
            </motion.div>

            {/* =================================================
                123.PNG HERO IMAGE

                Adjust position/size here:
                - max-w-[440px] = width
                - -mt-10 = move upward
                - md:-mt-16 = desktop upward position
                ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 80,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="relative mx-auto -mt-10 w-full max-w-[440px] md:mr-0 md:-mt-16"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/images/123.png"
                  alt="Sushant Prajapati"
                  className="h-auto w-full object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-white/30">
                <span>
                  Portrait / 01
                </span>

                <span>
                  S.P.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    

      {/* =====================================================
          BRANDS
          ===================================================== */}

      <section
        id="brands"
        className="border-t border-white/10 bg-[#171717] px-6 py-28 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeUp}
            className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                 Collaborations
              </p>

              <h2 className="mt-5 text-4xl tracking-[-0.04em] md:text-7xl">
                Brands I&apos;ve
                <br />

                <span className="text-white/30">
                  worked with.
                </span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-white/40">
              A selection of collaborations and projects. Click a
              project to explore all of its images.
            </p>
          </motion.div>

          <div className="grid gap-x-6 gap-y-16 md:grid-cols-2">
            {brands.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() =>
                  setSelectedProject(project)
                }
              />
            ))}
          </div>
        </div>
      </section>
                    {/* =====================================================
          ABOUT
          ===================================================== */}

      <section
        id="about"
        className="border-t border-white/10 bg-[#171717] px-6 py-28 md:px-10 md:py-40"
      >
        <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-[0.35fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeUp}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              About
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeUp}
          >
<div className="relative">
  {/* Small label */}
  <div className="mb-6 flex items-center gap-3">
    <span className="h-px w-10 bg-white/40" />
    <span className="text-[10px] uppercase tracking-[0.35em] text-white/50">
     Introduction
    </span>
  </div>

  <h2 className="max-w-5xl font-serif text-4xl font-light leading-[1.08] tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
    An introduction to{" "}
    <span className="italic text-white">
      Sushant,
    </span>{" "}
    <span className="text-white/25">
      his creative journey, and the work that defines his presence.
    </span>
  </h2>

  {/* Bottom detail */}
  <div className="mt-8 flex items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-white/35">
    <span>Creative / Visual / Experience</span>


  </div>
</div>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="text-sm leading-7 text-white/50">
                Every journey begins with a first step. For Sushant Prajapati, that journey is taking shape through fashion, expression, and the confidence to step into every new frame.

At 20, Sushant is building his path as a model with a growing curiosity for the world of fashion and creative work. From being named 2nd Runner-Up at Model Hunt Nepal S10 to working with Babal Wears, each experience has become part of a journey that continues to evolve.

For Sushant, modeling is more than standing in front of a camera. It is about presence, expression, and discovering new ways to tell a story through an image.

This is only the beginning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SELECTED WORK
          ===================================================== */}

      <section
        id="work"
        className="border-t border-white/10 bg-[#171717] px-6 py-28 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeUp}
            className="mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
             Selected Work
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl tracking-[-0.04em] md:text-7xl">
              Work that
              <br />

              <span className="text-white/30">
                speaks for itself.
              </span>
            </h2>
          </motion.div>

          <div className="space-y-24">
            {selectedWork.map((project, index) => (
              <motion.button
                key={project.id}
                type="button"
                onClick={() =>
                  setSelectedProject(project)
                }
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                variants={fadeUp}
                className="group grid w-full gap-8 text-left md:grid-cols-[1.3fr_0.7fr] md:items-end"
              >
                <div
                  className={`relative overflow-hidden ${
                    index % 2 === 1
                      ? "md:order-2"
                      : ""
                  }`}
                >
                  <motion.img
                    src={project.images[0]}
                    alt={project.name}
                    className="aspect-[16/10] w-full object-cover"
                    whileHover={{
                      scale: 1.04,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                  />

                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
                </div>

                <div
                  className={`${
                    index % 2 === 1
                      ? "md:order-1"
                      : ""
                  }`}
                >
                  <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                      0{index + 1}
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-white/40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>

                  <h3 className="text-3xl tracking-tight md:text-5xl">
                    {project.name}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/40">
                    {project.description}
                  </p>

                  <p className="mt-8 text-[10px] uppercase tracking-[0.25em] text-white/35">
                    {project.category} — {project.year}
                  </p>

                  <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/25">
                    {project.images.length} images
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          EXPERIENCE
          ===================================================== */}

      <section
        id="experience"
        className="border-t border-white/10 bg-[#171717] px-6 py-28 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 md:grid-cols-[0.35fr_1fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={fadeUp}
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                 Experience
              </p>
            </motion.div>

            <div>
              {[
                {
                  year: "2026 — Present",
                  role: "Current Role / Position",
                  company: "Company Name",
                },

                {
                  year: "2024 — 2026",
                  role: "Previous Role / Position",
                  company: "Company Name",
                },

                {
                  year: "2022 — 2024",
                  role: "Previous Role / Position",
                  company: "Company Name",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  variants={fadeUp}
                  className="grid gap-4 border-t border-white/10 py-8 md:grid-cols-[0.25fr_1fr_0.35fr]"
                >
                  <span className="text-xs text-white/35">
                    {item.year}
                  </span>

                  <div>
                    <h3 className="text-xl">
                      {item.role}
                    </h3>

                    <p className="mt-2 text-sm text-white/40">
                      {item.company}
                    </p>
                  </div>

                  <span className="text-xs uppercase tracking-[0.2em] text-white/30 md:text-right">
                    Experience
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          SERVICES
          ===================================================== */}

      <section className="border-t border-white/10 bg-[#171717] px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeUp}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Skills & Services
            </p>

            <div className="mt-12 grid gap-0 border-t border-white/10 md:grid-cols-2">
              {[
                "Creative Direction",
                "Visual Design",
                "Brand Identity",
                "Campaign Development",
                "Photography / Visual Content",
                "Digital Experiences",
              ].map((service, index) => (
                <div
                  key={service}
                  className="group flex items-center justify-between border-b border-white/10 py-7 md:px-5"
                >
                  <span className="text-xl tracking-tight text-white/75 transition group-hover:text-white md:text-2xl">
                    {service}
                  </span>

                  <span className="text-xs text-white/25">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
          ===================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/10 bg-[#171717] px-6 py-32 md:px-10 md:py-52"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[120px]" />

        <div className="relative mx-auto max-w-[1500px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeUp}
            className="text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Contact
            </p>

            <h2 className="mx-auto mt-8 max-w-5xl text-5xl tracking-[-0.06em] md:text-8xl">
              Let&apos;s create
              <br />

              <span className="text-white/30">
                something meaningful.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/40">
              Have a project, collaboration, or idea in mind?
              Feel free to reach out directly.
            </p>

            {/* =================================================
                CONTACT BUTTONS
                ================================================= */}

            <div className="mx-auto mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* EMAIL */}

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=sushantprince31@gmail.com&su=${encodeURIComponent(
                  "Project Inquiry — Sushant Prajapati Portfolio",
                )}&body=${encodeURIComponent(
                  `Hi Sushant,

I came across your portfolio and would love to discuss a project with you.

Project / Brand:
What I need help with:

Timeline:

Budget (optional):

A little more about the project:

Looking forward to hearing from you.

Best regards,
[Your Name]`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border border-white/20 px-6 py-4 text-xs uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
              >
                <Mail size={16} />

                <span>
                  sushantprince31@gmail.com
                </span>

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* PHONE */}

              <a
                href="tel:9808945793"
                className="group flex items-center gap-3 border border-white/20 px-6 py-4 text-xs uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
              >
                <span>
                  +977 9808945793
                </span>

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            {/* =================================================
                MAIN GET IN TOUCH BUTTON
                ================================================= */}

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=sushantprince31@gmail.com&su=${encodeURIComponent(
                "Project Inquiry — Sushant Prajapati Portfolio",
              )}&body=${encodeURIComponent(
                `Hi Sushant,

I came across your portfolio and would love to discuss a project with you.

Project / Brand:
What I need help with:

Timeline:

Budget (optional):

A little more about the project:

Looking forward to hearing from you.

Best regards,
[Your Name]`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mx-auto mt-8 flex w-fit items-center gap-4 border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.25em] transition hover:bg-white hover:text-black"
            >
              <Mail size={16} />

              Get in touch

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="border-t border-white/10 bg-[#171717] px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30 md:flex-row">
          <span>
            © 2026 Sushant Prajapati
          </span>

          <span>
            Portfolio / Personal Website
          </span>
        </div>
      </footer>

      {/* =====================================================
          PROJECT MODAL
          ===================================================== */}

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() =>
              setSelectedProject(null)
            }
          />
        )}
      </AnimatePresence>
    </main>
  );
}