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
} from "lucide-react";

const features = [
  { icon: CalendarRange, title: "Disponibilidad en tiempo real", desc: "Consulta por fechas y tipo de habitación sin fricción." },
  { icon: CreditCard, title: "Pago directo al hotel", desc: "Stripe/Transbank conectados a tu cuenta, sin terceros." },
  { icon: Building2, title: "Gestión fácil", desc: "Opera desde cualquier dispositivo, sin planillas." },
  { icon: MessagesSquare, title: "WhatsApp + Email", desc: "Confirmaciones y recordatorios automatizados." },
  { icon: Workflow, title: "Automatizaciones", desc: "Check-in/out, bloqueos y conciliación en minutos." },
  { icon: ShieldCheck, title: "Sin sobreventa", desc: "Control por noche y auditoría del inventario." },
];

const plans = [
  { name: "Starter", price: "US$49", period: "/mes por hotel", bullets: ["Motor de disponibilidad", "Checkout alojado", "Soporte por email"], cta: "Empezar", popular: false },
  { name: "Pro", price: "US$99", period: "/mes por hotel", bullets: ["Pagos locales", "WhatsApp + automatizaciones", "Reportes avanzados"], cta: "Pedir demo", popular: true },
  { name: "Enterprise", price: "A medida", period: "", bullets: ["Integraciones PMS/OTA", "SLA y soporte dedicado", "Multi-propiedad / SSO"], cta: "Hablemos", popular: false },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* SOLO LOGO, GRANDE */}
            <a href="/" className="inline-flex items-center">
              <Image
                src="/images/logo.png"  // asegúrate que exista y sin padding enorme
                alt="Bookinn"
                width={180}
                height={48}
                className="h-10 w-auto" // 40px de alto visible
                priority
              />
            </a>
            <span className="rounded bg-slate-100 px-2 py-0.5 text-xs">Beta</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Características</a>
            <a href="#pricing" className="hover:text-slate-900">Precios</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>
          <a href="#contacto" className="px-3 py-1.5 rounded bg-slate-900 text-white text-sm">Contactar</a>
        </div>
      </header>

      {/* HERO FULL-WIDTH */}
      <section className="relative w-full h-[80vh] overflow-hidden flex items-center">
        {/* Imagen de fondo a pantalla */}
        <Image
          src="/images/hero.jpg"   // o /images/hero.png si es PNG
          alt="Hero Bookinn"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Si quieres un leve oscurecido para contraste, descomenta: */}
        {/* <div className="absolute inset-0 bg-black/10" /> */}

        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <span className="inline-block mb-4 rounded bg-slate-900 text-white text-xs px-2 py-1">
                Reservas directas para hoteles boutique
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white drop-shadow">
                Más reservas directas, menos comisiones.
              </h1>
              <p className="mt-4 text-white/90 text-lg leading-relaxed drop-shadow">
                Unimos tu web con un motor de disponibilidad simple y un checkout sin fricción. Pagos directos al hotel.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#contacto" className="px-4 py-3 rounded bg-white text-slate-900 text-sm">Solicitar demo</a>
                <a href="#features" className="px-4 py-3 rounded border border-white/60 text-white text-sm bg-white/10 hover:bg-white/20">
                  Ver cómo funciona
                </a>
              </div>
              <p className="mt-4 text-sm text-white/90 flex items-center gap-4">
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Pagos seguros</span>
                <span className="flex items-center gap-2"><Globe2 className="w-4 h-4" /> Multimoneda</span>
              </p>
            </motion.div>

            {/* Formulario: sobre la imagen, sin taparla */}
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="md:justify-self-end">
              <div className="rounded-2xl border border-white/40 shadow-xl p-6 bg-white/95 backdrop-blur max-w-md">
                <div className="text-sm font-medium mb-4 flex items-center gap-2">
                  <CalendarRange className="w-5 h-5" /> Buscador de disponibilidad
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8">Características</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-shadow bg-white">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
                <f.icon className="w-6 h-6" />
              </div>
              <div className="text-base font-medium">{f.title}</div>
              <div className="text-slate-600 text-sm leading-relaxed mt-1.5">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing, FAQ, Contacto, Footer ... (igual que antes) */}
    </div>
  );
}
