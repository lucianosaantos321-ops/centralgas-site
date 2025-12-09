import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: '1', padding: '1rem' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
