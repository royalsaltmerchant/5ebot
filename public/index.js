// Event listener for tag hrefs
var tags = document.querySelectorAll(".command");
tags.forEach(function (tags) {
  // add click listeneres for href
  tags.addEventListener("click", function (e) {
    if (e.target === tags) {
      // Ensure we're clicking on the tags itself
      location.hash = tags.getAttribute("id");
      copyToClipboard(window.location.href);
    }
  });
});

// copy
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Could not copy text: ", err);
    }
  );
}