"use client"
import React, { useEffect, useState } from 'react';
import PacienteTable from '../components/Paciente/PacienteTable';
import AddPaciente from '../components/Paciente/AddPaciente';


interface Paciente {
  cedula: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  telefono: string;
  citas: any[];
}

const PacientePage: React.FC = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const response = await fetch('http://localhost:8080/pacientes');
        if (!response.ok) {
          throw new Error('No se pudo obtener la lista de pacientes');
        }
        const data = await response.json();
        setPacientes(data._embedded.pacientes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPacientes();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Listado de Pacientes</h1>
        <PacienteTable pacientes={pacientes} />
        <AddPaciente />
      </div>
    </div>
  );
};

export default PacientePage;