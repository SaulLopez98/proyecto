import React from 'react'

export const ComponenteMontaje = () => {
  return (
    <div className="divselect">
      <select id="montaje" name="montaje" form="form">
      <option value="Auditorio">Tipo Auditorio</option>
      <option value="FormaU">Forma de U</option>
      <option value="Libre">Libre</option>
      <option value="ExamenPro">Examen Profesional</option>
      </select>
    </div>
  )
}
