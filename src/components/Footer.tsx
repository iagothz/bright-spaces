import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart, GraduationCap, User, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">IS</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Instituto Sorocabano</h3>
                <p className="text-sm opacity-70">Unidade Registro</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Há mais de 20 anos formando profissionais de excelência na área da saúde.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                Início
              </Link>
              <Link to="/cursos" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                Nossos Cursos
              </Link>
              <Link to="/trabalhe-conosco" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                Trabalhe Conosco
              </Link>
              <Link to="/contato" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                Contato
              </Link>
            </nav>
          </div>

          {/* Portal Galileu */}
          <div>
            <h4 className="font-bold text-lg mb-4">Portal Galileu</h4>
            <nav className="flex flex-col gap-3">
              <a
                href="https://portalaluno.app/auth/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity group"
              >
                <GraduationCap className="w-4 h-4" />
                Portal do Aluno
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.appgalileu.com.br/professor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity group"
              >
                <User className="w-4 h-4" />
                Portal do Professor
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+551338217476"
                className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                (13) 3821-7476
              </a>
              <a
                href="https://wa.me/5515997513449"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                (15) 99751-3449 (WhatsApp)
              </a>
              <a
                href="mailto:inst.sorocabano@terra.com.br"
                className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                inst.sorocabano@terra.com.br
              </a>
              <div className="flex items-start gap-3 text-sm opacity-70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>R. Gersoni Nápoli, 96 - Centro, Registro - SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-60">
          <p>© 2024 Instituto Sorocabano. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido com <Heart className="w-4 h-4 text-primary fill-primary" /> por{" "}
            <a
              href="https://hivedevtech.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 underline"
            >
              Hive Dev Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
