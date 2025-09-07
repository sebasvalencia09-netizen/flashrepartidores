export default function Home() {
  return (
    <main className="p-8 space-y-12">
      {/* Hero o Bienvenida */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Bienvenido a Flash Repartidores 🚀
        </h1>
        <p className="text-lg text-gray-700">
          Tu aplicación está corriendo con Next.js 14 y lista para producción.
        </p>
      </section>

      {/* Contacto */}
      <section id="contacto" className="p-8 bg-gray-100 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Contáctanos</h2>
        <form
          action="https://formspree.io/f/tu-endpoint-id"
          method="POST"
          className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input
              type="text"
              name="nombre"
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Mensaje</label>
            <textarea
              name="mensaje"
              rows={4}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>

        <div className="mt-6 text-center">
          <p>
            Email:{" "}
            <a
              href="mailto:sebasvalencia09@gmail.com"
              className="text-blue-600"
            >
              sebasvalencia09@gmail.com
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a href="https://wa.me/573227271076" className="text-green-600">
              +57 322 727 1076
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
