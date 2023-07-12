import React from 'react';

interface Medico {
  tarjetaProfesional: number;
  nombre: string;
  apellido: string;
  consultorio: number;
  correo: string;
}

interface MedicoTableProps {
  medicos: Medico[];
}

const MedicoTable: React.FC<MedicoTableProps> = ({ medicos }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead>
        <tr>
          <th>Tarjeta Profesional</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Consultorio</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {medicos.map((medico, index) => {
          return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
              <td>{medico.tarjetaProfesional}</td>
              <td>{medico.nombre}</td>
              <td>{medico.apellido}</td>
              <td>{medico.consultorio}</td>
              <td>{medico.correo}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MedicoTable;