import { useState, useEffect } from "react";

export default function Tracking() {
  const [status, setStatus] = useState("aguardando_central");

  useEffect(() => {
    const sequence = [
      "aguardando_central",
      "buscando_entregador",
      "aceito_entregador",
      "em_rota",
      "proximo",
      "entregue",
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < sequence.length - 1) {
        i++;
        setStatus(sequence[i]);
      } else {
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const statusText = {
    aguardando_central: "⏳ Aguardando confirmação da Central...",
    buscando_entregador: "🚗 Buscando entregador disponível...",
    aceito_entregador: "✅ Entregador aceitou o pedido!",
    em_rota: "🛵 Pedido a caminho!",
    proximo: "📍 O entregador está chegando!",
    entregue: "🎉 Pedido entregue com sucesso!",
  };

  return (
    <section style={{ textAlign: "center", padding: "2rem 1rem" }}>
      <h1 style={{ color: "#E44F2A" }}>Rastreamento do Pedido</h1>
      <p style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
        {statusText[status]}
      </p>

      <div style={{ marginTop: "2rem" }}>
        <iframe
          title="Mapa da entrega"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.60172380793!2d-46.7001846!3d-23.5821319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce55c699b8d1f5%3A0x7a1d5f0ff3a1d3d7!2sPosto%20de%20G%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <button
          className="primary"
          onClick={() => window.open("tel:+5561920052740")}
          style={{ marginRight: "10px" }}
        >
          📞 Ligar para o entregador
        </button>
        <button
          className="secondary"
          onClick={() =>
            window.open("https://wa.me/5561920052740?text=Olá! Quero falar sobre meu pedido.")
          }
        >
          💬 WhatsApp Entregador
        </button>
      </div>
    </section>
  );
}
