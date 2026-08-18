// src/app/dashboard/empresa/page.tsx
'use client';

import { useState } from 'react';

export default function EmpresaPage() {
  // Estado de ejemplo con los datos de la empresa
  const [empresa, setEmpresa] = useState({
    nombre: 'VetClinic',
    ruc: '20456789012',
    direccion: 'Av. Principal 123, Lima, Perú',
    telefono: '987654321',
    correo: 'contacto@vetclinic.com',
    sitioWeb: 'www.vetclinic.com',
    horarioApertura: '08:00',
    horarioCierre: '20:00',
    diasAtencion: 'Lunes a Sábado',
    descripcion: 'Clínica veterinaria especializada en el cuidado y bienestar de tus mascotas.',
    logo: null, // Para imagen subida
  });

  const [editando, setEditando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setEmpresa({
      ...empresa,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar los datos en la base de datos
    alert('Datos de la empresa actualizados correctamente.');
    setEditando(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 font-sans">
      {/* Encabezado */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Empresa</h1>
          <p className="text-sm text-gray-500">Configuración de los datos de la clínica</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-2">
          {!editando ? (
            <button
              onClick={() => setEditando(true)}
              className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Editar Datos
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => setEditando(false)}
                className="inline-flex items-center rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400 transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmit}
                className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700 transition"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Guardar
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Información de la empresa */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Datos Generales</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la Empresa</label>
              <input
                type="text"
                name="nombre"
                value={empresa.nombre}
                onChange={handleChange}
                disabled={!editando}
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none ${!editando ? 'bg-gray-100' : 'bg-white'}`}
              />
            </div>

            {/* RUC */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">RUC</label>
              <input
                type="text"
                name="ruc"
                value={empresa.ruc}
                onChange={handleChange}
                disabled={!editando}
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none ${!editando ? 'bg-gray-100' : 'bg-white'}`}
              />
            </div>

            {/* Dirección */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
              <input
                type="text"
                name="direccion"
                value={empresa.direccion}
                onChange={handleChange}
                disabled={!editando}
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none ${!editando ? 'bg-gray-100' : 'bg-white'}`}
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <input
                type="text"
                name="telefono"
                value={empresa.telefono}
                onChange={handleChange}
                disabled={!editando}
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none ${!editando ? 'bg-gray-100' : 'bg-white'}`}
              />
            </div>

            {/* Correo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
              <input
                type="email"
                name="correo"
                value={empresa.correo}
                onChange={handleChange}
                disabled={!editando}
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none ${!editando ? 'bg-gray-100' : 'bg-white'}`}
              />
            </div>

            {/* Sitio Web */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sitio Web</label>
              <input
                type="text"
                name="sitioWeb"
                value={empresa.sitioWeb}
                onChange={handleChange}
                disabled={!editando}
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none ${!editando ? 'bg-gray-100' : 'bg-white'}`}
              />
            </div>

            {/* Horario Apertura */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Horario de Apertura</label>
              <input
                type="time"
                name="horarioApertura"
                value={empresa.horarioApertura}
                onChange={handleChange}
                disabled={!editando}
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none ${!editando ? 'bg-gray-100' : 'bg-white'}`}
              />
            </div>

            {/* Horario Cierre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Horario de Cierre</label>
              <input
                type="time"
                name="horarioCierre"
                value={empresa.horarioCierre}
                onChange={handleChange}
                disabled={!editando}
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none ${!editando ? 'bg-gray-100' : 'bg-white'}`}
              />
            </div>

            {/* Días de Atención */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Días de Atención</label>
              <input
                type="text"
                name="diasAtencion"
                value={empresa.diasAtencion}
                onChange={handleChange}
                disabled={!editando}
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none ${!editando ? 'bg-gray-100' : 'bg-white'}`}
              />
            </div>

            {/* Descripción */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
              <textarea
                name="descripcion"
                rows={3}
                value={empresa.descripcion}
                onChange={handleChange}
                disabled={!editando}
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none ${!editando ? 'bg-gray-100' : 'bg-white'}`}
              />
            </div>

            {/* Logo */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Logo de la Empresa</label>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 overflow-hidden">
                  {empresa.logo ? (
                    <img src={empresa.logo} alt="Logo" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl">🏥</span>
                  )}
                </div>
                {editando && (
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    Subir Logo
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-1">Formatos permitidos: PNG, JPG (máx. 2MB)</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}