// src/app/citas/page.tsx
export default function CitasPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Encabezado */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Citas</h1>
          <p className="text-sm text-gray-500">Gestión de citas de la clínica</p>
        </div>
        <div>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition">
            + Nueva Cita
          </button>
        </div>
      </div>

      {/* Tarjetas de estadísticas de citas */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {/* Citas de hoy */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Citas de hoy</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">8</p>
            </div>
            <div className="rounded-full bg-blue-100 p-3 group-hover:bg-blue-200 transition">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
            </svg>
            <span>Próxima en 2h</span>
          </div>
        </div>

        {/* Pendientes */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Pendientes</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">12</p>
            </div>
            <div className="rounded-full bg-yellow-100 p-3 group-hover:bg-yellow-200 transition">
              <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-yellow-600">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
            </svg>
            <span>Requieren atención</span>
          </div>
        </div>

        {/* Confirmadas */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Confirmadas</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">24</p>
            </div>
            <div className="rounded-full bg-green-100 p-3 group-hover:bg-green-200 transition">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-green-600">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>+8 esta semana</span>
          </div>
        </div>

        {/* Canceladas */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Canceladas</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">3</p>
            </div>
            <div className="rounded-full bg-red-100 p-3 group-hover:bg-red-200 transition">
              <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-red-600">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>2 sin reprogramar</span>
          </div>
        </div>
      </div>

      {/* Tabla de citas */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Lista de Citas</h2>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paciente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Propietario</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Motivo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs mr-3">M</div>
                    <span className="text-sm font-medium text-gray-900">Max</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Juan Pérez</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2026-08-14 10:00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Consulta general</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Confirmada</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-2 font-medium">Editar</button>
                  <button className="text-gray-400 hover:text-gray-600">Ver</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs mr-3">L</div>
                    <span className="text-sm font-medium text-gray-900">Luna</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">María López</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2026-08-14 11:30</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Vacunación</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Pendiente</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-2 font-medium">Editar</button>
                  <button className="text-gray-400 hover:text-gray-600">Ver</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs mr-3">R</div>
                    <span className="text-sm font-medium text-gray-900">Rocky</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Carlos Gómez</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2026-08-15 09:00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Cirugía</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Cancelada</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-2 font-medium">Editar</button>
                  <button className="text-gray-400 hover:text-gray-600">Ver</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}