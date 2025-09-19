import { toast as sonnerToast } from "sonner"

export function useToast() {
  const toast = ({
    title,
    description,
    variant,
  }: {
    title: string
    description?: string
    variant?: "default" | "destructive"
  }) => {
    sonnerToast[variant === "destructive" ? "error" : "success"](title, {
      description,
    })
  }

  return { toast }
}
