"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CalendarDays, CreditCard, Building2, MessageSquare, Workflow, Hotel } from "lucide-react";

export default function Page(){
  const features = [
    { icon: <CalendarDays className="w-6 h-6"/>, title: "Disponibilidad en tiempo real", desc: "Consulta por fechas y tipo de habitación sin fricción." },
    { icon: <CreditCard className="w-6 h-6"/>, title: "Pago directo al hotel", desc: "Stripe/Transbank conectados a tu cuenta." },
    { icon: <Workflow className="w-6 h-6"/>, title: "Automatizaciones", desc: "Check-in/out, bloqueos y conciliación." },
    { icon: <MessageSquare className="w-6 h-6"/>, title: "WhatsApp + Email", desc: "Confirmaciones y recordatorios automáticos." },
    { icon: <Building2 className="w-6 h-6"/>, title: "Gestión fácil desde cualquier dispositivo", desc: "Panel web responsive, sin instalaciones." },
    { icon: <ShieldCheck className="w-6 h-6"/>, title: "Sin sobreventa", desc: "Control por noche y auditoría del inventario." },
  ];

  const plans = [
    { name: "Starter", price: "US$49", period: "/mes por hotel", bullets: ["Motor de disponibilidad", "Checkout alojado", "Soporte por email"], cta: "Empezar", popular: false },
    { name: "Pro", price: "US$99", period: "/mes por hotel", bullets: ["Pagos locales", "WhatsApp + automatizaciones", "Reportes avanzados"], cta: "Pedir demo", popular: true },
    { name: "Enterprise", price: "A medida", period: "", bullets: ["Multi-propiedad + SSO", "Integraciones PMS/OTA", "SLA dedicado"], cta: "Hablemos", popular: false },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="container h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Hotel className="w-5 h-5"/><span className="font-semibold">Bookinn</span>
            <span className="badge ml-2">Beta</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Características</a>
            <a href="#pricing" className="hover:text-slate-900">Precios</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>
          <a href="#contacto" className="btn-primary">Contactar</a>
        </div>
      </header>

      {/* Hero */}
      <section className="container py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{duration:0.45}}>
          <span className="badge mb-4">Reservas directas para hoteles boutique</span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Más reservas directas, menos comisiones.</h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Unimos tu web con un motor de disponibilidad simple y un checkout sin fricción. Pagos directos al hotel.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contacto" className="btn-primary">Solicitar demo</a>
            <a href="#features" className="btn-outline">Ver cómo funciona</a>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
          <div className="card p-5">
            <div className="text-sm font-medium mb-3 flex items-center gap-2">
              <CalendarDays className="w-5 h-5"/> Buscador de disponibilidad
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input className="border rounded-lg px-3 py-2" placeholder="Check-in (YYYY-MM-DD)"/>
              <input className="border rounded-lg px-3 py-2" placeholder="Check-out (YYYY-MM-DD)"/>
              <input className="border rounded-lg px-3 py-2" placeholder="Adultos"/>
              <input className="border rounded-lg px-3 py-2" placeholder="Niños"/>
            </div>
            <button className="btn-primary w-full mt-3">Consultar</button>
            <div className="text-xs text-slate-500 mt-2">*Demo visual (sin conexión).</div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="container py-16">
        <h2 className="text-3xl font-semibold mb-8">Características</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card p-5 hover:shadow transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-2">{f.icon}</div>
              <div className="text-base font-medium">{f.title}</div>
              <div className="text-slate-600 text-sm leading-relaxed mt-1">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container py-16">
        <h2 className="text-3xl font-semibold mb-8">Precios simples</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`card p-5 ${p.popular ? 'border-slate-900' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="text-base font-medium">{p.name}</div>
                {p.popular && <span className="badge">Popular</span>}
              </div>
              <div className="mt-2 text-3xl font-semibold">{p.price} <span className="text-base font-normal text-slate-500">{p.period}</span></div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.bullets.map((b, j) => <li key={j} className="flex gap-2 items-center">• {b}</li>)}
              </ul>
              <a className="btn-primary w-full mt-6 text-center" href="#contacto">{p.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container py-16">
        <h2 className="text-3xl font-semibold mb-8">Preguntas frecuentes</h2>
        <div className="grid md:grid-cols-2 gap-6 text-slate-700">
          <div className="card p-5"><div className="text-base font-semibold">¿Se integra con mi web actual?</div><p className="text-sm mt-1">Sí: embebido en Webflow/WordPress o como checkout externo.</p></div>
          <div className="card p-5"><div className="text-base font-semibold">¿Qué pasarelas soportan?</div><p className="text-sm mt-1">Stripe, Transbank y pasarelas locales. Los fondos van al hotel.</p></div>
          <div className="card p-5"><div className="text-base font-semibold">¿Puedo seguir usando mi PMS/Channel Manager?</div><p className="text-sm mt-1">Sí. Integramos PMS/OTA o sincronizamos por iCal.</p></div>
          <div className="card p-5"><div className="text-base font-semibold">¿Cómo evitan sobreventas?</div><p className="text-sm mt-1">Control por noche + auditoría y alertas en tiempo real.</p></div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="container py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-3">Conversemos</h2>
            <p className="text-slate-600 mb-6">Agenda una demo y te mostramos Bookinn con tu inventario.</p>
            <div className="space-y-2 text-sm text-slate-700">
              <div>WhatsApp: +56 9 0000 0000</div>
              <div>Email: hola@bookinn.cl</div>
            </div>
          </div>
          <div className="card p-5 space-y-3">
            <div className="text-base font-medium">Solicitar demo</div>
            <div className="grid grid-cols-2 gap-3">
              <input className="border rounded-lg px-3 py-2" placeholder="Nombre"/>
              <input className="border rounded-lg px-3 py-2" placeholder="Apellido"/>
            </div>
            <input className="border rounded-lg px-3 py-2 w-full" placeholder="Email"/>
            <input className="border rounded-lg px-3 py-2 w-full" placeholder="Teléfono"/>
            <textarea className="border rounded-lg px-3 py-2 w-full" placeholder="Cuéntanos sobre tu web, PMS y OTAs actuales"/>
            <button className="btn-primary w-full">Enviar</button>
            <p className="text-xs text-slate-500">Te contactamos en 1–2 días hábiles.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="container py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
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
