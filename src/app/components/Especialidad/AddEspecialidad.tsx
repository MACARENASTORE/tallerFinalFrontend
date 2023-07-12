import React, { useState } from "react";

const AddEspecialidad: React.FC = () => {
  const [abierto, setAbierto] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
  });

  const clickIcon = () => {
    setAbierto(!abierto);
  };

  const cambiarValor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
  };

  const procesarFormulario = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/especialidades`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosFormulario),
      });

      if (!response.ok) {
        throw new Error("No se pudo guardar el registro");
      }

      setAbierto(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div onClick={clickIcon}>
        <span>+</span>
      </div>
      {abierto && (
        <form onSubmit={procesarFormulario} className="text-white">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={cambiarValor}
            className="bg-transparent border-b border-white text-white mb-2"
          />
          <button
            type="submit"
            className="bg-white text-black py-1 px-4 rounded"
          >
            Guardar
          </button>
        </form>
      )}
    </div>
  );
};

export default AddEspecialidad;
