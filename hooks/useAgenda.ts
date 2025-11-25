import { useState, useEffect } from "react";

export function useAgenda() {
  const [agenda, setAgenda] = useState<{ data: string; evento: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {  
    setTimeout(() => {
      setAgenda([
        { data: "Domingo - 07:00h, 09:00h, 11:00h, 19:00h", evento: "Missa na Matriz" },
        { data: "Domingo - 09:00h, 17:00h", evento: "Missa na comunidade São José" },
        
      ]);
      setLoading(false);
    }, 800);
  }, []);

  return { agenda, loading };
}
