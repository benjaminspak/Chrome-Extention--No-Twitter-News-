
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
    // Hide News on Desktop on /home, /notifications, /bookmarks, /lists, /topics, /moments
    document.querySelector("div.r-1uaug3w").setAttribute("style", "display: none;")

    // Hide News on Profiles
    document.querySelectorAll("div.r-1uaug3w")[1].setAttribute("style", "display: none;")
});


