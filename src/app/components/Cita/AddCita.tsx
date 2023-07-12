import React, { useState } from 'react';

const AddCita: React.FC = () => {
  const [abierto, setAbierto] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState({
    fecha: '',
    paciente: '',
    medico: '',
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
      const response = await fetch('http://localhost:8080/citas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosFormulario),
      });

      if (!response.ok) {
        throw new Error('No se pudo guardar el registro');
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
            type="date"
            name="fecha"
            placeholder="Fecha"
            onChange={cambiarValor}
            className="bg-transparent border-b border-white text-white mb-2"
          />
          <input
            type="text"
            name="paciente"
            placeholder="Paciente"
            onChange={cambiarValor}
            className="bg-transparent border-b border-white text-white mb-2"
          />
          <input
            type="text"
            name="medico"
            placeholder="Médico"
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

export default AddCita;
