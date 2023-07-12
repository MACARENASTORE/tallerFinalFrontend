import React, { useState } from "react";

const AddPaciente: React.FC = () => {
  const [abierto, setAbierto] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState({
    tarjetaProfesional: "",
    nombre: "",
    apellido: "",
    consultorio: "",
    correo: ""
  });

  const clickIcon = () => {
    setAbierto(!abierto);
  };

  const cambiarValor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value
    });
  };

  const procesarFormulario = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/pacientes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datosFormulario)
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
            name="tarjetaProfesional"
            placeholder="Tarjeta Profesional"
            onChange={cambiarValor}
            className="bg-transparent border-b border-white text-white mb-2"
          />
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={cambiarValor}
            className="bg-transparent border-b border-white text-white mb-2"
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            onChange={cambiarValor}
            className="bg-transparent border-b border-white text-white mb-2"
          />
          <input
            type="number"
            name="consultorio"
            placeholder="Consultorio"
            onChange={cambiarValor}
            className="bg-transparent border-b border-white text-white mb-2"
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo Electrónico"
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

export default AddPaciente;
