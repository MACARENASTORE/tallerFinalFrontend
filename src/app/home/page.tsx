"use client"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddFormToggle = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Página Principal</h1>
        <h2 className="text-lg mb-4 text-white">¡Bienvenido(a)!</h2>
        <nav className="mb-4">
          <ul className="flex">
            <li className="mr-4">
              <Link
                to="/especialidad"
                className="text-white hover:text-gray-500"
              >
                Especialidad
              </Link>
            </li>
            <li className="mr-4">
              <Link to="/cita" className="text-white hover:text-gray-500">
                Cita
              </Link>
            </li>
            <li className="mr-4">
              <Link
                to="/paciente"
                className="text-white hover:text-gray-500"
              >
                Paciente
              </Link>
            </li>
            <li>
              <Link to="/medico" className="text-white hover:text-gray-500">
                Médico
              </Link>
            </li>
          </ul>
        </nav>
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
        {/* Renderizar la tabla o el formulario de acuerdo al estado */}
      </div>
    </div>
  );
};

export default HomePage;
