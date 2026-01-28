import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Briefcase, Heart, Users } from "lucide-react";
import BentoCard from "@/components/BentoCard";

const TrabalheConosco = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Currículo enviado! 🎉",
      description: "Analisaremos seu perfil e entraremos em contato.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16 gradient-soft">
        <div className="container mx-auto px-6">
          {/* Page header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-primary/10 text-primary rounded-pill px-4 py-2 text-sm font-medium mb-4">
              Carreiras
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Trabalhe <span className="text-primary">Conosco</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Faça parte da nossa equipe e contribua para formar os profissionais da saúde do amanhã.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <BentoCard
              title="Ambiente Acolhedor"
              description="Trabalhe em um ambiente colaborativo e amigável."
              icon={Heart}
              size="sm"
            />
            <BentoCard
              title="Crescimento Profissional"
              description="Oportunidades de desenvolvimento e capacitação."
              icon={Briefcase}
              size="sm"
              variant="accent"
            />
            <BentoCard
              title="Equipe Dedicada"
              description="Faça parte de uma equipe comprometida com a excelência."
              icon={Users}
              size="sm"
            />
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 shadow-card space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-foreground font-medium">
                    Nome Completo
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    required
                    placeholder="Seu nome"
                    className="h-12 rounded-2xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="h-12 rounded-2xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone" className="text-foreground font-medium">
                  Telefone
                </Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  className="h-12 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem" className="text-foreground font-medium">
                  Mensagem / Área de Interesse
                </Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={4}
                  placeholder="Conte-nos um pouco sobre você e sua experiência..."
                  className="rounded-2xl resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="curriculo" className="text-foreground font-medium">
                  Anexar Currículo
                </Label>
                <Input
                  id="curriculo"
                  name="curriculo"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className="h-12 rounded-2xl file:mr-4 file:py-2 file:px-4 file:rounded-pill file:border-0 file:bg-primary/10 file:text-primary file:font-medium hover:file:bg-primary/20 cursor-pointer"
                />
                <p className="text-xs text-muted-foreground">
                  Formatos aceitos: PDF, DOC, DOCX
                </p>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Currículo
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrabalheConosco;
