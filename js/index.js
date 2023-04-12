document.getElementById("startBtn").addEventListener("click", function() {
  var loader = document.querySelector(".loader");
  loader.style.display = "block";
  setTimeout(function() {
    window.location.href = "your-page-url";
  }, 2000);
});

const startBtn = document.querySelector("#startBtn");

function startLoading() {
  startBtn.classList.add("loading");
}

function stopLoading() {
  startBtn.classList.remove("loading");
}
