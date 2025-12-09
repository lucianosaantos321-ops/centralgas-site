export default function Products() {
  return (
    <section style={{ padding: '2rem 1rem', textAlign: 'center' }}>
      <h1 style={{ color: '#E44F2A', marginBottom: '1rem' }}>Nossos Produtos</h1>
      <p style={{ color: '#101010', marginBottom: '2rem' }}>
        Escolha o tipo de botijão ou acessório que você precisa.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        {/* Produto 1 */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            width: '250px',
            padding: '1rem',
          }}
        >
          <img
            src="/assets/product-p13.jpg"
            alt="Botijão P13"
            style={{ width: '100%', borderRadius: '6px' }}
          />
          <h3>Botijão P13</h3>
          <p>Ideal para uso doméstico.</p>
          <p><strong>R$ 120,00</strong></p>
          <button className="primary">Pedir</button>
        </div>

        {/* Produto 2 */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            width: '250px',
            padding: '1rem',
          }}
        >
          <img
            src="/assets/product-p45.jpg"
            alt="Botijão P45"
            style={{ width: '100%', borderRadius: '6px' }}
          />
          <h3>Botijão P45</h3>
          <p>Perfeito para uso comercial.</p>
          <p><strong>R$ 480,00</strong></p>
          <button className="primary">Pedir</button>
        </div>

        {/* Produto 3 */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            width: '250px',
            padding: '1rem',
          }}
        >
          <img
            src="/assets/registro-mangueira.jpg"
            alt="Registro + Mangueira"
            style={{ width: '100%', borderRadius: '6px' }}
          />
          <h3>Registro + Mangueira</h3>
          <p>Kit completo para instalação.</p>
          <p><strong>R$ 45,00</strong></p>
          <button className="primary">Pedir</button>
        </div>
      </div>
    </section>
  );
}
