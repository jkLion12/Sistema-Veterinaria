// src/app/dashboard/caja/page.tsx
'use client';

import { useState } from 'react';

export default function CajaPage() {
  // Estado de ejemplo (luego vendrá de tu backend)
  const [cajaAbierta, setCajaAbierta] = useState(true);
  const [saldoInicial, setSaldoInicial] = useState(500);
  const [movimientos, setMovimientos] = useState([
    { id: 1, tipo: 'ingreso', descripcion: 'Venta de producto - Alimento', monto: 89.90, hora: '10:30' },
    { id: 2, tipo: 'egreso', descripcion: 'Compra de insumos', monto: 45.00, hora: '11:15' },
    { id: 3, tipo: 'ingreso', descripcion: 'Consulta veterinaria', monto: 150.00, hora: '12:00' },
    { id: 4, tipo: 'egreso', descripcion: 'Pago de proveedor', monto: 200.00, hora: '14:20' },
  ]);

  // Cálculo de totales
  const totalIngresos = movimientos.filter(m => m.tipo === 'ingreso').reduce((acc, m) => acc + m.monto, 0);
  const totalEgresos = movimientos.filter(m => m.tipo === 'egreso').reduce((acc, m) => acc + m.monto, 0);
  const saldoFinal = saldoInicial + totalIngresos - totalEgresos;

  // Estado para nuevo movimiento
  const [nuevoMovimiento, setNuevoMovimiento] = useState({
    tipo: 'ingreso',
    descripcion: '',
    monto: '',
  });

  const handleAgregarMovimiento = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevoMovimiento.descripcion || !nuevoMovimiento.monto) return;

    const nuevo = {
      id: movimientos.length + 1,
      tipo: nuevoMovimiento.tipo as 'ingreso' | 'egreso',
      descripcion: nuevoMovimiento.descripcion,
      monto: parseFloat(nuevoMovimiento.monto),
      hora: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
    };
    setMovimientos([...movimientos, nuevo]);
    setNuevoMovimiento({ tipo: 'ingreso', descripcion: '', monto: '' });
  };

  const handleAbrirCaja = () => {
    // Aquí iría la lógica para abrir caja (ej. pedir saldo inicial)
    const monto = prompt('Ingrese el saldo inicial de caja:');
    if (monto && !isNaN(parseFloat(monto))) {
      setSaldoInicial(parseFloat(monto));
      setCajaAbierta(true);
      setMovimientos([]);
    }
  };

  const handleCerrarCaja = () => {
    if (confirm('¿Estás seguro de cerrar la caja? Se generará un resumen.')) {
      setCajaAbierta(false);
      // Aquí podrías mostrar un resumen o generar reporte
      alert(`Caja cerrada. Saldo final: S/${saldoFinal.toFixed(2)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 font-sans">
      {/* Encabezado */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Caja</h1>
          <p className="text-sm text-gray-500">Apertura, cierre y movimientos del día</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-2">
          {!cajaAbierta ? (
            <button
              onClick={handleAbrirCaja}
              className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Abrir Caja
            </button>
          ) : (
            <button
              onClick={handleCerrarCaja}
              className="inline-flex items-center rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-red-700 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cerrar Caja
            </button>
          )}
        </div>
      </div>

      {/* Estado de la caja */}
      <div className={`rounded-2xl p-4 mb-6 flex items-center justify-between ${cajaAbierta ? 'bg-green-50 border border-green-200' : 'bg-gray-100 border border-gray-200'}`}>
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full mr-3 ${cajaAbierta ? 'bg-green-500' : 'bg-gray-400'}`}></div>
          <span className={`font-medium ${cajaAbierta ? 'text-green-700' : 'text-gray-600'}`}>
            {cajaAbierta ? 'Caja Abierta' : 'Caja Cerrada'}
          </span>
          {cajaAbierta && (
            <span className="ml-2 text-sm text-gray-500">· Saldo inicial: S/{saldoInicial.toFixed(2)}</span>
          )}
        </div>
        {cajaAbierta && (
          <span className="text-sm text-gray-500">
            Apertura: {new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}
          </span>
        )}
      </div>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl shadow p-4">
          <p className="text-xs text-gray-500">Saldo Inicial</p>
          <p className="text-xl font-bold text-gray-800">S/{saldoInicial.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <p className="text-xs text-gray-500">Ingresos del día</p>
          <p className="text-xl font-bold text-green-600">+ S/{totalIngresos.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <p className="text-xs text-gray-500">Egresos del día</p>
          <p className="text-xl font-bold text-red-600">- S/{totalEgresos.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <p className="text-xs text-gray-500">Saldo Final</p>
          <p className={`text-xl font-bold ${saldoFinal >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
            S/{saldoFinal.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formulario para nuevo movimiento */}
        <div className="lg:col-span-1 bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Registrar Movimiento</h2>
          <form onSubmit={handleAgregarMovimiento} className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Tipo</label>
              <select
                value={nuevoMovimiento.tipo}
                onChange={(e) => setNuevoMovimiento({ ...nuevoMovimiento, tipo: e.target.value })}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                disabled={!cajaAbierta}
              >
                <option value="ingreso">Ingreso</option>
                <option value="egreso">Egreso</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Descripción</label>
              <input
                type="text"
                value={nuevoMovimiento.descripcion}
                onChange={(e) => setNuevoMovimiento({ ...nuevoMovimiento, descripcion: e.target.value })}
                placeholder="Ej. Venta de producto"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                required
                disabled={!cajaAbierta}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Monto (S/)</label>
              <input
                type="number"
                step="0.01"
                value={nuevoMovimiento.monto}
                onChange={(e) => setNuevoMovimiento({ ...nuevoMovimiento, monto: e.target.value })}
                placeholder="0.00"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                required
                disabled={!cajaAbierta}
              />
            </div>
            <button
              type="submit"
              className={`w-full rounded-lg py-2 text-sm font-medium text-white shadow transition ${cajaAbierta ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
              disabled={!cajaAbierta}
            >
              Agregar Movimiento
            </button>
          </form>
          {!cajaAbierta && (
            <p className="text-xs text-gray-400 mt-2 text-center">Abre la caja para registrar movimientos</p>
          )}
        </div>

        {/* Lista de movimientos */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Movimientos del día</h2>
          {movimientos.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-8">No hay movimientos registrados hoy</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {movimientos.map((mov) => (
                    <tr key={mov.id} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{mov.hora}</td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${mov.tipo === 'ingreso' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {mov.tipo === 'ingreso' ? 'Ingreso' : 'Egreso'}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">{mov.descripcion}</td>
                      <td className={`px-4 py-2 whitespace-nowrap text-sm font-medium text-right ${mov.tipo === 'ingreso' ? 'text-green-600' : 'text-red-600'}`}>
                        {mov.tipo === 'ingreso' ? '+' : '-'} S/{mov.monto.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}