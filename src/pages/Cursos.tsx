import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const allCourses = [
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
  {
    title: "Cuidador de Idosos",
    type: "Curso Livre",
    status: "open" as const,
    whatsappLink:
      "https://wa.me/5515997513449?text=Olá!%20Tenho%20interesse%20no%20curso%20de%20Cuidador%20de%20Idosos!",
  },
  {
    title: "Auxiliar de Farmácia",
    type: "Curso Livre",
    status: "waiting" as const,
    whatsappLink:
      "https://wa.me/5515997513449?text=Olá!%20Tenho%20interesse%20no%20curso%20de%20Auxiliar%20de%20Farmácia!",
  },
  {
    title: "Instrumentação Cirúrgica",
    type: "Curso Livre",
    status: "closed" as const,
    whatsappLink: "",
  },
];

const Cursos = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Define status priority: open first, then waiting, then closed
  const statusPriority = { open: 0, waiting: 1, closed: 2 };

  const filteredCourses = allCourses
    .filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      // First sort by status priority
      const statusDiff = statusPriority[a.status] - statusPriority[b.status];
      if (statusDiff !== 0) return statusDiff;
      // Then sort alphabetically by title
      return a.title.localeCompare(b.title, "pt-BR");
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Page header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-primary/10 text-primary rounded-pill px-4 py-2 text-sm font-medium mb-4">
              Formação Profissional
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos <span className="text-primary">Cursos</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Encontre o curso ideal para sua carreira na área da saúde.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Pesquisar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 rounded-pill bg-card shadow-card border-border focus:shadow-card-hover transition-shadow"
              />
            </div>
          </div>

          {/* Courses list */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <div
                  key={course.title}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CourseCard {...course} />
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum curso encontrado com "{searchTerm}"
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cursos;
