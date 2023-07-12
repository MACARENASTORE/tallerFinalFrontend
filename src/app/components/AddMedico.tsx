import { useState } from "react";

const PlusIcon = () => {
  const [abierto, setAbierto] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState(
    {
    "tarjetaProfesional": "",
    "nombre": "",
    "apellido": "",
    "consultorio": "",
    "correo": ""
  }
  );

  const clickIcon = () => {
    setAbierto(!abierto);
  };

  const cambiarValor = (e:any) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value
    });
  };

  const procesarFormulario = async (e:any) => {
    e.preventDefault()

    try {
      const response = await fetch(`http://localhost:8080/medicos`, {
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
        <form onSubmit={procesarFormulario}>
          <input
            type="text"
            name="tarjetaProfesional"
            placeholder="Tarjeta Profesional"
            onChange={cambiarValor}
          />
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={cambiarValor}
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            onChange={cambiarValor}
          />
          <input
            type="number"
            name="consultorio"
            placeholder="Consultorio"
            onChange={cambiarValor}
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo Electrónico"
            onChange={cambiarValor}
          />
          <button type="submit">Guardar</button>
        </form>
      )}
    </div>
  );
};

export default PlusIcon;


