export default function Login() {
  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-[#FBF9F4] px-4 py-10 sm:px-6 lg:px-8">
      {/* ---------- Animaciones ---------- */}
      <style>{`
        @keyframes blobBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        @keyframes birdFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-4deg); }
        }
        @keyframes birdFloat2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(4deg); }
        }
        @keyframes cardIn {
          0% { opacity: 0; transform: translateY(18px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pawWalk {
          0% { opacity: 0; transform: scale(0.6); }
          18% { opacity: 1; transform: scale(1); }
          70% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.85); }
        }
        .animate-blob { animation: blobBreathe 9s ease-in-out infinite; }
        .animate-blob-slow { animation: blobBreathe 12s ease-in-out infinite; }
        .animate-bird-1 { animation: birdFloat 3.4s ease-in-out infinite; }
        .animate-bird-2 { animation: birdFloat2 3s ease-in-out infinite; }
        .animate-card-in { animation: cardIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .paw-print { animation: pawWalk 4.5s ease-in-out infinite; }
      `}</style>

      {/* ---------- Fondo decorativo (blobs) ---------- */}
      <div className="animate-blob pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-sky-100" />
      <div className="animate-blob-slow pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-emerald-50" />
      <div className="animate-blob pointer-events-none absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-orange-50" />
      <div className="animate-blob-slow pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-sky-50" />

      {/* ---------- Huellitas caminando por la pantalla ---------- */}
      <PawTrail />

      {/* ---------- Animalitos decorativos  ---------- */}
      <img
        src="img/perro1.png"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-48 w-48 object-contain object-bottom sm:h-64 sm:w-64 lg:left-4 lg:h-80 lg:w-80"
      />
      <img
        src="img/gato1.png"
        alt=""
        className="pointer-events-none absolute bottom-0 left-32 z-0 h-36 w-36 object-contain object-bottom sm:left-44 sm:h-48 sm:w-48 lg:left-60 lg:h-56 lg:w-56"
      />
      <img
        src="img/perro1.png"
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 z-0 h-48 w-48 object-contain object-bottom sm:h-64 sm:w-64 lg:right-4 lg:h-80 lg:w-80"
      />
      <img
        src="img/gato1.png"
        alt=""
        className="pointer-events-none absolute bottom-0 right-32 z-0 h-36 w-36 object-contain object-bottom sm:right-44 sm:h-48 sm:w-48 lg:right-60 lg:h-56 lg:w-56"
      />
      <img
        src="img/ave1.avif"
        alt=""
        className="animate-bird-1 pointer-events-none absolute right-6 top-20 z-0 h-24 w-24 object-contain sm:right-16 sm:h-28 sm:w-28 lg:h-32 lg:w-32"
      />
      <img
        src="img/ave2.png"
        alt=""
        className="animate-bird-2 pointer-events-none absolute left-4 top-52 z-0 h-16 w-16 -scale-x-100 object-contain sm:left-10 sm:h-20 sm:w-20"
      />

      {/* ---------- Contenido ---------- */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-1 flex-col items-center justify-center">
        {/* Encabezado / Hero */}
        <div className="mb-8 max-w-xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-orange-500">
            Cuida a tu mejor amigo
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl">
            Bienvenido a nuestra Clínica Veterinaria
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Usa tu cuenta para acceder a todas las funciones
          </p>
        </div>

        {/* ---------- Tarjeta de login ---------- */}
        <div className="animate-card-in w-full max-w-md rounded-3xl bg-white p-8 shadow-xl shadow-orange-100/60">
          {/* Icono huella */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 shadow-md shadow-blue-200 transition-transform duration-300 hover:scale-110 hover:rotate-6">
              <PawIcon className="h-9 w-9 text-white" />
            </div>
          </div>

          <h2 className="mb-6 text-center text-xl font-bold text-gray-800">
            Iniciar sesión
          </h2>

          <form className="space-y-4" action="#" method="POST">
            {/* Correo */}
            <div>
              <label htmlFor="email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:outline-none"
                placeholder="Correo electrónico"
              />
            </div>

            {/* Contraseña */}
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:outline-none"
                placeholder="Contraseña"
              />
            </div>

            {/* Checkbox y olvidó contraseña */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                  Recordarme
                </label>
              </div>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Botón de acceso */}
            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-3 text-sm font-bold text-white shadow-md shadow-orange-200 transition duration-300 hover:scale-[1.02] hover:from-orange-500 hover:to-orange-600 focus:ring-2 focus:ring-orange-300 focus:outline-none active:scale-[0.98]"
              >
                Iniciar sesión
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-xs text-gray-400">
            ¿No tienes cuenta?{" "}
            <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

/* Huellitas de perrito que "caminan" cruzando la pantalla, en zigzag y con destello secuencial */
function PawTrail() {
  const paws = [
    { left: "6%", bottom: "30%", rotate: -18, delay: 0, size: 16 },
    { left: "13%", bottom: "26%", rotate: 12, delay: 0.35, size: 18 },
    { left: "20%", bottom: "31%", rotate: -14, delay: 0.7, size: 16 },
    { left: "27%", bottom: "25%", rotate: 16, delay: 1.05, size: 18 },
    { left: "34%", bottom: "30%", rotate: -12, delay: 1.4, size: 16 },
    { left: "62%", bottom: "24%", rotate: 14, delay: 1.9, size: 16 },
    { left: "69%", bottom: "29%", rotate: -16, delay: 2.25, size: 18 },
    { left: "76%", bottom: "24%", rotate: 12, delay: 2.6, size: 16 },
    { left: "83%", bottom: "29%", rotate: -14, delay: 2.95, size: 18 },
    { left: "90%", bottom: "24%", rotate: 16, delay: 3.3, size: 16 },
  ];

  return (
    <>
      {paws.map((paw, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="paw-print pointer-events-none absolute z-0 text-orange-300"
          style={{
            left: paw.left,
            bottom: paw.bottom,
            width: paw.size,
            height: paw.size,
            transform: `rotate(${paw.rotate}deg)`,
            animationDelay: `${paw.delay}s`,
          }}
        >
          <ellipse cx="7" cy="8" rx="1.7" ry="2.2" />
          <ellipse cx="12" cy="6" rx="1.8" ry="2.4" />
          <ellipse cx="17" cy="8" rx="1.7" ry="2.2" />
          <path d="M12 10.5c-3.2 0-5.6 2.2-5.6 4.8 0 1.7 1.3 2.7 3 2.7.9 0 1.6-.3 2.6-.3s1.7.3 2.6.3c1.7 0 3-1 3-2.7 0-2.6-2.4-4.8-5.6-4.8z" />
        </svg>
      ))}
    </>
  );
}

/* Icono de huella de mascota, reutilizado en el logo y en la tarjeta */
function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <ellipse cx="7" cy="8" rx="1.7" ry="2.2" />
      <ellipse cx="12" cy="6" rx="1.8" ry="2.4" />
      <ellipse cx="17" cy="8" rx="1.7" ry="2.2" />
      <path d="M12 10.5c-3.2 0-5.6 2.2-5.6 4.8 0 1.7 1.3 2.7 3 2.7.9 0 1.6-.3 2.6-.3s1.7.3 2.6.3c1.7 0 3-1 3-2.7 0-2.6-2.4-4.8-5.6-4.8z" />
    </svg>
  );
}