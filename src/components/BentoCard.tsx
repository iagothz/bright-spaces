import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BentoCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
}

const BentoCard = ({
  title,
  description,
  icon: Icon,
  className,
  children,
  variant = "default",
  size = "md",
}: BentoCardProps) => {
  const variants = {
    default: "bg-card shadow-card hover:shadow-card-hover",
    primary: "gradient-primary text-primary-foreground",
    secondary: "bg-secondary",
    accent: "bg-salmon-light",
  };

  const sizes = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "rounded-3xl transition-all duration-300 hover:-translate-y-1",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {Icon && (
        <div
          className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center mb-4",
            variant === "primary" ? "bg-primary-foreground/20" : "bg-primary/10"
          )}
        >
          <Icon
            className={cn(
              "w-6 h-6",
              variant === "primary" ? "text-primary-foreground" : "text-primary"
            )}
          />
        </div>
      )}
      <h3
        className={cn(
          "font-bold text-lg mb-2",
          variant === "primary" ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h3>
      {description && (
        <p
          className={cn(
            "text-sm leading-relaxed",
            variant === "primary" ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export default BentoCard;
