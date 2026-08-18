// src/app/pacientes/page.tsx
export default function PacientesPage() {
  return (
    <div className="min-h-screen p-6 font-sans">
      {/* Encabezado */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Pacientes</h1>
          <p className="text-sm text-gray-500">Gestión de pacientes de la clínica</p>
        </div>
        <div>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition">
            + Nuevo Paciente
          </button>
        </div>
      </div>

      {/* Tarjetas de estadísticas de pacientes (exclusivas) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {/* Total Pacientes */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Pacientes</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">124</p>
            </div>
            <div className="rounded-full bg-blue-100 p-3 group-hover:bg-blue-200 transition">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-green-600">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>+8 nuevos este mes</span>
          </div>
        </div>

        {/* Activos */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Activos</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">98</p>
            </div>
            <div className="rounded-full bg-green-100 p-3 group-hover:bg-green-200 transition">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>79% del total</span>
          </div>
        </div>

        {/* En tratamiento */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">En tratamiento</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">23</p>
            </div>
            <div className="rounded-full bg-yellow-100 p-3 group-hover:bg-yellow-200 transition">
              <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
            </svg>
            <span>Requieren seguimiento</span>
          </div>
        </div>

        {/* Por especie (ejemplo: perros) */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Perros</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">82</p>
            </div>
            <div className="rounded-full bg-purple-100 p-3 group-hover:bg-purple-200 transition">
              <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>66% del total</span>
          </div>
        </div>
      </div>

      {/* Tabla de pacientes */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Lista de Pacientes</h2>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Especie</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Raza</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edad</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Propietario</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Última visita</th>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Perro</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Labrador</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">3 años</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Juan Pérez</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2026-08-10</td>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Gato</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Persa</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2 años</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">María López</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2026-08-12</td>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Perro</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Bulldog</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">4 años</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Carlos Gómez</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2026-08-08</td>
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