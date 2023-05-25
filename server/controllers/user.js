module.exports.login = (req, res) => {
  const { username, password } = req.body;

  // Verifica se o usuário e a senha correspondem aos valores padrão
  if (username === "admin" && password === "password") {
    // Autenticação bem-sucedida
    res.status(200).json({ message: "Autenticação bem-sucedida" });
  } else {
    // Autenticação falhou
    res.status(401).json({ message: "Usuário ou senha inválidos" });
  }
};
