import * as React from "react"
import { cn } from "../../../lib/utils" // Utilidad para combinar clases de Tailwind

// Componente Input reutilizable con soporte para ref
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Estilos base del input
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
          // Estilos para estados especiales
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className // Clases adicionales pasadas como prop
        )}
        ref={ref}
        {...props} // Todas las props nativas del input
      />
    )
  }
)

// Identificador para React DevTools
Input.displayName = "Input"

export { Input }
