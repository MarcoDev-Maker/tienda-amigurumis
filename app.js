// ===================================================
// CONFIGURACIÓN — ¡CAMBIA ESTO POR TUS DATOS! 👇
// ===================================================
const CONFIG = {
  // Número de WhatsApp con código de país, SIN + ni espacios
  // Ej: México (52) + 55 1234 5678 → "5215512345678"
  whatsapp: "5212462416097",
};

// ===================================================
// PRODUCTOS — Agrega, edita o elimina libremente
// Si tienes imágenes en /img, usa: imagen: "img/nombre.jpg"
// Si no, deja emoji y se mostrará como respaldo
// ===================================================
const productos = [
  {
    nombre: "Osito Ternura",
    descripcion: "Osito tejido en hilo de algodón, 20 cm aprox.",
    precio: 250,
    emoji: "🧸",
    imagen: null,
  },
  {
    nombre: "Conejita Lulú",
    descripcion: "Conejita con vestido de flores, 25 cm aprox.",
    precio: 320,
    emoji: "🐰",
    imagen: null,
  },
  {
    nombre: "Unicornio Arcoíris",
    descripcion: "Unicornio con melena multicolor, 30 cm aprox.",
    precio: 400,
    emoji: "🦄",
    imagen: null,
  },
  {
    nombre: "Pulpo Abrazo",
    descripcion: "Pulpo con tentáculos rizados, ideal para bebés.",
    precio: 280,
    emoji: "🐙",
    imagen: null,
  },
  {
    nombre: "Dinosaurio Rex",
    descripcion: "Dino verde esmeralda, 22 cm aprox.",
    precio: 300,
    emoji: "🦖",
    imagen: null,
  },
  {
    nombre: "Gatita Miau",
    descripcion: "Gatita gris con moño rosa, 18 cm aprox.",
    precio: 240,
    emoji: "🐱",
    imagen: null,
  },
];

// ===================================================
// RENDERIZADO DEL CATÁLOGO
// ===================================================
const grid = document.getElementById("grid-productos");

productos.forEach((p) => {
  const mensaje = encodeURIComponent(
    `¡Hola! 👋 Me interesa el amigurumi *${p.nombre}* ($${p.precio} MXN) 🧶 ¿Está disponible?`
  );
  const urlWa = `https://wa.me/${CONFIG.whatsapp}?text=${mensaje}`;

  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <div class="card__img">
      ${p.imagen ? `<img src="${p.imagen}" alt="${p.nombre}">` : p.emoji}
    </div>
    <div class="card__body">
      <h3 class="card__nombre">${p.nombre}</h3>
      <p class="card__desc">${p.descripcion}</p>
      <div class="card__footer">
        <span class="card__precio">$${p.precio}</span>
        <a href="${urlWa}" target="_blank" rel="noopener" class="btn--small">
          🛒 Pedir
        </a>
      </div>
    </div>
  `;

  grid.appendChild(card);
});

// ===================================================
// MENÚ MÓVIL
// ===================================================
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle?.addEventListener("click", () => nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

// ===================================================
// AÑO AUTOMÁTICO EN FOOTER
// ===================================================
document.getElementById("year").textContent = new Date().getFullYear();