import BentoCard from "@/components/BentoCard";
import { Heart, BookOpen, Building, Award, Users, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-primary/10 text-primary rounded-pill px-4 py-2 text-sm font-medium mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher o <span className="text-primary">Sorocabano</span>?
          </h2>
          <p className="text-muted-foreground">
            Infraestrutura moderna e completa para a sua formação profissional na área da saúde.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card grande */}
          <BentoCard
            title="Tradição e Excelência"
            description="Com mais de 20 anos de história, já formamos mais de 4 mil profissionais que hoje atuam com competência e dedicação em diversos setores da saúde."
            icon={Award}
            variant="primary"
            size="lg"
            className="md:col-span-2 lg:col-span-1 lg:row-span-2"
          />

          <BentoCard
            title="Cursos Técnicos"
            description="Nossos Cursos Técnicos são certificados pelo MEC, conforme a Lei nº 11.741, de 16 de julho de 2008."
            icon={BookOpen}
            className="animate-fade-in"
          />

          <BentoCard
            title="Cursos Livres"
            description="Ampla gama de cursos livres semipresenciais e EAD para sua capacitação contínua."
            icon={Heart}
            variant="accent"
            className="animate-fade-in"
          />

          <BentoCard
            title="Infraestrutura Moderna"
            description="Localizado estrategicamente no centro de Registro, com estrutura completa para seu aprendizado."
            icon={Building}
            className="animate-fade-in"
          />

          <BentoCard
            title="Corpo Docente Qualificado"
            description="Professores com ampla experiência prática e acadêmica na área da saúde."
            icon={Users}
            variant="secondary"
            className="animate-fade-in"
          />

          <BentoCard
            title="Horários Flexíveis"
            description="Opções de horários que se adaptam à sua rotina, incluindo cursos noturnos."
            icon={Clock}
            className="animate-fade-in lg:col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
