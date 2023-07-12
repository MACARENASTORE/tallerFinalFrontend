"use client"

//Importaciones 
import React, { useState } from 'react';
import PacienteTable from './components/Paciente/PacienteTable';
import MedicoTable from './components/Medico/MedicoTable';
import CitaTable from './components/Cita/CitaTable';
import EspecialidadTable from './components/Especialidad/EspecialidadTable';
import AddPaciente from './components/Paciente/AddPaciente';
import AddMedico from './components/Medico/AddMedico';
import AddCita from './components/Cita/AddCita';
import AddEspecialidad from './components/Especialidad/AddEspecialidad';

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pacientes');
  const [showAddForm, setShowAddForm] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleAddFormToggle = () => {
    setShowAddForm(!showAddForm);
  };

  const renderTable = () => {
    switch (activeTab) {
      case 'pacientes':
        return (
          <>
            <PacienteTable pacientes={[]} />
            {showAddForm && <AddPaciente />}
          </>
        );
      case 'medicos':
        return (
          <>
            <MedicoTable medicos={[]} />
            {showAddForm && <AddMedico />}
          </>
        );
      case 'citas':
        return (
          <>
            <CitaTable citas={[]} />
            {showAddForm && <AddCita />}
          </>
        );
      case 'especialidades':
        return (
          <>
            <EspecialidadTable especialidades={[]} />
            {showAddForm && <AddEspecialidad />}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Página Principal</h1>
        <h2 className="text-lg mb-4 text-white">¡Bienvenido a ATENAIPS!</h2>
        <div className="flex mb-4">
          <button
            className={`mr-4 ${
              activeTab === 'pacientes' ? 'text-white' : 'text-gray-500'
            }`}
            onClick={() => handleTabChange('pacientes')}
          >
            Pacientes
          </button>
          <button
            className={`mr-4 ${
              activeTab === 'medicos' ? 'text-white' : 'text-gray-500'
            }`}
            onClick={() => handleTabChange('medicos')}
          >
            Médicos
          </button>
          <button
            className={`mr-4 ${
              activeTab === 'citas' ? 'text-white' : 'text-gray-500'
            }`}
            onClick={() => handleTabChange('citas')}
          >
            Citas
          </button>
          <button
            className={`mr-4 ${
              activeTab === 'especialidades' ? 'text-white' : 'text-gray-500'
            }`}
            onClick={() => handleTabChange('especialidades')}
          >
            Especialidades
          </button>
        </div>
        <div className="flex items-center mb-4">
          <button
            className={`mr-4 ${
              showAddForm ? 'bg-red-500' : 'bg-green-500'
            } text-white py-1 px-4 rounded`}
            onClick={handleAddFormToggle}
          >
            {showAddForm ? 'Cancelar' : 'Agregar'}
          </button>
          <span className="text-white">
            {showAddForm ? 'Formulario de Agregar' : 'Tabla'}
          </span>
        </div>
        {renderTable()}
      </div>
    </div>
  );
};

export default HomePage;