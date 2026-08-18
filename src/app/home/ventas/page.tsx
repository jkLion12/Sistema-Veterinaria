// src/app/ventas/page.tsx
export default function VentasPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Encabezado */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Ventas</h1>
          <p className="text-sm text-gray-500">Gestión de ventas y facturación</p>
        </div>
        <div>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition">
            + Nueva Venta
          </button>
        </div>
      </div>

      {/* Tarjetas de estadísticas de ventas */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {/* Ventas del mes */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Ventas del mes</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">S/ 8,450</p>
            </div>
            <div className="rounded-full bg-green-100 p-3 group-hover:bg-green-200 transition">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0-1V7m0 1v1M9 12h6M9 12h6M9 12h6M9 12h6" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-green-600">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>+12% vs mes pasado</span>
          </div>
        </div>

        {/* Ingresos totales */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Ingresos totales</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">S/ 45,320</p>
            </div>
            <div className="rounded-full bg-blue-100 p-3 group-hover:bg-blue-200 transition">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Últimos 12 meses</span>
          </div>
        </div>

        {/* Productos más vendidos */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Producto más vendido</p>
              <p className="text-xl font-bold text-gray-800 mt-1">Alimento Premium</p>
            </div>
            <div className="rounded-full bg-yellow-100 p-3 group-hover:bg-yellow-200 transition">
              <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>42 unidades vendidas</span>
          </div>
        </div>

        {/* Servicios más solicitados */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Servicio más solicitado</p>
              <p className="text-xl font-bold text-gray-800 mt-1">Consulta General</p>
            </div>
            <div className="rounded-full bg-purple-100 p-3 group-hover:bg-purple-200 transition">
              <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>38 consultas este mes</span>
          </div>
        </div>
      </div>

      {/* Tabla de ventas recientes */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Ventas Recientes</h2>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Buscar..."
              className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
            <button className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-200 transition">
              Filtrar
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto/Servicio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Juan Pérez</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Alimento Premium (15kg)</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">S/ 120.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2026-08-14 10:30</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Pagado</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-2 font-medium">Ver</button>
                  <button className="text-gray-400 hover:text-gray-600">Anular</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">María López</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Consulta General</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">S/ 80.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2026-08-14 11:45</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Pendiente</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-2 font-medium">Ver</button>
                  <button className="text-gray-400 hover:text-gray-600">Anular</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Carlos Gómez</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Vacunación + Desparasitación</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">S/ 150.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2026-08-13 09:15</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Anulado</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-2 font-medium">Ver</button>
                  <button className="text-gray-400 hover:text-gray-600">Anular</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}