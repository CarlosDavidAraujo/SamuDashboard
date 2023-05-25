import { useState } from "react";

export function LoginPage() {
  const [inputs, setInputs] = useState();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value
  }

  return (
    <div>
      <form>
        <label for="username">Usuário:</label>
        <input type="text" id="username" name="username" required />

        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
