// src/app/dashboard/configuracion/page.tsx
'use client';

import { useState } from 'react';

export default function ConfiguracionPage() {
  // Estados para las configuraciones
  const [config, setConfig] = useState({
    idioma: 'es',
    moneda: 'PEN',
    formatoFecha: 'DD/MM/YYYY',
    notificaciones: true,
    facturaElectronica: false,
    recordarCitas: true,
    modoOscuro: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setConfig({
      ...config,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar la configuración
    alert('Configuración guardada correctamente');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 font-sans">
      {/* Encabezado */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Configuración</h1>
        <p className="text-sm text-gray-500">Ajustes generales del sistema</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Sección: General */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">General</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Idioma</label>
              <select
                name="idioma"
                value={config.idioma}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              >
                <option value="es">Español</option>
                <option value="en">Inglés</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Moneda</label>
              <select
                name="moneda"
                value={config.moneda}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              >
                <option value="PEN">Soles (PEN)</option>
                <option value="USD">Dólares (USD)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Formato de fecha</label>
              <select
                name="formatoFecha"
                value={config.formatoFecha}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              >
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>

        {/* Sección: Preferencias */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Preferencias</h2>
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="notificaciones"
                checked={config.notificaciones}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Activar notificaciones por correo</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="facturaElectronica"
                checked={config.facturaElectronica}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Habilitar facturación electrónica</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="recordarCitas"
                checked={config.recordarCitas}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Recordar citas automáticamente</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="modoOscuro"
                checked={config.modoOscuro}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Modo oscuro (experimental)</span>
            </label>
          </div>
        </div>

        {/* Sección: Seguridad */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Seguridad</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cambiar contraseña</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="password"
                  placeholder="Nueva contraseña"
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
                <input
                  type="password"
                  placeholder="Confirmar contraseña"
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
                <button
                  type="button"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                  Actualizar
                </button>
              </div>
            </div>
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Requerir autenticación de dos factores (2FA)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Sección: Acerca de */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Acerca de</h2>
          <div className="text-sm text-gray-600 space-y-1">
            <p><span className="font-medium">Sistema:</span> VetClinic v1.0.0</p>
            <p><span className="font-medium">Desarrollado por:</span> JACK LION</p>
            <p><span className="font-medium">Última actualización:</span> Agosto 2026</p>
            <p><span className="font-medium">Licencia:</span> Uso interno</p>
          </div>
        </div>

        {/* Botón de guardar */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition"
          >
            Guardar Configuración
          </button>
        </div>
      </form>
    </div>
  );
}