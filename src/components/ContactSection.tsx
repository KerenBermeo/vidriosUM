import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos listos para ayudarte con tu proyecto. Envíanos un mensaje y te responderemos a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-[#388e3c]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-600 mb-6">
                  Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
                </p>
                <Button onClick={() => setIsSubmitted(false)} className="bg-[#388e3c] hover:bg-green-800">
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Servicio de interés
                  </label>
                  <Select onValueChange={handleSelectChange} value={formData.service}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="divisiones">Divisiones de baño y oficina</SelectItem>
                      <SelectItem value="puertas">Puertas, ventanas y fachadas</SelectItem>
                      <SelectItem value="balcones">Balcones, barandas y pasamanos</SelectItem>
                      <SelectItem value="repisas">Repisas, espejos y techos</SelectItem>
                      <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Cuéntanos sobre tu proyecto"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#388e3c] hover:bg-green-800 text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            )}
          </div>

          {/* Map and Contact Info */}
          <div>
          <div>
            <div className="h-[300px] md:h-[400px] bg-gray-200 rounded-lg overflow-hidden mb-8">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.586947202759!2d-76.5387476852446!3d3.437550253441423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMjYnMTUuMiJOIDc2wrAzMiczMS4zIlc!5e0!3m2!1sen!2sco!4v1620000000000!5m2!1sen!2sco&q=Cra.+32+%2335F+bis+-+40,+Cali,+Colombia"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Vidrios UM en Cali - Cra. 32 #35F bis - 40"
                ></iframe>
            </div>
          </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-[#388e3c]" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Dirección</h4>
                  <p className="text-gray-600">Cra. 32 #35F bis - 40</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-[#388e3c]" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Teléfono</h4>
                  <p className="text-gray-600">+57 3167120802</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
