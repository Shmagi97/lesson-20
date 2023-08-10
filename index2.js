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

const tableJs = document.querySelector(".table-form");

function getAllUsers() {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((res) => res.json())
    .then((data) => {
      renderUsers(data);
    });
}

getAllUsers();

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
  console.log(tableJs);
}

// renderUsers();
