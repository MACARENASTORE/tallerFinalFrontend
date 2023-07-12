"use client";

//importaciones
import { useEffect, useState } from "react";
import MedicoTable from "../components/Medico/MedicoTable";
import PlusIcon from "../components/Medico/AddMedico";

export default function MedicoPage() {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    const fetchMedicos = async () => {
      try {
        const response = await fetch(`http://localhost:8080/medicos`);
        if (!response.ok) {
          throw new Error("No se pudo obtener la lista de médicos");
        }
        const data = await response.json();
        setMedicos(data._embedded.medicos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMedicos();
  }, []); // Agrega las dependencias necesarias aquí

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">
          Listado de Médicos
        </h1>
        <MedicoTable medicos={medicos} />
        <PlusIcon />
      </div>
    </div>
  );
}
