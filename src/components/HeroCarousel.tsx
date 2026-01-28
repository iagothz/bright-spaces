import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Import images
import fachada from "@/assets/carousel/fachada.jpeg";
import turma1 from "@/assets/carousel/turma1.png";
import enfermagem from "@/assets/carousel/enfermagem-dia.png";
import turma2 from "@/assets/carousel/turma2.png";
import radiologia1 from "@/assets/carousel/radiologia1.png";
import radiologia2 from "@/assets/carousel/radiologia2.png";
import turma2023 from "@/assets/carousel/turma2023.png";
import acessibilidade from "@/assets/carousel/acessibilidade.jpg";

const images = [
  { src: fachada, alt: "Fachada do Instituto Sorocabano" },
  { src: turma2023, alt: "Turma de 2023 - Técnico de Enfermagem" },
  { src: turma1, alt: "Turma de alunos" },
  { src: enfermagem, alt: "Dia da Enfermagem" },
  { src: turma2, alt: "Turma de alunos do Instituto" },
  { src: radiologia1, alt: "Turma de Radiologia" },
  { src: radiologia2, alt: "Alunos de Radiologia" },
  { src: acessibilidade, alt: "Acessibilidade - Instituto Sorocabano" },
];

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    // Auto-play
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative group">
      {/* Main carousel */}
      <div className="overflow-hidden rounded-3xl shadow-soft-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm shadow-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm shadow-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "bg-primary w-6"
                : "bg-card/60 hover:bg-card/80"
            )}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-3xl -z-10 animate-float" />
      <div
        className="absolute -bottom-4 -left-4 w-32 h-32 bg-salmon/50 rounded-3xl -z-10 animate-float"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
};

export default HeroCarousel;
