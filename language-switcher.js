document
  .getElementById("language-select")
  .addEventListener("change", function () {
    const selectedLanguage = this.value;
    fetch(`translations/${selectedLanguage}.json`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("header").textContent = data.header;
        document.getElementById("slogan").textContent = data.slogan;
        document.getElementById("introduction").textContent = data.introduction;

        document.getElementById("experiences").textContent = data.experiences;
        document.getElementById("services").textContent = data.services;
        document.getElementById("projects").textContent = data.projects;
        document.getElementById("contact").textContent = data.contact;
      });
  });
