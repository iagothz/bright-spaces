import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";

interface CourseCardProps {
  title: string;
  type: string;
  status: "open" | "waiting" | "closed";
  whatsappLink?: string;
}

const CourseCard = ({ title, type, status, whatsappLink }: CourseCardProps) => {
  const statusConfig = {
    open: {
      label: "Vagas abertas",
      className: "bg-green-100 text-green-700 border-green-200",
    },
    waiting: {
      label: "Lista de Espera",
      className: "bg-amber-100 text-amber-700 border-amber-200",
    },
    closed: {
      label: "Turma fechada",
      className: "bg-muted text-muted-foreground border-border",
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <div className="bg-card rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
      <div className="space-y-2">
        <h3 className="font-bold text-lg text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{type}</p>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <Badge
          variant="outline"
          className={cn("rounded-pill px-4 py-1 font-medium", currentStatus.className)}
        >
          {currentStatus.label}
        </Badge>

        {whatsappLink && status !== "closed" && (
          <Button
            asChild
            className="rounded-pill gap-2 shadow-soft"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              Tenho interesse
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
