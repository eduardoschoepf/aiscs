"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Users, MessageCircle, Clock } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  visitType: string
  groupSize: string
  preferredDate: string
  preferredTime: string
  message: string
}

export default function VisitBookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    visitType: "",
    groupSize: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const formatWhatsAppMessage = () => {
    const visitTypes = {
      "guided-tour": "Visita Guiada",
      "corporate-event": "Evento Corporativo",
      "track-day": "Track Day",
      educational: "Visita Educacional",
    }

    const message = `🏁 *AGENDAMENTO DE VISITA - AUTÓDROMO INTERNACIONAL*

👤 *Nome:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Telefone:* ${formData.phone}

🎯 *Tipo de Visita:* ${visitTypes[formData.visitType as keyof typeof visitTypes] || formData.visitType}
👥 *Número de Pessoas:* ${formData.groupSize}
📅 *Data Preferida:* ${new Date(formData.preferredDate).toLocaleDateString("pt-BR")}
🕐 *Horário Preferido:* ${formData.preferredTime}

💬 *Mensagem Adicional:*
${formData.message || "Nenhuma mensagem adicional"}

---
_Solicitação enviada através do site oficial do Autódromo Internacional de Santa Cruz do Sul_`

    return encodeURIComponent(message)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular delay de envio
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const whatsappMessage = formatWhatsAppMessage()
    const whatsappNumber = "5551999999999" // Substitua pelo número real do autódromo
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    window.open(whatsappUrl, "_blank")
    setIsSubmitting(false)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      visitType: "",
      groupSize: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    })
  }

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.visitType &&
    formData.groupSize &&
    formData.preferredDate &&
    formData.preferredTime

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="font-montserrat font-bold text-2xl">Agende sua Visita</CardTitle>
        <CardDescription>Preencha o formulário e enviaremos sua solicitação via WhatsApp</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone/WhatsApp *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="(51) 99999-9999"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="visitType">Tipo de Visita *</Label>
              <Select value={formData.visitType} onValueChange={(value) => handleInputChange("visitType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="guided-tour">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>Visita Guiada</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="corporate-event">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Evento Corporativo</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="track-day">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Track Day</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="educational">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>Visita Educacional</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="groupSize">Número de Pessoas *</Label>
              <Select value={formData.groupSize} onValueChange={(value) => handleInputChange("groupSize", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Quantas pessoas?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">1 a 5 pessoas</SelectItem>
                  <SelectItem value="6-15">6 a 15 pessoas</SelectItem>
                  <SelectItem value="16-30">16 a 30 pessoas</SelectItem>
                  <SelectItem value="31-50">31 a 50 pessoas</SelectItem>
                  <SelectItem value="50+">Mais de 50 pessoas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferredDate">Data Preferida *</Label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredTime">Horário Preferido *</Label>
              <Select
                value={formData.preferredTime}
                onValueChange={(value) => handleInputChange("preferredTime", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o horário" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="08:00">08:00</SelectItem>
                  <SelectItem value="09:00">09:00</SelectItem>
                  <SelectItem value="10:00">10:00</SelectItem>
                  <SelectItem value="11:00">11:00</SelectItem>
                  <SelectItem value="14:00">14:00</SelectItem>
                  <SelectItem value="15:00">15:00</SelectItem>
                  <SelectItem value="16:00">16:00</SelectItem>
                  <SelectItem value="17:00">17:00</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensagem Adicional</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Conte-nos mais sobre sua visita, interesses específicos ou necessidades especiais..."
              rows={4}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Enviando...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Enviar via WhatsApp</span>
              </div>
            )}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            Ao clicar em "Enviar via WhatsApp", você será redirecionado para o WhatsApp com sua mensagem pré-formatada.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
