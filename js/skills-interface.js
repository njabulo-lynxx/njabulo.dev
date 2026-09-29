const buttons = document.querySelectorAll(".group-button");
const groups = document.querySelectorAll(".group-content ul");

buttons.forEach(function(button) {

  button.addEventListener("click", function(event) {

    const target = event.target.dataset.target;
    const targetElement = document.getElementById(target);

    groups.forEach(function(group) {
      group.style.display = "none";
    });

    buttons.forEach(function(button) {
      button.classList.remove("active");
    });

    targetElement.style.display = "block";
    event.target.classList.add("active");

  });

});