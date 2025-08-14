"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Shield, Trophy, Clock, Users } from "lucide-react"
import VisitBookingForm from "@/components/visit-booking-form"
import EventsCalendar from "@/components/events-calendar"

export default function AutodromoLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-montserrat font-black text-xl text-foreground">AISCS</h1>
                <p className="text-xs text-muted-foreground">Autódromo Internacional de Santa Cruz do Sul</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#eventos" className="text-foreground hover:text-primary transition-colors">
                Eventos
              </a>
              <a href="#seguranca" className="text-foreground hover:text-primary transition-colors">
                Segurança
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/aerial-view.jpeg"
            alt="Vista aérea do Autódromo Internacional de Santa Cruz do Sul"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-white border-primary/30">Certificado pela FIA</Badge>
            <h1 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Experimente a emoção do automobilismo
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Um dos mais modernos e seguros autódromos do Brasil, palco de grandes competições como Stock Car, Fórmula
              3 e Fórmula Truck.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Saiba mais sobre nossos eventos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 bg-transparent"
              >
                Reserve sua visita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-black text-primary mb-2">2005</div>
              <div className="text-muted-foreground font-medium">Inauguração</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-black text-primary mb-2">3.531m</div>
              <div className="text-muted-foreground font-medium">Extensão da pista</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-black text-primary mb-2">14</div>
              <div className="text-muted-foreground font-medium">Curvas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-black text-primary mb-2">FIA</div>
              <div className="text-muted-foreground font-medium">Certificação</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-black text-3xl md:text-5xl text-foreground mb-6">
                Sobre o Autódromo
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Localizado no km 102 da rodovia RS 471, o Autódromo Internacional de Santa Cruz do Sul é reconhecido
                como um dos mais modernos e seguros do Brasil.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="/images/track-layout.png"
                  alt="Layout da pista com 14 curvas numeradas"
                  className="rounded-lg shadow-2xl w-full bg-white p-4"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">Localização Estratégica</h3>
                    <p className="text-muted-foreground">
                      Situado no km 102 da rodovia RS 471, oferece fácil acesso e infraestrutura completa para grandes
                      eventos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">Segurança FIA</h3>
                    <p className="text-muted-foreground">
                      Certificado pela Federação Internacional de Automobilismo, garantindo os mais altos padrões de
                      segurança.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">Pista Técnica</h3>
                    <p className="text-muted-foreground">
                      3.530,7 metros de extensão com 14 curvas desafiadoras, sendo 7 à direita e 7 à esquerda, de alta,
                      média e baixa velocidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative">
                <img
                  src="/images/stock-car-race.png"
                  alt="Corrida de Stock Car no Autódromo"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
                  Stock Car em ação
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/pit-lane-boxes.png"
                  alt="Pit lane e boxes modernos"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
                  Infraestrutura moderna
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/moto-gp-1000.png"
                  alt="Vista da pista com arquibancadas"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
                  Emoção garantida
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="eventos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-black text-3xl md:text-5xl text-foreground mb-6">
                Eventos em Destaque
              </h2>
              <p className="text-xl text-muted-foreground">
                Palco das principais competições do automobilismo e motociclismo brasileiro
              </p>
            </div>

            <div className="mb-12">
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src="/images/formula-truck-pit.jpeg"
                      alt="Caminhões da Fórmula Truck no pit lane"
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <Trophy className="w-8 h-8 text-primary mr-3" />
                      <h3 className="font-montserrat font-black text-2xl text-foreground">Fórmula Truck</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Uma das categorias mais emocionantes do automobilismo brasileiro, com caminhões de corrida que
                      chegam a mais de 1.200 cavalos de potência. O autódromo recebe regularmente etapas do campeonato
                      nacional.
                    </p>
                    <Badge className="bg-primary/10 text-primary">Próxima etapa em breve</Badge>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative h-32">
                  <img
                    src="/images/stock-car-curve.png"
                    alt="Stock Car em curva"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold">Stock Car</CardTitle>
                  <CardDescription>A principal categoria do automobilismo brasileiro</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Etapa do campeonato nacional com os melhores pilotos do país disputando em alta velocidade.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative h-32">
                  <img
                    src="/images/formula-3.png"
                    alt="Formula 3"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold">Fórmula 3</CardTitle>
                  <CardDescription>Categoria de formação de novos talentos</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Competição que revela os futuros campeões do automobilismo nacional e internacional.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative h-32">
                  <img
                    src="/images/moto-gp-1000.png"
                    alt="Moto GP 1000"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold">Motociclismo</CardTitle>
                  <CardDescription>Campeonato Brasileiro de Velocidade</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    As principais categorias do motociclismo nacional em disputas de alta velocidade e técnica.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-chart-4/10 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-chart-4" />
                  </div>
                  <CardTitle className="font-montserrat font-bold">Eventos Corporativos</CardTitle>
                  <CardDescription>Experiências exclusivas para empresas</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track days, lançamentos de produtos e eventos corporativos em um ambiente único.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-chart-5/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-chart-5" />
                  </div>
                  <CardTitle className="font-montserrat font-bold">Visitas Guiadas</CardTitle>
                  <CardDescription>Conheça os bastidores do autódromo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tours educativos e experiências imersivas para grupos e escolas interessadas no automobilismo.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                
                <CardHeader>
                  <div className="w-12 h-12 bg-chart-5/10 rounded-lg flex items-center justify-center mb-4">
                    <Trophy className="w-6 h-6 text-chart-5" />
                  </div>
                  <CardTitle className="font-montserrat font-bold">Experiência Completa</CardTitle>
                  <CardDescription>Viva a emoção das corridas</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Arquibancadas com excelente visibilidade e infraestrutura completa para uma experiência
                    inesquecível.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="seguranca" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-black text-3xl md:text-5xl text-foreground mb-6">
                Segurança em Primeiro Lugar
              </h2>
              <p className="text-xl text-muted-foreground">
                Certificações e medidas que garantem a segurança de pilotos e espectadores
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-foreground mb-4">Certificação FIA</h3>
                <p className="text-muted-foreground">
                  Reconhecido pela Federação Internacional de Automobilismo como um dos mais seguros do Brasil.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-foreground mb-4">Equipe Especializada</h3>
                <p className="text-muted-foreground">
                  Profissionais treinados e equipamentos de última geração para atendimento de emergência.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-foreground mb-4">Infraestrutura Moderna</h3>
                <p className="text-muted-foreground">
                  Barreiras de segurança, zonas de escape e sistemas de comunicação de última geração.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Events Calendar Section */}
      <section id="calendario" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-black text-3xl md:text-5xl text-foreground mb-6">
                Calendário de Eventos
              </h2>
              <p className="text-xl text-muted-foreground">
                Acompanhe todos os eventos programados para o Autódromo Internacional de Santa Cruz do Sul
              </p>
            </div>
            <EventsCalendar />
          </div>
        </div>
      </section>

      {/* Visit Booking Section */}
      <section id="agendamento" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-black text-3xl md:text-5xl text-foreground mb-6">
                Agende sua Visita
              </h2>
              <p className="text-xl text-muted-foreground">
                Conheça de perto um dos autódromos mais modernos do Brasil. Preencha o formulário e entraremos em
                contato via WhatsApp.
              </p>
            </div>
            <VisitBookingForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-black text-3xl md:text-5xl text-primary-foreground mb-6">
              Viva a emoção do automobilismo
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Seja parte da história do automobilismo brasileiro. Agende sua visita ou participe de nossos eventos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                onClick={() => document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth" })}
              >
                Agendar Visita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 bg-transparent"
                onClick={() => document.querySelector('[id*="calendario"]')?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Calendário de Eventos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-16 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-black text-lg text-foreground">AISCS</h3>
                    <p className="text-sm text-muted-foreground">Autódromo Internacional de Santa Cruz do Sul</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Um dos mais modernos e seguros autódromos do Brasil, certificado pela FIA.
                </p>
              </div>

              <div>
                <h4 className="font-montserrat font-bold text-foreground mb-4">Contato</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      km 102 da rodovia RS 471
                      <br />
                      Santa Cruz do Sul - RS
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-montserrat font-bold text-foreground mb-4">Links Rápidos</h4>
                <div className="space-y-2">
                  <a href="#sobre" className="block text-muted-foreground hover:text-primary transition-colors">
                    Sobre
                  </a>
                  <a href="#eventos" className="block text-muted-foreground hover:text-primary transition-colors">
                    Eventos
                  </a>
                  <a href="#seguranca" className="block text-muted-foreground hover:text-primary transition-colors">
                    Segurança
                  </a>
                  <a href="#contato" className="block text-muted-foreground hover:text-primary transition-colors">
                    Contato
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-border mt-12 pt-8 text-center">
              <p className="text-muted-foreground">
                © 2025 Autódromo Internacional de Santa Cruz do Sul. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
