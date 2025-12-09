export default function Header() {
  return (
    <header style={{
      padding: '1rem',
      backgroundColor: '#E44F2A',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="/assets/logo.svg" alt="Logo Central Gás" height="40" />
        <h1 style={{ margin: 0, fontSize: '1.25rem' }}>Central Gás</h1>
      </div>
      <nav>
        <a href="/" style={{ color: '#fff', marginRight: '15px' }}>Início</a>
        <a href="/products" style={{ color: '#fff', marginRight: '15px' }}>Produtos</a>
        <a href="/contact" style={{ color: '#fff' }}>Contato</a>
      </nav>
    </header>
  );
}
