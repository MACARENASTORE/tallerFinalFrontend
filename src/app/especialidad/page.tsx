"use client"
import React, { useEffect, useState } from 'react';
import EspecialidadTable from '../components/Especialidad/EspecialidadTable';
import AddEspecialidad from '../components/Especialidad/AddEspecialidad';


interface Especialidad {
    idEspecialidad: number;
    nombre: string;
    medicos: any[];
  }
  
  const EspecialidadPage: React.FC = () => {
    const [especialidades, setEspecialidades] = useState<Especialidad[]>([]);
  
    useEffect(() => {
      const fetchEspecialidades = async () => {
        try {
          const response = await fetch('http://localhost:8080/especialidades');
          if (!response.ok) {
            throw new Error('No se pudo obtener la lista de especialidades');
          }
          const data = await response.json();
          setEspecialidades(data._embedded.especialidades);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchEspecialidades();
    }, []);
  
    return (
      <div className="bg-black min-h-screen">
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6 text-white">Listado de Especialidades</h1>
          <EspecialidadTable especialidades={especialidades} />
          <AddEspecialidad />
        </div>
      </div>
    );
  };
  
  export default EspecialidadPage;
