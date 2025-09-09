import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              Bienvenido a tu nueva experiencia
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed text-pretty">
              Descubre una plataforma diseñada para simplificar tu vida digital. Únete a miles de usuarios que ya
              confían en nosotros.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button asChild size="lg" variant="secondary" className="px-8 py-6 text-lg font-semibold">
              <Link href="/signin">Iniciar Sesión</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/signup">Crear Cuenta</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
