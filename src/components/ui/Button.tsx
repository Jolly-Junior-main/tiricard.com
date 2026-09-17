import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-none font-medium transition-all duration-500 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 tracking-wider uppercase text-[11px] sm:text-[13px]";
    
    const variants = {
      primary: "bg-brand-black text-brand-bg hover:bg-brand-charcoal",
      secondary: "bg-brand-bg text-brand-black hover:bg-[#EAE5D9]",
      outline: "border border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-bg",
      ghost: "hover:opacity-60 text-brand-black transition-opacity",
      glass: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20"
    };
    
    const sizes = {
      sm: "h-10 px-6",
      md: "h-12 px-8",
      lg: "h-16 px-12"
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
