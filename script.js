// Navegación móvil
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  hamburger.classList.toggle("active")
})

// Cerrar menú al hacer click en un enlace
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    hamburger.classList.remove("active")
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Smooth scrolling para navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Animación de entrada para elementos
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observar elementos para animaciones
document
  .querySelectorAll(".service-card, .skill-tag, .project-card, .timeline-content, .contact-item")
  .forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

// Efecto de escritura para el título
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Inicializar efecto de escritura cuando se carga la página
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 100)
    }, 500)
  }
})

// Parallax effect sutil
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".hero")

  parallaxElements.forEach((element) => {
    const speed = 0.2
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Contador animado para estadísticas (si decides añadir estadísticas)
function animateCounter(element, target, duration = 2000) {
  let start = 0
  const increment = target / (duration / 16)

  function updateCounter() {
    start += increment
    if (start < target) {
      element.textContent = Math.floor(start)
      requestAnimationFrame(updateCounter)
    } else {
      element.textContent = target
    }
  }

  updateCounter()
}

// Efecto de hover para las tarjetas de habilidades
document.querySelectorAll(".skill-tag").forEach((tag) => {
  tag.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.05)"
  })

  tag.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
})

// Lazy loading para imágenes
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target
      img.src = img.dataset.src
      img.classList.remove("lazy")
      imageObserver.unobserve(img)
    }
  })
})

document.querySelectorAll("img[data-src]").forEach((img) => {
  imageObserver.observe(img)
})



// Función para descargar el CV
document.getElementById('downloadCV').addEventListener('click', function () {
  // Crear un enlace temporal para la descarga
  const link = document.createElement('a');
  link.href = '/Curriculum.pdf'; // Cambia esta ruta por la ubicación real de tu CV
  link.download = 'Pablo_Moreno_Tirado_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

