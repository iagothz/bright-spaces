import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import CourseCard from "@/components/CourseCard";
import { ArrowRight } from "lucide-react";

const featuredCourses = [
  {
    title: "Primeiros Socorros",
    type: "Curso Livre",
    status: "open" as const,
    whatsappLink:
      "https://wa.me/5515997513449?text=Olá!%20Tenho%20interesse%20no%20curso%20de%20Primeiros%20Socorros!",
  },
  {
    title: "Técnico de Enfermagem",
    type: "Técnico",
    status: "waiting" as const,
    whatsappLink:
      "https://wa.me/5515997513449?text=Olá!%20Tenho%20interesse%20no%20curso%20Técnico%20de%20Enfermagem!",
  },
  {
    title: "Técnico de Radiologia",
    type: "Técnico",
    status: "open" as const,
    whatsappLink:
      "https://wa.me/5515997513449?text=Olá!%20Tenho%20interesse%20no%20curso%20Técnico%20de%20Radiologia!",
  },
];

const CoursesPreviewSection = () => {
  return (
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block bg-primary/10 text-primary rounded-pill px-4 py-2 text-sm font-medium mb-4">
              Nossos Cursos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Cursos em <span className="text-primary">destaque</span>
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-pill gap-2 self-start md:self-auto"
          >
            <NavLink to="/cursos">
              Ver todos os cursos
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </Button>
        </div>

        {/* Course cards */}
        <div className="space-y-4">
          {featuredCourses.map((course, index) => (
            <div
              key={course.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPreviewSection;
