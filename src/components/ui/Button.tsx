import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "glass";
type ButtonSize = "sm" | "md";

const BASE_CLASSES =
  "inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wide transition-all duration-300 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "rounded-full bg-gradient-to-b from-brand-light via-brand via-[42%] to-brand-dark text-white shadow-btn-primary hover:-translate-y-0.5 hover:brightness-[1.06] hover:shadow-btn-primary-hover",
  secondary:
    "glass-main glass-hover rounded-full border border-white/10 text-white hover:text-brand-light",
  glass:
    "glass-main glass-hover rounded-full text-neutral-200 hover:text-brand-light",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "gap-1.5 px-3 py-1.5 text-xs",
  md: "gap-2 px-5 py-2.5 text-sm",
};

type CommonButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsAnchor = CommonButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsNative = CommonButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsAnchor | ButtonAsNative;

const buildClassName = (
  variant: ButtonVariant,
  size: ButtonSize,
  fullWidth: boolean,
  className: string
) =>
  [BASE_CLASSES, VARIANT_CLASSES[variant], SIZE_CLASSES[size], fullWidth && "w-full", className]
    .filter(Boolean)
    .join(" ");

const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  href,
  ...rest
}: ButtonProps) => {
  const classes = buildClassName(variant, size, fullWidth, className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
