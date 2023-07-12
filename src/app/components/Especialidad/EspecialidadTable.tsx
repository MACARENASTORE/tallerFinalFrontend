import React from 'react';

interface Especialidad {
  idEspecialidad: number;
  nombre: string;
}

interface EspecialidadTableProps {
  especialidades: Especialidad[];
}

const EspecialidadTable: React.FC<EspecialidadTableProps> = ({ especialidades }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {especialidades.map((especialidad) => (
          <tr key={especialidad.idEspecialidad}>
            <td>{especialidad.idEspecialidad}</td>
            <td>{especialidad.nombre}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EspecialidadTable;
