import React from 'react';

interface Paciente {
  cedula: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  telefono: string;
  citas: any[];
}

interface PacienteTableProps {
  pacientes: Paciente[];
  formatDate: (date: Date) => string;
}

const PacienteTable: React.FC<PacienteTableProps> = ({ pacientes, formatDate }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Cedula</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha de Nacimiento</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {pacientes.map((paciente) => (
          <tr key={paciente.cedula}>
            <td>{paciente.cedula}</td>
            <td>{paciente.nombre}</td>
            <td>{paciente.apellido}</td>
            <td>{paciente.fechaNacimiento}</td>
            <td>{paciente.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PacienteTable;
