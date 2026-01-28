import { GraduationCap, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortalLinks = () => {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-1">
              Acesse o Portal Galileu
            </h3>
            <p className="text-sm text-muted-foreground">
              Plataforma de ensino para alunos e professores
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-pill gap-2 shadow-soft"
            >
              <a
                href="https://portalaluno.app/auth/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap className="w-5 h-5" />
                Portal do Aluno
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-pill gap-2"
            >
              <a
                href="https://www.appgalileu.com.br/professor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <User className="w-5 h-5" />
                Portal do Professor
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalLinks;
