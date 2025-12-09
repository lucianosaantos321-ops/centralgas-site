export default function About() {
  return (
    <section style={{ padding: "2rem 1rem", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ color: "#E44F2A", textAlign: "center" }}>Sobre a Central Gás</h1>

      <p style={{ marginTop: "1.5rem", lineHeight: "1.6", textAlign: "justify" }}>
        A <strong>Central Gás</strong> é uma empresa brasileira especializada em entrega de gás
        domiciliar e comercial, atuando com rapidez, segurança e atendimento humanizado.
        Nossa missão é garantir que você nunca fique sem gás, oferecendo agilidade e confiança
        em cada pedido.
      </p>

      <p style={{ marginTop: "1rem", lineHeight: "1.6", textAlign: "justify" }}>
        Com sede em Brasília - DF, contamos com uma frota moderna e equipe treinada para
        realizar entregas em tempo recorde, seguindo todas as normas de segurança.
      </p>

      <h2 style={{ color: "#E44F2A", marginTop: "2rem" }}>Missão, Visão e Valores</h2>
      <ul style={{ lineHeight: "1.6" }}>
        <li><strong>Missão:</strong> Entregar gás com segurança e pontualidade.</li>
        <li><strong>Visão:</strong> Ser referência em atendimento e tecnologia no setor de gás.</li>
        <li><strong>Valores:</strong> Responsabilidade, rapidez, segurança e respeito ao cliente.</li>
      </ul>

      <h2 style={{ color: "#E44F2A", marginTop: "2rem" }}>Horário de Funcionamento</h2>
      <p>Segunda a Sábado: 7h às 22h</p>
      <p>Domingos e feriados: 8h às 18h</p>

      <h2 style={{ color: "#E44F2A", marginTop: "2rem" }}>Contato</h2>
      <p>
        Telefone / WhatsApp:{" "}
        <a href="https://wa.me/5561920052740" style={{ color: "#F7A212" }}>
          +55 61 92005-2740
        </a>
      </p>
      <p>Email: atendimento@centralgas.com.br</p>
      <p>Endereço: Asa Norte, Brasília - DF</p>
    </section>
  );
}
