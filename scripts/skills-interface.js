const buttons = document.querySelectorAll(".group-button");
const groups = document.querySelectorAll(".group-content ul");

buttons.forEach(function(button) {

  button.addEventListener("click", function(event) {

    const target = event.target.dataset.target;
    const targetElement = document.getElementById(target);
    console.log(target)

    groups.forEach(function(group) {
      group.style.display = "none";
    });

    targetElement.style.display = "block";

  });

});