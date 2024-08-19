document
  .getElementById("language-select")
  .addEventListener("change", function () {
    const selectedLanguage = this.value;
    if (selectedLanguage === "tr") {
      window.location.href = "index_tr.html";
    } else if (selectedLanguage === "en") {
      window.location.href = "index_en.html";
    }
  });
