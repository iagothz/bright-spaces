import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowRight, GraduationCap, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero pt-24 overflow-hidden">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-pill px-4 py-2 text-primary font-medium text-sm">
              <Award className="w-4 h-4" />
              <span>Mais de 20 anos de tradição</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Conheça o{" "}
              <span className="text-gradient">Sorocabano</span>,{" "}
              <span className="text-primary">excelência em ensino</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              O Instituto Sorocabano se consolidou como um dos principais centros de formação 
              profissional na área da saúde. Já formamos mais de 4 mil profissionais que hoje 
              atuam com competência e dedicação.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-pill shadow-soft-lg gap-2 text-base px-8">
                <NavLink to="/cursos">
                  Ver Cursos
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-pill gap-2 text-base px-8"
              >
                <NavLink to="/contato">Fale Conosco</NavLink>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-foreground">4.000+</p>
                  <p className="text-sm text-muted-foreground">Alunos formados</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-foreground">20+</p>
                  <p className="text-sm text-muted-foreground">Anos de experiência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Instituto Sorocabano - Fachada"
                className="rounded-3xl shadow-soft-lg w-full object-cover aspect-[4/3]"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-3xl -z-0 animate-float" />
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-salmon/50 rounded-3xl -z-0 animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
