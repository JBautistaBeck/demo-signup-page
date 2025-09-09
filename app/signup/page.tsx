"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    company: "",
    position: "",
    industry: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    birthDate: "",
    gender: "",
    bio: "",
    website: "",
    linkedin: "",
    twitter: "",
    newsletter: false,
    terms: false,
    privacy: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Volver al inicio
          </Link>
        </div>

        <Card className="border-border shadow-sm">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl font-bold">Crear tu cuenta</CardTitle>
            <CardDescription className="text-lg">
              Completa todos los campos para comenzar tu experiencia
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Información Personal */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Información Personal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Tu apellido"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Fecha de Nacimiento</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange("birthDate", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Género</Label>
                    <Select onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu género" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Masculino</SelectItem>
                        <SelectItem value="female">Femenino</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefiero no decir</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Información Profesional */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Información Profesional</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Nombre de tu empresa"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Cargo</Label>
                    <Input
                      id="position"
                      type="text"
                      placeholder="Tu posición"
                      value={formData.position}
                      onChange={(e) => handleInputChange("position", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industria</Label>
                  <Select onValueChange={(value) => handleInputChange("industry", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu industria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Tecnología</SelectItem>
                      <SelectItem value="finance">Finanzas</SelectItem>
                      <SelectItem value="healthcare">Salud</SelectItem>
                      <SelectItem value="education">Educación</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="manufacturing">Manufactura</SelectItem>
                      <SelectItem value="consulting">Consultoría</SelectItem>
                      <SelectItem value="other">Otra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Ubicación */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Ubicación</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">País</Label>
                    <Input
                      id="country"
                      type="text"
                      placeholder="Tu país"
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Ciudad</Label>
                    <Input
                      id="city"
                      type="text"
                      placeholder="Tu ciudad"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Dirección</Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Tu dirección completa"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="postalCode">Código Postal</Label>
                  <Input
                    id="postalCode"
                    type="text"
                    placeholder="12345"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                  />
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Redes Sociales</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="website">Sitio Web</Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://tusitio.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      type="url"
                      placeholder="https://linkedin.com/in/tuperfil"
                      value={formData.linkedin}
                      onChange={(e) => handleInputChange("linkedin", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter/X</Label>
                    <Input
                      id="twitter"
                      type="url"
                      placeholder="https://twitter.com/tuusuario"
                      value={formData.twitter}
                      onChange={(e) => handleInputChange("twitter", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Biografía */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Sobre ti</h3>
                <div className="space-y-2">
                  <Label htmlFor="bio">Biografía</Label>
                  <Textarea
                    id="bio"
                    placeholder="Cuéntanos un poco sobre ti, tus intereses y experiencia..."
                    value={formData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    rows={4}
                  />
                </div>
              </div>

              {/* Contraseña */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Seguridad</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña *</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Mínimo 8 caracteres"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar Contraseña *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Repite tu contraseña"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Preferencias */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Preferencias</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Quiero recibir noticias y actualizaciones por email
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                      required
                    />
                    <Label htmlFor="terms" className="text-sm">
                      Acepto los{" "}
                      <Link href="/terms" className="text-accent hover:underline">
                        términos y condiciones
                      </Link>{" "}
                      *
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="privacy"
                      checked={formData.privacy}
                      onCheckedChange={(checked) => handleInputChange("privacy", checked as boolean)}
                      required
                    />
                    <Label htmlFor="privacy" className="text-sm">
                      Acepto la{" "}
                      <Link href="/privacy" className="text-accent hover:underline">
                        política de privacidad
                      </Link>{" "}
                      *
                    </Label>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full py-6 text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
              >
                Crear mi cuenta
              </Button>
            </form>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                ¿Ya tienes una cuenta?{" "}
                <Link href="/signin" className="text-accent hover:underline font-medium">
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
