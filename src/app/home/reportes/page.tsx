// src/app/dashboard/reportes/page.tsx
'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

export default function ReportesPage() {
  // Datos de ejemplo para gráficos
  const ventasMensuales = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Ventas (S/)',
        data: [1200, 1500, 1800, 2200, 2000, 2500, 2800, 3000, 2700, 3200, 3500, 4000],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
      },
    ],
  };

  const citasPorEstado = {
    labels: ['Confirmadas', 'Pendientes', 'Canceladas'],
    datasets: [
      {
        label: 'Citas por Estado',
        data: [45, 20, 8],
        backgroundColor: ['#10B981', '#FBBF24', '#EF4444'],
        borderColor: ['#059669', '#D97706', '#DC2626'],
        borderWidth: 2,
      },
    ],
  };

  const pacientesPorEspecie = {
    labels: ['Perros', 'Gatos', 'Aves', 'Conejos', 'Otros'],
    datasets: [
      {
        label: 'Pacientes por Especie',
        data: [82, 30, 8, 4, 6],
        backgroundColor: ['#3B82F6', '#8B5CF6', '#F59E0B', '#10B981', '#EC4899'],
        borderColor: ['#2563EB', '#7C3AED', '#D97706', '#059669', '#DB2777'],
        borderWidth: 2,
      },
    ],
  };

  const ingresosMensuales = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Ingresos',
        data: [800, 950, 1100, 1300, 1200, 1500, 1700, 1900, 1600, 2100, 2300, 2600],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Egresos',
        data: [400, 450, 500, 600, 550, 700, 750, 800, 700, 900, 950, 1000],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Datos de resumen
  const resumen = {
    totalVentas: 42000,
    totalCitas: 73,
    totalPacientes: 130,
    ingresosNetos: 12000,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 font-sans">
      {/* Encabezado */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Reportes</h1>
          <p className="text-sm text-gray-500">Estadísticas y análisis de la clínica</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-2">
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition">
            Exportar PDF
          </button>
          <button className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow hover:bg-gray-300 transition">
            Exportar Excel
          </button>
        </div>
      </div>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl shadow p-4">
          <p className="text-xs text-gray-500">Ventas Totales</p>
          <p className="text-xl font-bold text-blue-600">S/{resumen.totalVentas.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <p className="text-xs text-gray-500">Citas Realizadas</p>
          <p className="text-xl font-bold text-green-600">{resumen.totalCitas}</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <p className="text-xs text-gray-500">Pacientes Activos</p>
          <p className="text-xl font-bold text-purple-600">{resumen.totalPacientes}</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <p className="text-xs text-gray-500">Ingresos Netos</p>
          <p className="text-xl font-bold text-yellow-600">S/{resumen.ingresosNetos.toLocaleString()}</p>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ventas Mensuales */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Ventas Mensuales</h2>
          <Bar data={ventasMensuales} options={{ responsive: true }} />
        </div>

        {/* Ingresos vs Egresos */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Ingresos vs Egresos</h2>
          <Line data={ingresosMensuales} options={{ responsive: true }} />
        </div>

        {/* Citas por Estado */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Citas por Estado</h2>
          <div className="flex justify-center">
            <Doughnut data={citasPorEstado} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
          </div>
        </div>

        {/* Pacientes por Especie */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Pacientes por Especie</h2>
          <div className="flex justify-center">
            <Doughnut data={pacientesPorEspecie} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
          </div>
        </div>
      </div>
    </div>
  );
}