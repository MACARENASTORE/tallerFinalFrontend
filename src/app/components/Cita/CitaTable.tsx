import React from 'react';
import { format } from 'date-fns';

interface Cita {
  idCita: number;
  fecha: string;
  paciente: any; // Reemplaza 'any' con el tipo de datos correcto de la entidad Paciente
  medico: any; // Reemplaza 'any' con el tipo de datos correcto de la entidad Medico
}

interface CitaTableProps {
  citas: Cita[];
}

const CitaTable: React.FC<CitaTableProps> = ({ citas }) => {
  const formatDate = (date: Date) => {
    return format(date, 'dd/MM/yyyy');
  };

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead>
        <tr>
          <th>ID Cita</th>
          <th>Fecha</th>
          <th>Paciente</th>
          <th>Médico</th>
        </tr>
      </thead>
      <tbody>
        {citas.map((cita) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            key={cita.idCita}
          >
            <td>{cita.idCita}</td>
            <td>{cita.fecha}</td>
            <td>{cita.paciente}</td> {/* Reemplaza 'cita.paciente' con el campo correcto de la entidad Paciente */}
            <td>{cita.medico}</td> {/* Reemplaza 'cita.medico' con el campo correcto de la entidad Medico */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CitaTable;
