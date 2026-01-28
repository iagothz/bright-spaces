import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada! ✉️",
      description: "Entraremos em contato em breve.",
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
              Fale Conosco
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Tire suas dúvidas ou envie uma mensagem. Estamos aqui para ajudar!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="bg-card rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Telefone</h3>
                <a
                  href="tel:+5515997513449"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (15) 99751-3449
                </a>
              </div>

              <div className="bg-card rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">E-mail</h3>
                <a
                  href="mailto:contato@institutosorocabano.com.br"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  contato@institutosorocabano.com.br
                </a>
              </div>

              <div className="bg-card rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Endereço</h3>
                <p className="text-muted-foreground text-sm">Centro, Registro - SP</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
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
                    Mensagem
                  </Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={5}
                    placeholder="Escreva sua mensagem..."
                    className="rounded-2xl resize-none"
                  />
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
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
