export default function Home() {
  return (
    <section style={{ textAlign: 'center', padding: '2rem 1rem' }}>
      <h1 style={{ color: '#E44F2A', fontSize: '2rem', marginBottom: '1rem' }}>
        Entrega de Gás Rápida e Segura 🚚
      </h1>
      <p style={{ color: '#101010', fontSize: '1.1rem', marginBottom: '2rem' }}>
        Peça seu botijão de gás em poucos cliques — Central Gás entrega pra você!
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a href="/order">
          <button className="primary">Pedir Gás Agora</button>
        </a>
        <a href="/order">
          <button className="secondary">Agendar Entrega</button>
        </a>
      </div>

      <img
        src="/assets/hero.png"
        alt="Botijão de gás Central Gás"
        style={{
          width: '100%',
          maxWidth: '400px',
          marginTop: '2rem',
          borderRadius: '8px',
        }}
      />

      <h2 style={{ marginTop: '3rem', color: '#E44F2A' }}>Como funciona?</h2>
      <ol style={{ textAlign: 'left', maxWidth: '400px', margin: '1rem auto' }}>
        <li><strong>1. Peça:</strong> Escolha o produto e envie seu pedido.</li>
        <li><strong>2. Entrega:</strong> Nossa equipe leva até você rapidamente.</li>
        <li><strong>3. Pagamento:</strong> Pague com PIX, cartão ou dinheiro.</li>
      </ol>

      <h2 style={{ marginTop: '3rem', color: '#E44F2A' }}>Vantagens da Central Gás</h2>
      <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '1rem auto' }}>
        <li>⚡ Entrega super rápida</li>
        <li>💳 Pagamento seguro (PIX, cartão, dinheiro)</li>
        <li>📞 Suporte e acompanhamento via WhatsApp</li>
      </ul>

      <a
        href="https://wa.me/5561920052740"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: '#fff',
          padding: '15px',
          borderRadius: '50%',
          textDecoration: 'none',
          fontSize: '24px',
        }}
      >
        💬
      </a>
    </section>
  );
}
