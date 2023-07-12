import React from 'react';
import { format } from 'date-fns';

interface Paciente {
  cedula: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  telefono: string;
  citas: any[];
}

interface PacienteTableProps {
  pacientes: Paciente[];
}

const PacienteTable: React.FC<PacienteTableProps> = ({ pacientes }) => {
  const formatDate = (date: Date) => {
    return format(date, 'dd/MM/yyyy');
  };

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead>
        <tr>
          <th>Cédula</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha de Nacimiento</th>
          <th>Teléfono</th>
          <th>Citas</th>
        </tr>
      </thead>
      <tbody>
        {pacientes.map((paciente) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            key={paciente.cedula}
          >
            <td>{paciente.cedula}</td>
            <td>{paciente.nombre}</td>
            <td>{paciente.apellido}</td>
            <td>{formatDate(paciente.fechaNacimiento)}</td>
            <td>{paciente.telefono}</td>
            <td>{paciente.citas.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PacienteTable;
