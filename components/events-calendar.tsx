"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronLeft, ChevronRight, MapPin, Clock, Trophy, Bike, Truck, Car } from "lucide-react"

interface Event {
  id: string
  title: string
  date: string
  time?: string
  location: string
  circuit: string
  type: "stock-car" | "formula-3" | "formula-truck" | "motociclismo" | "corporativo" | "visita" | "copa-truck" | "endurance"
  status: "confirmado" | "a-confirmar" | "encerrado"
  description?: string
}

const events2024: Event[] = []

const events2025: Event[] = [
  {
    id: "1",
    title: "Fórmula Truck - Abertura da Temporada",
    date: "2025-02-15",
    time: "15:00",
    location: "Santa Cruz do Sul (RS)",
    circuit: "Autódromo Internacional de Santa Cruz do Sul",
    type: "formula-truck",
    status: "confirmado",
    description: "Primeira etapa da Fórmula Truck 2025, abrindo a temporada no Autódromo Internacional de Santa Cruz do Sul.",
  },
  {
    id: "2",
    title: "Copa Truck - GP Santa Cruz do Sul",
    date: "2025-08-24",
    time: "14:00",
    location: "Santa Cruz do Sul (RS)",
    circuit: "Autódromo Internacional de Santa Cruz do Sul",
    type: "copa-truck",
    status: "confirmado",
    description: "Etapa da Copa Truck 2025 com os caminhões mais rápidos do Brasil.",
  },
  {
    id: "3",
    title: "Fórmula Truck - Etapa Oficial",
    date: "2025-09-13",
    time: "15:30",
    location: "Santa Cruz do Sul (RS)",
    circuit: "Autódromo Internacional de Santa Cruz do Sul",
    type: "formula-truck",
    status: "confirmado",
    description: "Etapa oficial da Fórmula Truck 2025, trazendo emoção e potência para Santa Cruz do Sul.",
  },
  {
    id: "4",
    title: "Moto1000GP - Etapa Santa Cruz do Sul",
    date: "2025-10-03",
    time: "10:00",
    location: "Santa Cruz do Sul (RS)",
    circuit: "Autódromo Internacional de Santa Cruz do Sul",
    type: "motociclismo",
    status: "confirmado",
    description: "Etapa do Moto1000GP 2025, com participação das categorias Yamaha R15 e R3 bLU cRU América Latina.",
  },
  {
    id: "5",
    title: "Campeonato Gaúcho de Endurance",
    date: "2025-10-11",
    time: "14:00",
    location: "Santa Cruz do Sul (RS)",
    circuit: "Autódromo Internacional de Santa Cruz do Sul",
    type: "endurance",
    status: "confirmado",
    description: "Prova de longa duração do Campeonato Gaúcho de Endurance, reunindo pilotos e equipes de todo o estado.",
  },
  {
    id: "6",
    title: "Endurance Brasil - Etapa Santa Cruz do Sul",
    date: "2025-10-31",
    time: "14:00",
    location: "Santa Cruz do Sul (RS)",
    circuit: "Autódromo Internacional de Santa Cruz do Sul",
    type: "endurance",
    status: "confirmado",
    description: "Etapa do Endurance Brasil 2025, com carros de alto desempenho em uma corrida de resistência emocionante.",
  },
];


const allEvents = [...events2024, ...events2025]

const eventTypes = {
  "stock-car": { label: "Stock Car", icon: Car, color: "bg-red-500" },
  "formula-3": { label: "Fórmula 3", icon: Car, color: "bg-blue-500" },
  "formula-truck": { label: "Fórmula Truck", icon: Truck, color: "bg-orange-500" },
  "copa-truck": { label: "Copa Truck", icon: Truck, color: "bg-yellow-500" },
  endurance: { label: "Endurance", icon: Car, color: "bg-teal-500" },
  motociclismo: { label: "Motociclismo", icon: Bike, color: "bg-green-500" },
  corporativo: { label: "Corporativo", icon: Trophy, color: "bg-purple-500" },
  visita: { label: "Visita", icon: MapPin, color: "bg-gray-500" },
}

const statusColors = {
  confirmado: "bg-green-100 text-green-800",
  "a-confirmar": "bg-yellow-100 text-yellow-800",
  encerrado: "bg-gray-100 text-gray-800",
}

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]

export default function EventsCalendar() {
  const [selectedYear, setSelectedYear] = useState(2025)
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedType, setSelectedType] = useState<string>("all")

  const filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date)
    const matchesYear = eventDate.getFullYear() === selectedYear
    const matchesMonth = eventDate.getMonth() === selectedMonth
    const matchesType = selectedType === "all" || event.type === selectedType

    return matchesYear && matchesMonth && matchesType
  })

  const nextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0)
      setSelectedYear(selectedYear + 1)
    } else {
      setSelectedMonth(selectedMonth + 1)
    }
  }

  const prevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11)
      setSelectedYear(selectedYear - 1)
    } else {
      setSelectedMonth(selectedMonth - 1)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" onClick={prevMonth}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h3 className="font-montserrat font-bold text-xl text-foreground min-w-[200px] text-center">
            {months[selectedMonth]} {selectedYear}
          </h3>
          <Button variant="outline" size="sm" onClick={nextMonth}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant={selectedYear === 2024 ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedYear(2024)}
          >
            2024
          </Button>
          <Button
            variant={selectedYear === 2025 ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedYear(2025)}
          >
            2025
          </Button>
        </div>
      </div>

      {/* Event Type Filters */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedType === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedType("all")}
        >
          Todos os Eventos
        </Button>
        {Object.entries(eventTypes).map(([type, config]) => {
          const Icon = config.icon
          return (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType(type)}
              className="flex items-center space-x-1"
            >
              <Icon className="w-3 h-3" />
              <span>{config.label}</span>
            </Button>
          )
        })}
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {filteredEvents.length === 0 ? (
          <Card className="p-8 text-center">
            <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">Nenhum evento encontrado</h3>
            <p className="text-muted-foreground">
              Não há eventos programados para {months[selectedMonth]} de {selectedYear}.
            </p>
          </Card>
        ) : (
          filteredEvents.map((event) => {
            const eventType = eventTypes[event.type]
            const Icon = eventType.icon
            const eventDate = new Date(event.date)

            return (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div
                        className={`w-10 h-10 ${eventType.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="font-montserrat font-bold text-lg">{event.title}</CardTitle>
                        <CardDescription className="flex items-center space-x-4 mt-1">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{eventDate.toLocaleDateString("pt-BR")}</span>
                          </span>
                          {event.time && (
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </span>
                          )}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className={statusColors[event.status]}>
                      {event.status === "confirmado"
                        ? "Confirmado"
                        : event.status === "a-confirmar"
                          ? "A Confirmar"
                          : "Encerrado"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>
                        {event.location} - {event.circuit}
                      </span>
                    </div>
                    {event.description && <p className="text-sm text-muted-foreground mt-2">{event.description}</p>}
                  </div>
                </CardContent>
              </Card>
            )
          })
        )}
      </div>
    </div>
  )
}
