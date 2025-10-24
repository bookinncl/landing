"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  CalendarRange,
  CreditCard,
  Building2,
  MessagesSquare,
  Workflow,
  ShieldCheck,
  Globe2,
  Hotel,
} from "lucide-react";

const features = [
  { icon: CalendarRange, title: "Disponibilidad en tiempo real", desc: "Consulta por fechas y tipo de habitación sin fricción." },
  { icon: CreditCard,   title: "Pago directo al hotel",         desc: "Stripe/Transbank conectados a tu cuenta, sin terceros." },
  { icon: Building2,    title: "Gestión fácil",                  desc: "Opera desde cualquier dispositivo, sin planillas." },
  { icon: MessagesSquare,title: "WhatsApp + Email",             desc: "Confirmaciones y recordatorios automatizados." },
  { icon: Workflow,     title: "Automatizaciones",               desc: "Check-in/out, bloqueos y conciliación en minutos." },
  { icon: ShieldCheck,  title: "Sin sobreventa",                  desc: "Control por noche y auditoría del inventario." }
];

const plans = [
  { name: "Starter",     price: "US$49", period: "/mes por hotel", bullets: ["Motor de disponibilidad", "Checkout alojado", "Soporte por email"], cta: "Empezar",  popular: false },
  { name: "Pro",         price: "US$99", period: "/mes por hotel", bullets: ["Pagos locales", "WhatsApp + automatizaciones", "Reportes avanzados"], cta: "Pedir demo", popular: true },
  { name: "Enterprise",  price: "A medida", period: "",           bullets: ["Integraciones PMS/OTA", "SLA y soporte dedicado", "Multi-propiedad / SSO"], cta: "Hablemos", popular: false }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo (usa /public/images/logo.png) */}
            <Image
              src="/images/logo.png"
              alt="Bookinn logo"
              width={24}
              height={24}
              className="rounded"
              priority
            />
            <span className="font-semibold">Bookinn</span>
            <span className="ml-2 rounded bg-slate-100 px-2 py-0.5 text-xs">Beta</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Características</a>
            <a href="#pricing" className="hover:text-slate-900">Precios</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>
          <a href="#contacto" className="px-3 py-1.5 rounded bg-slate-900 text-white text-sm">Contactar</a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{duration:0.45}}>
          <span className="inline-block mb-4 rounded bg-slate-900 text-white text-xs px-2 py-1">
            Reservas directas para hoteles boutique
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Más reservas directas, menos comisiones.
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Unimos tu web con un motor de disponibilidad simple y un checkout sin fricción. Pagos directos al hotel.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contacto" className="px-4 py-3 rounded bg-slate-900 text-white text-sm">Solicitar demo</a>
            <a href="#features" className="px-4 py-3 rounded border border-slate-300 text-sm">Ver cómo funciona</a>
          </div>
          <p className="mt-4 text-sm text-slate-500 flex items-center gap-4">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Pagos seguros</span>
            <span className="flex items-center gap-2"><Globe2 className="w-4 h-4"/> Multimoneda</span>
          </p>
        </motion.div>

        {/* Hero visual + tarjeta demo superpuesta */}
        <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
          <div className="relative">
            {/* Imagen hero (usa /public/images/hero.png o .jpg) */}
            <Image
              src="/images/hero.png"
              alt="Vista del motor de reservas Bookinn"
              width={960}
              height={720}
              className="rounded-2xl border border-slate-200 shadow-sm w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, 560px"
            />

            {/* Demo card */}
            <div className="absolute -bottom-5 right-4 left-4 md:right-6 md:w-[380px] md:left-auto">
              <div className="rounded-2xl border border-slate-200 shadow-md p-6 bg-white/95 backdrop-blur">
                <div className="text-sm font-medium mb-4 flex items-center gap-2">
                  <CalendarRange className="w-5 h-5"/> Buscador de disponibilidad
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input className="border rounded px-3 py-2 text-sm" placeholder="Check-in (YYYY-MM-DD)" />
                  <input className="border rounded px-3 py-2 text-sm" placeholder="Check-out (YYYY-MM-DD)" />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <input className="border rounded px-3 py-2 text-sm" placeholder="Adultos" />
                  <input className="border rounded px-3 py-2 text-sm" placeholder="Niños" />
                </div>
                <button className="mt-4 w-full px-4 py-2 rounded bg-slate-900 text-white text-sm">Consultar</button>
                <div className="text-xs text-slate-500 mt-2">*Demo visual (sin conexión).</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold mb-8">Características</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
                <f.icon className="w-6 h-6" />
              </div>
              <div className="text-base font-medium">{f.title}</div>
              <div className="text-slate-600 text-sm leading-relaxed mt-1.5">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8">Precios simples</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-2xl border ${p.popular ? 'border-slate-900' : 'border-slate-200'} p-6`}>
              <div className="flex items-center justify-between">
                <div className="text-base font-medium">{p.name}</div>
                {p.popular && <span className="text-xs rounded bg-slate-900 text-white px-2 py-0.5">Popular</span>}
              </div>
              <div className="mt-3 text-3xl font-semibold">
                {p.price} <span className="text-base font-normal text-slate-500">{p.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> {b}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className="mt-6 block text-center px-4 py-2 rounded bg-slate-900 text-white text-sm">{p.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8">Preguntas frecuentes</h2>
        <div className="grid md:grid-cols-2 gap-6 text-slate-700">
          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="text-base font-medium">¿Se integra con mi web actual?</div>
            <div className="text-sm mt-1.5">Sí: embebido en Webflow/WordPress o como checkout externo.</div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="text-base font-medium">¿Qué pasarelas soportan?</div>
            <div className="text-sm mt-1.5">Stripe, Transbank y pasarelas locales. Los fondos van al hotel.</div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="text-base font-medium">¿Puedo seguir usando mi PMS/Channel Manager?</div>
            <div className="text-sm mt-1.5">Sí. Integramos PMS/OTA o sincronizamos por iCal.</div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="text-base font-medium">¿Cómo evitan sobreventas?</div>
            <div className="text-sm mt-1.5">Control por noche + auditoría y alertas en tiempo real.</div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-3">Conversemos</h2>
            <p className="text-slate-600 mb-6">Agenda una demo y te mostramos Bookinn con tu inventario.</p>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-center gap-2"><MessagesSquare className="w-5 h-5"/> WhatsApp: +56 9 0000 0000</div>
              <div className="flex items-center gap-2"><Globe2 className="w-5 h-5"/> Email: hola@bookinn.cl</div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="text-base font-medium mb-4">Solicitar demo</div>
            <div className="grid grid-cols-2 gap-3">
              <input className="border rounded px-3 py-2 text-sm col-span-2" placeholder="Nombre del hotel" />
              <input className="border rounded px-3 py-2 text-sm" placeholder="Nombre" />
              <input className="border rounded px-3 py-2 text-sm" placeholder="Apellido" />
              <input className="border rounded px-3 py-2 text-sm col-span-2" placeholder="Email" />
              <input className="border rounded px-3 py-2 text-sm col-span-2" placeholder="Teléfono" />
              <textarea className="border rounded px-3 py-2 text-sm col-span-2" placeholder="Cuéntanos sobre tu web, PMS y OTAs actuales" rows={4} />
            </div>
            <button className="mt-4 w-full px-4 py-2 rounded bg-slate-900 text-white text-sm">Enviar</button>
            <p className="text-xs text-slate-500 mt-2">Te contactamos en 1–2 días hábiles.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2"><Hotel className="w-4 h-4"/> Bookinn © {new Date().getFullYear()}</div>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-slate-900">Características</a>
            <a href="#pricing" className="hover:text-slate-900">Precios</a>
            <a href="#contacto" className="hover:text-slate-900">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
