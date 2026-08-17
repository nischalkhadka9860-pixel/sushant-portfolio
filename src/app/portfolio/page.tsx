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
  video?: string;
};

/* =========================================================
   PROJECT DATA
   Add or remove images from the arrays below.
   ========================================================= */

const brands: Project[] = [
  {
    id: 1,
    name: "Artseum",
    category: "Promotional Studio Shoot",
    year: "2026",
    images: [
      "/images/Brand1.jpg",
      "/images/Brand2.jpg",
      "/images/Brand3.jpg",
    ],
    description:
      "A refined studio collaboration at Artseum, capturing a polished promotional aesthetic through considered styling, precise lighting, and confident on-camera presence.",
  },

  {
    id: 2,
    name: "klaron",
    category: "Lifestyle",
    year: "2026",
    images: [
      "/images/Brand4.jpg",
      "/images/Brand5.jpg",
      "/images/Brand6.jpg",
      "/images/Brand7.jpg",
      "/images/Brand8.jpg",
      "/images/Brand9.jpg",
    ],
    description:
      "A lifestyle-focused collaboration for Klaron, capturing a natural and effortless approach to everyday fashion through relaxed styling, authentic movement, and an outdoor setting.",
  },

  {
    id: 3,
    name: "klaron",
    category: "Brand Campaign",
    year: "2026",
    images: [
      "/images/Brand10.jpg",
      "/images/Brand11.jpg",
      "/images/Brand12.jpg",
      "/images/Brand13.jpg",
      "/images/Brand14.jpg",
      "/images/Brand15.jpg",
      "/images/Brand16.jpg",
      "/images/Brand17.jpg",

    ],
    description:
      "A branding-focused shoot for Klaron, using a clean studio aesthetic, controlled lighting, and strong visual presence to create imagery aligned with the brand’s identity.",
  },

  {
    id: 4,
    name: "Babal Wears / Babal Essentials",
    category: "Fashion / Casualwear Campaign",
    year: "2026",
    images: [
      "/images/Brand18.jpg",
      "/images/Brand19.jpg",
      "/images/Brand20.jpg",
    ],
    description:
      "A refined campaign for Babal Wears, showcasing its contemporary casualwear and graphic-led designs through a combination of studio portraiture and lifestyle imagery. The work captures the brand’s distinctive visual identity while highlighting its relaxed, modern approach to everyday fashion.",
  },
];
/* =========================================================
  projects
   ========================================================= */
const selectedWork: Project[] = [
  {
    id: 5,
    name: "Model Hunt Nepal — Season 10",
    category: "Modeling Competition",
    year: "2026",
    images: [
      "/images/model1.jpg",
      "/images/model2.jpg",
      "/images/model3.jpg",
      "/images/model4.jpg",
      "/images/model5.jpg",
      "/images/model6.jpg",
      "/images/model7.jpg",
      "/images/model8.jpg",
      "/images/model9.jpg",
    ],
    description:
      "A defining chapter in Sushant’s modeling journey, showcasing his confidence, versatility, and presence throughout Model Hunt Nepal Season 10. The experience marked an important step in his development as a professional model, from competition appearances to working confidently in front of the camera and on stage.",
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
          className="h-full w-full object-cover object-[center_20%]"
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

  const hasVideo = Boolean(project.video);
  const hasImages = project.images.length > 0;

  const nextImage = () => {
    if (!hasImages) return;

    setCurrentImage((current) =>
      current === project.images.length - 1 ? 0 : current + 1,
    );
  };

  const previousImage = () => {
    if (!hasImages) return;

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

          {/* =================================================
              MEDIA AREA
              ================================================= */}

          <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-black md:min-h-[650px]">

            {/* VIDEO PROJECT */}

            {hasVideo ? (
              <div className="relative h-full w-full min-h-[400px] bg-black md:min-h-[650px]">
                <iframe
                  src={project.video}
                  title={project.name}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : hasImages ? (
              /* IMAGE PROJECT */
              <>
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
              </>
            ) : (
              /* FALLBACK */
              <div className="flex h-full min-h-[400px] items-center justify-center text-[10px] uppercase tracking-[0.3em] text-white/30">
                No media available
              </div>
            )}
          </div>

          {/* =================================================
              PROJECT INFORMATION
              ================================================= */}

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

            {/* =================================================
                THUMBNAILS
                Only show for image projects
                ================================================= */}

            ```tsx id="3l0drn"
{hasImages && (
  <div className="mt-10">

    {/* MANISH RAI — FIRST 6 IMAGES */}
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-white/20" />

        <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
          Manish Rai
        </p>

        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {project.images.slice(0, 6).map((image, index) => (
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

    {/* SUSHANT — LAST 3 IMAGES */}
    <div className="mt-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-white/20" />

        <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
          Marsyangde
        </p>

        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {project.images.slice(6, 9).map((image, index) => {
          const actualIndex = index + 6;

          return (
            <button
              type="button"
              key={`${image}-${actualIndex}`}
              onClick={() => setCurrentImage(actualIndex)}
              className={`relative aspect-square overflow-hidden border transition ${
                currentImage === actualIndex
                  ? "border-white"
                  : "border-white/10 opacity-50 hover:opacity-100"
              }`}
            >
              <img
                src={image}
                alt={`${project.name} thumbnail ${actualIndex + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>

  </div>
)}
```


            {/* VIDEO LABEL */}

            {hasVideo && (
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                  Project Media
                </p>

                <p className="mt-3 text-sm text-white/40">
                  Featured video campaign
                </p>
              </div>
            )}

            {/* =================================================
                PROJECT DETAILS
                ================================================= */}

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

                <div className="mt-5 flex justify-between gap-6 text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-white/35">
                    Category
                  </span>

                  <span className="text-right">
                    {project.category}
                  </span>
                </div>

                <div className="mt-5 flex justify-between text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-white/35">
                    Media
                  </span>

                  <span>
                    {hasVideo
                      ? "Video"
                      : `${project.images.length} Images`}
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
   MAIN PAGE
   ========================================================= */

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#171717] text-white selection:bg-white selection:text-black">
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

    {/* BRAND PROJECTS */}
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

    {/* JOURNEY CONTINUES */}
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="mt-28 border-t border-white/10 pt-16 md:mt-40 md:pt-20"
    >
      <div className="flex flex-col items-center text-center">
        <p className="mb-6 text-[9px] uppercase tracking-[0.35em] text-white/30">
          The next chapter
        </p>

        <h3 className="max-w-4xl font-serif text-4xl font-light leading-[0.95] tracking-[-0.04em] text-white/90 md:text-7xl">
          The journey
          <br />

          <span className="text-white/30">
            continues.
          </span>
        </h3>

        <div className="mt-10 h-px w-16 bg-white/20" />

        <p className="mt-6 max-w-md text-xs leading-6 text-white/35 md:text-sm">
          More collaborations, campaigns, and creative stories
          are yet to come.
        </p>

        <p className="mt-8 text-[9px] uppercase tracking-[0.3em] text-white/20">
          04 — ∞
        </p>
      </div>
    </motion.div>
  </div>
</section>
{/* =====================================================
    ABOUT
    ===================================================== */}

<section
  id="about"
  className="border-t border-white/10 bg-[#171717] px-6 py-28 md:px-10 md:py-40"
>
  <div className="mx-auto max-w-[1500px]">

    {/* TOP LABEL */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="grid gap-8 md:grid-cols-[0.35fr_1fr]"
    >
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
          About
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="h-px w-12 bg-white/30" />

        <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
          Introduction
        </p>
      </div>
    </motion.div>

{/* LARGE INTRODUCTION */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.2,
  }}
  variants={fadeUp}
  className="mx-auto mt-10 max-w-[1250px] text-center"
>
  <h2 className="text-4xl leading-[1.05] tracking-[-0.045em] md:text-6xl lg:text-[5.5rem]">
    An introduction to{" "}
    <span className="text-white">
      Sushant,
    </span>{" "}
    <span className="text-white/25">
      his creative journey, and the work that defines his presence.
    </span>
  </h2>
</motion.div>

    {/* =====================================================
    PROFILE / BIO
    ===================================================== */}

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.2,
  }}
  variants={fadeUp}
  className="mx-auto mt-24 max-w-[900px] text-center md:mt-32"
>
  <p className="text-sm leading-7 text-white/45 md:text-base md:leading-8">
    Every journey begins with a first step. For Sushant Prajapati, that
    journey began with a growing interest in fashion, expression, and the
    confidence to step into every new frame. His experience through Model
    Hunt Nepal — Season 10, alongside his growing work with fashion and
    lifestyle brands, has shaped his approach to modeling and visual
    storytelling. For Sushant, modeling is more than standing in front of
    a camera. It is about presence, expression, versatility, and finding
    new ways to communicate a story through an image.
  </p>

  {/* SMALL CLOSING STATEMENT */}
  <div className="mt-12">
    <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
      The journey is only beginning.
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
                  year: "2025 — Present",
                  role: "Professional Model",
                  company: "Independent / Freelance",
                },

                {
                  year: "2026 — Present",
                  role: "Model / Contestant · 2nd Runner-Up",
                  company: "Model Hunt Nepal — Season 10",
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
                SOCIAL LINKS
                ================================================= */}

            <div className="mx-auto mt-12 max-w-xl">
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/35">
                Follow Sushant
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="https://www.instagram.com/sushant_prajapati_77/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between gap-5 border border-white/15 px-6 py-4 text-xs uppercase tracking-[0.2em] transition-all duration-500 hover:border-white/40 hover:bg-white hover:text-black sm:w-auto"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[14px]">◎</span>
                    Instagram
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="https://www.tiktok.com/@afine_sus?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between gap-5 border border-white/15 px-6 py-4 text-xs uppercase tracking-[0.2em] transition-all duration-500 hover:border-white/40 hover:bg-white hover:text-black sm:w-auto"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[14px]">♪</span>
                    TikTok
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
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