"use client"
import React, { useEffect, useState } from 'react';
import CitaTable from '../components/Cita/CitaTable';
import AddCita from '../components/Cita/AddCita';

interface Cita {
  idCita: number;
  fecha: Date;
  paciente: any;
  medico: any;
}

const CitaPage: React.FC = () => {
  const [citas, setCitas] = useState<Cita[]>([]);

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const response = await fetch('http://localhost:8080/citas');
        if (!response.ok) {
          throw new Error('No se pudo obtener la lista de citas');
        }
        const data = await response.json();
        setCitas(data._embedded.citas);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCitas();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Listado de Citas</h1>
        <CitaTable citas={citas} />
        <AddCita />
      </div>
    </div>
  );
};

export default CitaPage;
