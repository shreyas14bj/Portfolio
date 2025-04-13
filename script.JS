document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("dark-toggle");
  const lightContent = document.querySelector(".light-content");
  const darkContent = document.querySelector(".dark-content");

  // Function to update the mode UI
  function updateModeUI(isDarkMode) {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      lightContent.classList.remove("active");
      darkContent.classList.add("active");
      toggleBtn.textContent = "✨ Spark Mode";
    } else {
      document.body.classList.remove("dark-mode");
      lightContent.classList.add("active");
      darkContent.classList.remove("active");
      toggleBtn.textContent = "💻 Stack Mode";
    }

    // Refresh AOS animations if used
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }

  // Set initial state
  let isDarkMode = false;
  updateModeUI(isDarkMode);

  // Toggle dark mode on button click
  toggleBtn.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    updateModeUI(isDarkMode);
  });
});
