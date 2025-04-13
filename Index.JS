document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("dark-toggle");
  const lightContent = document.querySelector(".light-content");
  const darkContent = document.querySelector(".dark-content");
  

  // Function to update mode UI
  function updateModeUI(isDarkMode) {
    document.body.classList.toggle("dark-mode", isDarkMode);

    lightContent.classList.toggle("active", !isDarkMode);
    darkContent.classList.toggle("active", isDarkMode);

    toggleBtn.textContent = isDarkMode ? "✨ Spark Mode" : "💻 Stack Mode";

    // Refresh AOS (if animations are used)
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }

  // Set initial mode to Light Mode
  updateModeUI(false);

  // Toggle button listener
  toggleBtn.addEventListener("click", () => {
    const isDarkModeNow = !document.body.classList.contains("dark-mode");
    updateModeUI(isDarkModeNow);
    AOS.refresh();
  });
});
