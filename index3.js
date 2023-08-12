function modalHidden(selectorisGadacema) {
  const modal = document.querySelector(selectorisGadacema);
  const btnModalClouse = document.querySelector(".modal-close");
  modal.classList.add("modal-kontent-active");
  btnModalClouse.addEventListener("click", () => {
    modal.classList.remove("modal-kontent-active");
  });
}

const btnModalOpen = document.querySelector("#btn-modal");
btnModalOpen.addEventListener("click", () => {
  modalHidden(".modal");
});

const inputTitle = document.querySelector("#user_title");
const inputBody = document.querySelector("#user_body");
const inputID = document.querySelector("#user_ID");
const formHtml = document.querySelector(".form");
