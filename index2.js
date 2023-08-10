const modalKontent = document.querySelector(".modal-content");
const btnModal = document.querySelector(".btn");
const btnModalClose = document.querySelector(".btn-close");

btnModal.addEventListener("click", () => {
  modalKontent.classList.add("modal-kontent-active");
});

btnModalClose.addEventListener("click", () => {
  modalKontent.classList.remove("modal-kontent-active");
});

// function userAction() {}

const inputTitle = document.querySelector("#user_title");
const inputBody = document.querySelector("#user_body");
const inputID = document.querySelector("#user_ID");
const formHtml = document.querySelector(".form");
const btnTd = document.querySelectorAll(".btn-td");

function CreatNewUser(newUser) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
    })

    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("finally");
    });
}

formHtml.addEventListener("submit", (el) => {
  el.preventDefault();
  // formHtml.reset();

  const newUser = {
    title: inputTitle.value,
    body: inputBody.value,
    userId: inputID.value,
  };

  CreatNewUser(newUser);

  //   console.log(newUser);
});

// serveridan informaciis wamgeba da htmlshi daxatva

// const tdHtmlTitle = document.querySelectorAll(".td-html-title");
// const tdHtmlTitleArray = Array.from(tdHtmlTitle);
// const tdHtmlBody = document.querySelectorAll(".td-html-body");
// const tdHtmlBodyArray = Array.from(tdHtmlBody);
// const tdHtmlId = document.querySelectorAll(".td-html-userId");
// const tdHtmlIdArray = Array.from(tdHtmlId);

fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  .then((res) => res.json())
  .then((data) => {
    renderUsers(data);
  });

const tableJs = document.querySelector(".table-form");

function getAllUsers() {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((res) => res.json())
    .then((data) => {
      renderUsers(data);
    });
}

// getAllUsers();  am funqcias gamodzaxeb mashin roca cxrili serveridan aris gasanaxlebeli

const btnModalUserInfoClose = document.querySelector(".btn-close-user-info");
const modalUserInfo = document.querySelector(".modal-user-info");

function renderUsers(sarenderoElementebi) {
  const dataElementHtmlshi = sarenderoElementebi.map((el, index) => {
    return `

       
        
     <tr>
        <td class="td-html-title"> ${el.title} </td>
        <td class="td-html-body">${el.body} </td>
        <td class="td-html-userId"> ${el.userId} </td>

        <td class="btn-td">
          <button class="delete" data-user-id="100">DELETE</button>
          <button class="edit" data-user-id="100">EDIT</button>
        </td>
      </tr>
        
        `;
  });

  tableJs.innerHTML = dataElementHtmlshi.join("");

  const userTitleInfoInput = document.querySelector("#user_title-info");
  const userBodyInfoInput = document.querySelector("#user_body-info");
  const userIdInfoInput = document.querySelector("#user_ID-info");
  const userIdInfoHidden = document.querySelector("#user_id-info-in-server");

  const btnEdit = document.querySelectorAll(".edit");
  const btnEditArray = Array.from(btnEdit);

  btnEditArray.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      modalUserInfo.style.display = "block";
      userTitleInfoInput.value = sarenderoElementebi[index].title;
      userBodyInfoInput.value = sarenderoElementebi[index].body;
      userIdInfoInput.value = sarenderoElementebi[index].userId;
    });
  });
  console.log(sarenderoElementebi);
}

btnModalUserInfoClose.addEventListener("click", () => {
  modalUserInfo.style.display = "none";
});
