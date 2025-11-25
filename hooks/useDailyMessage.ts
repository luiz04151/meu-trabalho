import { useState, useEffect } from "react";

export function useDailyMessage() {
  const mensagens = [
    "“O Senhor é meu pastor; nada me faltará.” — Salmo 23:1",
    "“Tudo posso naquele que me fortalece.” — Filipenses 4:13",
    "“Confia no Senhor de todo o teu coração.” — Provérbios 3:5",
    "“Alegrai-vos sempre no Senhor.” — Filipenses 4:4",
    "“Deus é amor.” — 1 João 4:8"
  ];

  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const dia = new Date().getDate();
    const index = dia % mensagens.length;
    setMensagem(mensagens[index]);
  }, []);

  return mensagem;
}
