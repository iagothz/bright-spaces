import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="gradient-primary rounded-3xl p-8 md:p-12 lg:p-16 shadow-soft-lg relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Pronto para começar sua carreira na saúde?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Entre em contato conosco e dê o primeiro passo para uma carreira de sucesso na área da saúde.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-pill gap-2 text-base px-8 shadow-soft"
              >
                <Link to="/contato">
                  Fale Conosco
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-pill gap-2 text-base px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href="tel:+5515997513449">
                  <Phone className="w-4 h-4" />
                  (15) 99751-3449
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-primary-foreground/70 text-sm">
              <a
                href="mailto:contato@institutosorocabano.com.br"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@institutosorocabano.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
