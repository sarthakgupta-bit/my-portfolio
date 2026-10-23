
const projects = [
    {
      title: "Python Programs Collection",
      description: "Factorial, Fibonacci and structure-to-dictionary conversion.",
      tech: "Python"
    },
    {
      title: "Messy Python Code Improvement",
      description: "Improved messy Python code with AI assistance.",
      tech: "Python, AI"
    },
    {
      title: "Bug Fixing Using Cursor AI",
      description: "Identified and corrected errors in a program.",
      tech: "Python, Cursor AI"
    },
    {
      title: "Interactive Quiz Application",
      description: "An interactive application for answering quiz questions.",
      tech: "HTML, CSS, JavaScript"
    },
    {
      title: "Book Reading List Application",
      description: "An application to manage a personal reading list.",
      tech: "JavaScript"
    }
  ];
  
  const projectList = document.getElementById("project-list");
  const searchInput = document.getElementById("project-search");
  
  function displayProjects(search = "") {
    const filtered = projects.filter(project =>
      (project.title + " " + project.description + " " + project.tech)
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  
    projectList.innerHTML = "";
  
    if (filtered.length === 0) {
      projectList.textContent = "No matching projects found.";
      return;
    }
  
    filtered.forEach(project => {
      const card = document.createElement("article");
      card.className = "project-card";
  
      const title = document.createElement("h3");
      title.textContent = project.title;
  
      const description = document.createElement("p");
      description.textContent = project.description;
  
      const tech = document.createElement("p");
      tech.textContent = "Technologies: " + project.tech;
  
      card.append(title, description, tech);
      projectList.appendChild(card);
    });
  }
  
  searchInput.addEventListener("input", event => {
    displayProjects(event.target.value);
  });
  
  document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  
    const darkMode = document.body.classList.contains("dark");
    document.getElementById("theme-toggle").textContent =
      darkMode ? "☀️" : "🌙";
  });
  
  displayProjects();
  