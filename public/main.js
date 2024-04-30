document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const talkContainers = document.querySelectorAll(".talk");
  
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      talkContainers.forEach(function (talkContainer) {
        const speakerName = talkContainer.querySelector("h4").innerText.toLowerCase();
  
        if (speakerName.includes(searchTerm)) {
          talkContainer.style.display = "block";
        } else {
          talkContainer.style.display = "none";
        }
      });
    });
  });