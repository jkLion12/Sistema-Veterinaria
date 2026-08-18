// src/app/dashboard/productos/page.tsx
export default function ProductosPage() {
  // Datos de ejemplo (luego vendrán de tu base de datos)
  const productos = [
    {
      id: 1,
      nombre: 'Alimento para perro adulto 15kg',
      categoria: 'Alimentos',
      stock: 25,
      precio: 89.90,
      estado: 'Disponible',
      imagen: null, // null usará un placeholder
    },
    {
      id: 2,
      nombre: 'Vacuna antirrábica',
      categoria: 'Medicamentos',
      stock: 12,
      precio: 45.00,
      estado: 'Disponible',
      imagen: null,
    },
    {
      id: 3,
      nombre: 'Shampoo antipulgas 500ml',
      categoria: 'Higiene',
      stock: 8,
      precio: 32.50,
      estado: 'Stock bajo',
      imagen: null,
    },
    {
      id: 4,
      nombre: 'Collar antipulgas para gato',
      categoria: 'Accesorios',
      stock: 0,
      precio: 18.90,
      estado: 'Agotado',
      imagen: null,
    },
    {
      id: 5,
      nombre: 'Alimento para gato esterilizado 7kg',
      categoria: 'Alimentos',
      stock: 15,
      precio: 55.00,
      estado: 'Disponible',
      imagen: null,
    },
    {
      id: 6,
      nombre: 'Jeringas 5ml (caja x 100)',
      categoria: 'Insumos',
      stock: 3,
      precio: 120.00,
      estado: 'Stock bajo',
      imagen: null,
    },
    {
      id: 7,
      nombre: 'Antiparasitario oral para perros',
      categoria: 'Medicamentos',
      stock: 20,
      precio: 28.00,
      estado: 'Disponible',
      imagen: null,
    },
    {
      id: 8,
      nombre: 'Cama para perro grande',
      categoria: 'Accesorios',
      stock: 5,
      precio: 150.00,
      estado: 'Disponible',
      imagen: null,
    },
    {
      id: 9,
      nombre: 'Desinfectante para heridas 250ml',
      categoria: 'Higiene',
      stock: 10,
      precio: 22.00,
      estado: 'Disponible',
      imagen: null,
    },
  ];

  // Función para obtener el color del estado
  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'Disponible':
        return 'bg-green-100 text-green-800';
      case 'Stock bajo':
        return 'bg-yellow-100 text-yellow-800';
      case 'Agotado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Función para obtener ícono según categoría
  const getIconoByCategoria = (categoria: string) => {
    switch (categoria) {
      case 'Alimentos':
        return '🍖';
      case 'Medicamentos':
        return '💊';
      case 'Higiene':
        return '🧴';
      case 'Accesorios':
        return '🎀';
      case 'Insumos':
        return '🧰';
      default:
        return '📦';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 font-sans">
      {/* Encabezado */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Productos (Inventario)</h1>
          <p className="text-sm text-gray-500">Gestión de productos, medicamentos y accesorios</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nuevo Producto
          </button>
        </div>
      </div>

      {/* Tarjetas de estadísticas */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Total Productos</p>
            <p className="text-2xl font-bold text-gray-800">45</p>
          </div>
          <div className="bg-blue-100 rounded-full p-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Stock Bajo</p>
            <p className="text-2xl font-bold text-yellow-600">8</p>
          </div>
          <div className="bg-yellow-100 rounded-full p-2">
            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Agotados</p>
            <p className="text-2xl font-bold text-red-600">3</p>
          </div>
          <div className="bg-red-100 rounded-full p-2">
            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Categorías</p>
            <p className="text-2xl font-bold text-purple-600">5</p>
          </div>
          <div className="bg-purple-100 rounded-full p-2">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Buscar producto..."
            className="w-full rounded-lg border border-gray-300 bg-white pl-9 pr-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
          <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="flex flex-wrap gap-2">
          <select className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none">
            <option>Todas las categorías</option>
            <option>Alimentos</option>
            <option>Medicamentos</option>
            <option>Higiene</option>
            <option>Accesorios</option>
            <option>Insumos</option>
          </select>
          <select className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none">
            <option>Todos los estados</option>
            <option>Disponible</option>
            <option>Stock bajo</option>
            <option>Agotado</option>
          </select>
        </div>
      </div>

      {/* Grid de cards de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* Imagen / Placeholder */}
            <div className="h-32 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
              {producto.imagen ? (
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="text-5xl">{getIconoByCategoria(producto.categoria)}</div>
              )}
              {/* Badge de categoría sobre la imagen */}
              <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full shadow-sm text-gray-700">
                {producto.categoria}
              </span>
            </div>

            {/* Cuerpo de la card */}
            <div className="p-3 flex flex-col flex-1">
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-tight mb-1">
                {producto.nombre}
              </h3>

              <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100 text-xs">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">Stock:</span>
                  <span className={`font-medium ${producto.stock <= 0 ? 'text-red-600' : 'text-gray-700'}`}>
                    {producto.stock}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">Precio:</span>
                  <span className="font-bold text-blue-600">S/{producto.precio.toFixed(2)}</span>
                </div>
              </div>

              {/* Estado y acciones */}
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getEstadoColor(producto.estado)}`}>
                  {producto.estado}
                </span>
                <div className="flex items-center space-x-1">
                  <button className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Editar">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button className="p-1 text-gray-400 hover:bg-gray-100 rounded-lg transition" title="Ver">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-gray-500">Mostrando 9 de 45 productos</span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">Anterior</button>
          <button className="px-3 py-1 border border-blue-600 rounded-lg text-sm text-white bg-blue-600 hover:bg-blue-700 transition">1</button>
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">2</button>
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">3</button>
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">Siguiente</button>
        </div>
      </div>
    </div>
  );
}