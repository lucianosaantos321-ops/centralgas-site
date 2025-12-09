export default function Admin() {
  return (
    <section style={{ textAlign: "center", padding: "2rem 1rem" }}>
      <h1 style={{ color: "#E44F2A" }}>Área Administrativa</h1>
      <p style={{ marginBottom: "2rem" }}>
        Esta página é restrita. Insira suas credenciais para acessar o painel.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("⚠️ Login de exemplo — conecte ao Supabase para autenticação real.");
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          margin: "auto",
          gap: "1rem",
        }}
      >
        <label>
          CPF:
          <input
            type="text"
            placeholder="000.000.000-00"
            required
            style={{ width: "100%", padding: "10px" }}
          />
        </label>

        <label>
          Senha:
          <input
            type="password"
            placeholder="Digite sua senha"
            required
            style={{ width: "100%", padding: "10px" }}
          />
        </label>

        <button className="primary" type="submit">
          Entrar
        </button>
      </form>

      <p style={{ marginTop: "2rem", color: "#A7A7A7", fontSize: "0.9rem" }}>
        * Página administrativa simulada. Para uso real, integrar com{" "}
        <strong>Supabase Auth</strong> ou outro backend seguro.
      </p>
    </section>
  );
}
