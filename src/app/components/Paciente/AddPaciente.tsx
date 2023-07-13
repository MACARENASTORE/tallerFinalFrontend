import React, { useState } from "react";

interface Paciente {
  cedula: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  telefono: string;
  citas: any[];
}

interface AddPacienteProps {
  onAddPaciente: (paciente: Paciente) => void;
}

const AddPaciente: React.FC<AddPacienteProps> = ({ onAddPaciente }) => {
  const [abierto, setAbierto] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState<Paciente>({
    cedula: 0,
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    telefono: "",
    citas: [],
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
      const response = await fetch("http://localhost:8080/pacientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosFormulario),
      });

      if (!response.ok) {
        throw new Error("No se pudo guardar el registro");
      }

      onAddPaciente(datosFormulario);
      setDatosFormulario({
        cedula: 0,
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        telefono: "",
        citas: [],
      });
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
            type="number"
            name="cedula"
            placeholder="Cedula"
            value={datosFormulario.cedula}
            onChange={cambiarValor}
            className="bg-transparent border-b border-white text-white mb-2"
          />
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={datosFormulario.nombre}
            onChange={cambiarValor}
            className="bg-transparent border-b border-white text-white mb-2"
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={datosFormulario.apellido}
            onChange={cambiarValor}
            className="bg-transparent border-b border-white text-white mb-2"
          />
          <input
            type="text"
            name="fechaNacimiento"
            placeholder="Fecha de Nacimiento"
            value={datosFormulario.fechaNacimiento}
            onChange={cambiarValor}
            className="bg-transparent border-b border-white text-white mb-2"
          />
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={datosFormulario.telefono}
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
