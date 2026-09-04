let tabs = document.querySelectorAll(".tab");

let contents = document.querySelectorAll(".content");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    // Sab content hide karo

    contents.forEach(function (content) {
      content.classList.remove("active");
    });

    // Button ka data-tab lo

    let tabName = tab.dataset.tab;

    // Matching content select karo

    let selectedContent = document.querySelector("#" + tabName);

    // Usko show karo

    selectedContent.classList.add("active");
  });
});
