import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "gradient" | "outline";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  gradient: "bg-gradient-to-r from-orange-500 to-orange-800",
  outline:
    "inline-flex justify-center items-center text-center w-full h-10 tracking-tight text-base border border-orange-900 rounded-lg transition duration-200 hover:bg-orange-900",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
}

const Button = ({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) => (
  <a href={href} className={`${VARIANT_CLASSES[variant]} ${className}`.trim()} {...rest}>
    {children}
  </a>
);

export default Button;
