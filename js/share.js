function toggleShareMenu() {
    var shareMenu = document.getElementById("shareMenu");
    shareMenu.style.display = (shareMenu.style.display === "block") ? "none" : "block";
  }

  function shareOnTwitter() {
    window.location.href = "https://twitter.com/";
  }

  function shareOnFacebook() {
    window.location.href = "https://www.facebook.com/";
  }

  function shareOnLinkedIn() {
    window.location.href = "https://www.linkedin.com/";
  }
  
    var svgElement = document.getElementById("svg1");
    var clicked = false;
    var likeCounterElement = document.getElementById("likeCounter");
    var likes = 0;

    svgElement.addEventListener("click", function() {
      if (clicked) {
        svgElement.style.fill = "rgb(255, 255, 255)";
        svgElement.style.transform = "scale(1)";
        likes = 0;

      } else {
        svgElement.style.fill = "rgb(255, 0, 0)";
        svgElement.style.transform = "scale(1.2)";
        likes++;
      }

      likeCounterElement.textContent = likes + (likes !== 1 ? "" : "");
      clicked = !clicked;
    });