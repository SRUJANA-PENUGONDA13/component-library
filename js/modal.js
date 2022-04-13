const simpleModal = document.querySelector("#modal-wrapper");
const liveDemoBtn = document.querySelector("#live-demo-btn");

const actionBtns = document.querySelectorAll(".modal-btn");

liveDemoBtn.addEventListener("click", () => {
  simpleModal.style.display = "flex";
});

actionBtns.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", () => {
    if (btn.parentNode.id === "modal-btns") {
      simpleModal.style.display = "none";
    }
  });
});
