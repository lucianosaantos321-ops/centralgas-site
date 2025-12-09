export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#B2471C',
      color: '#fff',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <p>© {new Date().getFullYear()} Central Gás — Supabase + Firebase architecture.</p>
      <p>
        Telefone / WhatsApp:{" "}
        <a href="https://wa.me/5561920052740" style={{ color: '#F7A212' }}>
          +55 61 92005-2740
        </a>
      </p>
      <small>Desenvolvido para Central Gás</small>
    </footer>
  );
}
