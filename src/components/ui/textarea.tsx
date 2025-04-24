import * as React from "react"
import { cn } from "../../../lib/utils" // Utilidad para combinar clases de Tailwind

/**
 * Componente Textarea personalizable con soporte para referencias (ref)
 * 
 * - Hereda todas las propiedades nativas de textarea
 * - Estilos base con Tailwind CSS
 * - Soporta className adicional para personalización
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
