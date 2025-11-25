import { useState } from "react";

export function useTestimonials() {
  const [testemunhos, setTestemunhos] = useState<string[]>([
    "“Deus transformou minha vida através da oração.” — João M.",
    "“Encontrei paz na comunidade Santa Teresinha.” — Maria C.",
  ]);

  const addTestemunho = (novo: string) => {
    if (novo.trim()) {
      setTestemunhos([...testemunhos, novo]);
    }
  };

  return { testemunhos, addTestemunho };
}
