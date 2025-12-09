import { useState } from "react";

export default function Order() {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("PIX");

  return (
    <section style={{ padding: "2rem 1rem", maxWidth: "500px", margin: "auto" }}>
      <h1 style={{ color: "#E44F2A", textAlign: "center" }}>Finalizar Pedido</h1>

      {step === 1 && (
        <div>
          <h3>1️⃣ Endereço de Entrega</h3>
          <label>Endereço completo:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Rua, número, bairro, cidade"
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
          <button
            className="primary"
            style={{ marginTop: "1rem" }}
            onClick={() => setStep(2)}
          >
            Próximo
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>2️⃣ Forma de Pagamento</h3>
          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          >
            <option value="PIX">PIX</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão">Cartão</option>
          </select>
          <button
            className="primary"
            style={{ marginTop: "1rem" }}
            onClick={() => setStep(3)}
          >
            Continuar
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>3️⃣ Revisar Pedido</h3>
          <p><strong>Endereço:</strong> {address || "Não informado"}</p>
          <p><strong>Pagamento:</strong> {payment}</p>
          <p><strong>Valor Total:</strong> R$ 120,00</p>
          <button
            className="primary"
            style={{ marginRight: "10px" }}
            onClick={() => alert("✅ Pedido confirmado!")}
          >
            Confirmar Pedido
          </button>
          <button className="secondary" onClick={() => setStep(1)}>
            Voltar
          </button>
        </div>
      )}
    </section>
  );
}
