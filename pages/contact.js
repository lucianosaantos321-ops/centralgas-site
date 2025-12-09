export default function Contact() {
  return (
    <section style={{ padding: "2rem 1rem", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ color: "#E44F2A", textAlign: "center" }}>Fale Conosco</h1>

      <p style={{ textAlign: "center", marginTop: "1rem", marginBottom: "2rem" }}>
        Entre em contato com a <strong>Central Gás</strong> pelo formulário abaixo
        ou fale diretamente pelo WhatsApp.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("✅ Mensagem enviada com sucesso! Em breve entraremos em contato.");
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <label>
          Nome:
          <input type="text" required style={{ width: "100%", padding: "10px" }} />
        </label>

        <label>
          Telefone:
          <input type="tel" required style={{ width: "100%", padding: "10px" }} />
        </label>

        <label>
          E-mail:
          <input type="email" required style={{ width: "100%", padding: "10px" }} />
        </label>

        <label>
          Mensagem:
          <textarea required rows="4" style={{ width: "100%", padding: "10px" }} />
        </label>

        <button className="primary" type="submit">
          Enviar Mensagem
        </button>
      </form>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <a
          href="https://wa.me/5561920052740"
          target="_blank"
          rel="noopener noreferrer"
          className="secondary"
          style={{ padding: "0.8rem 1.5rem", display: "inline-block" }}
        >
          💬 Falar no WhatsApp
        </a>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2 style={{ color: "#E44F2A", textAlign: "center" }}>Nosso Local</h2>
        <iframe
          title="Localização Central Gás"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.60172380793!2d-46.7001846!3d-23.5821319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce55c699b8d1f5%3A0x7a1d5f0ff3a1d3d7!2sPosto%20de%20G%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
