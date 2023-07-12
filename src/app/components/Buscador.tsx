import React, { useState } from "react";

interface BuscadorProps {
  onBuscar: (data: any) => void;
}

const Buscador: React.FC<BuscadorProps> = ({ onBuscar }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/medicos/${query}`);
      if (!response.ok) {
        throw new Error("No se pudo buscar el médico");
      }
      const data = await response.json(); // Convertir la respuesta a JSON

      // Pasar los datos a la función onBuscar
      onBuscar(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-black">
      <input
        type="text"
        placeholder="Buscar médico..."
        value={query}
        onChange={handleInputChange}
        className="p-2 bg-black text-white focus:outline-none"
      />
      <button type="submit" className="bg-black text-white p-2">
        Buscar
      </button>
    </form>
  );
};

export default Buscador;
