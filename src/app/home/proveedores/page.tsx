// src/app/dashboard/proveedores/page.tsx
export default function ProveedoresPage() {
  // Datos de ejemplo (luego vendrán de tu base de datos)
  const proveedores = [
    {
      id: 1,
      nombre: 'Distribuidora Veterinaria del Sur',
      ruc: '20123456789',
      telefono: '987654321',
      correo: 'ventas@vetdelsur.com',
      direccion: 'Av. Principal 456, Lima',
      productos: ['Alimentos', 'Medicamentos'],
      estado: 'Activo',
    },
    {
      id: 2,
      nombre: 'Laboratorios VetHealth',
      ruc: '20456789012',
      telefono: '987654322',
      correo: 'contacto@vethealth.com',
      direccion: 'Calle 789, Arequipa',
      productos: ['Medicamentos', 'Vacunas'],
      estado: 'Activo',
    },
    {
      id: 3,
      nombre: 'Importadora PetWorld',
      ruc: '20678901234',
      telefono: '987654323',
      correo: 'info@petworld.com',
      direccion: 'Av. Los Álamos 123, Cusco',
      productos: ['Accesorios', 'Juguetes'],
      estado: 'Inactivo',
    },
    {
      id: 4,
      nombre: 'Agropecuaria San José',
      ruc: '20890123456',
      telefono: '987654324',
      correo: 'ventas@agrosanjose.com',
      direccion: 'Km 12 Carretera Panamericana, Trujillo',
      productos: ['Alimentos', 'Insumos'],
      estado: 'Activo',
    },
    {
      id: 5,
      nombre: 'Distribuidora Farmacéutica VetCare',
      ruc: '20123456780',
      telefono: '987654325',
      correo: 'ventas@vetcare.com',
      direccion: 'Calle 10, Chiclayo',
      productos: ['Medicamentos', 'Higiene'],
      estado: 'Activo',
    },
  ];

  const totalProveedores = proveedores.length;
  const activos = proveedores.filter(p => p.estado === 'Activo').length;
  const productosSuministrados = [...new Set(proveedores.flatMap(p => p.productos))].length;
  // Simulación de compras del mes (para estadística)
  const comprasMes = 12;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 font-sans">
      {/* Encabezado */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Proveedores</h1>
          <p className="text-sm text-gray-500">Gestión de proveedores de productos y servicios</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nuevo Proveedor
          </button>
        </div>
      </div>

      {/* Tarjetas de estadísticas */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Total Proveedores</p>
            <p className="text-2xl font-bold text-gray-800">{totalProveedores}</p>
          </div>
          <div className="bg-blue-100 rounded-full p-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Activos</p>
            <p className="text-2xl font-bold text-green-600">{activos}</p>
          </div>
          <div className="bg-green-100 rounded-full p-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Productos Suministrados</p>
            <p className="text-2xl font-bold text-yellow-600">{productosSuministrados}</p>
          </div>
          <div className="bg-yellow-100 rounded-full p-2">
            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Compras del mes</p>
            <p className="text-2xl font-bold text-purple-600">{comprasMes}</p>
          </div>
          <div className="bg-purple-100 rounded-full p-2">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Buscar proveedor..."
            className="w-full rounded-lg border border-gray-300 bg-white pl-9 pr-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
          <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="flex flex-wrap gap-2">
          <select className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none">
            <option>Todos los estados</option>
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
          <select className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none">
            <option>Todos los productos</option>
            <option>Alimentos</option>
            <option>Medicamentos</option>
            <option>Higiene</option>
            <option>Accesorios</option>
            <option>Insumos</option>
          </select>
        </div>
      </div>

      {/* Tabla de proveedores */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RUC</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Productos</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {proveedores.map((prov) => (
                <tr key={prov.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs mr-3">
                        {prov.nombre.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{prov.nombre}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{prov.ruc}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{prov.telefono}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{prov.correo}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <div className="flex flex-wrap gap-1">
                      {prov.productos.map((prod, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded-full">
                          {prod}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${prov.estado === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {prov.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 mr-2 font-medium">Editar</button>
                    <button className="text-gray-400 hover:text-gray-600">Ver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-500">Mostrando {proveedores.length} de {totalProveedores} proveedores</span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Anterior</button>
            <button className="px-3 py-1 border border-blue-600 rounded-lg text-sm text-white bg-blue-600 hover:bg-blue-700">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}