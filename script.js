document.addEventListener("DOMContentLoaded", function () {
  // Ensure the initial state is set correctly
  var additionalContent = document.getElementById("additionalContent");
  additionalContent.style.display = "none";
});

function toggleReadMore() {
  var additionalContent = document.getElementById("additionalContent");
  var button = document.querySelector("button");

  var additionalContentStyle = window.getComputedStyle(additionalContent);

  if (additionalContentStyle.display === "none" || additionalContentStyle.display === "") {
    additionalContent.style.display = "inline";
    button.innerHTML = "Read Less";
  } else {
    additionalContent.style.display = "none";
    button.innerHTML = "Read More";
  }
}

/*
function showContent(sectionId) {
  // Hide all content sections
  var sections = document.querySelectorAll('.content-section');
  sections.forEach(function (section) {
      section.style.display = 'none';
  });

  // Show the selected content section
  var selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
      selectedSection.style.display = 'block';
  }
  */

function showContent(sectionId) {
  // Hide all content sections
  var sections = document.querySelectorAll('.content-section');
  sections.forEach(function (section) {
    section.style.display = 'none';
  });

  // Show the selected content section
  var selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'default';
  }
}
