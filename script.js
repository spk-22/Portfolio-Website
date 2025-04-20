// Custom cursor
document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor")
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
  
    // Expand cursor on hover over links and buttons
    const hoverElements = document.querySelectorAll("a, button, .project-card, .skill-card")
  
    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.style.width = "50px"
        cursor.style.height = "50px"
        cursor.style.backgroundColor = "rgba(255, 107, 107, 0.2)"
      })
  
      element.addEventListener("mouseleave", () => {
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.backgroundColor = "rgba(255, 107, 107, 0.5)"
      })
    })
  })
  
  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    const backToTop = document.querySelector(".back-to-top")
  
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
      backToTop.classList.add("visible")
    } else {
      navbar.classList.remove("scrolled")
      backToTop.classList.remove("visible")
    }
  
    // Active nav link based on scroll position
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-link")
  
    let current = ""
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
  
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })
  
    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active")
      }
    })
  })
  
  // Project filters
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")
  
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"))
  
      // Add active class to clicked button
      btn.classList.add("active")
  
      const filter = btn.getAttribute("data-filter")
  
      projectCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })
  
  // Form submission
  const form = document.querySelector("form")
  
  form.addEventListener("submit", (e) => {
    e.preventDefault()
  
    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value
  
    // Simple validation
    if (name && email && message) {
      // In a real application, you would send this data to a server
      alert("Thank you for your message! I will get back to you soon.")
      form.reset()
    } else {
      alert("Please fill in all required fields.")
    }
  })
  
  // Theme toggle
  const themeToggle = document.querySelector(".theme-toggle")
  const root = document.documentElement
  
  themeToggle.addEventListener("click", () => {
    if (themeToggle.innerHTML.includes("fa-moon")) {
      // Switch to dark mode
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
      document.body.classList.add("dark-mode")
    } else {
      // Switch to light mode
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
      document.body.classList.remove("dark-mode")
    }
  })
  
  // Animate skill progress bars on scroll
  const skillSection = document.querySelector(".skills-section")
  const progressBars = document.querySelectorAll(".skill-progress")
  
  const showProgress = () => {
    progressBars.forEach((progress) => {
      progress.style.width = progress.getAttribute("style").split(":")[1]
    })
  }
  
  window.addEventListener("scroll", () => {
    const sectionPos = skillSection.getBoundingClientRect().top
    const screenPos = window.innerHeight / 1.3
  
    if (sectionPos < screenPos) {
      showProgress()
    }
  })
  