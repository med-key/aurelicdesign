window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash").classList.add("fade-out");

    setTimeout(() => {
      document.getElementById("splash").style.display = "none";
      document.getElementById("home").style.display = "block";
      document.body.style.overflow = "auto";
    }, 1000);

  }, 1800); // how long splash stays
});
