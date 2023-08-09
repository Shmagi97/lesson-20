// fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     const users = data.users;
//     console.log(users);

//     // html-ში გამოტანა მონაცემების
//     // renderUsers(users);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finnaly");
//   });
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

  console.log(newUser);
});

const tdHtmlTitle = document.querySelectorAll(".td-html-title");
const tdHtmlTitleArray = Array.from(tdHtmlTitle);
const tdHtmlBody = document.querySelectorAll(".td-html-body");
const tdHtmlBodyArray = Array.from(tdHtmlBody);
const tdHtmlId = document.querySelectorAll(".td-html-userId");
const tdHtmlIdArray = Array.from(tdHtmlId);

const btnDelete = document.querySelectorAll(".delete");
const btnEdit = document.querySelectorAll(".edit");
const modalUserInfo = document.querySelector(".modal-user-info");
const btnModalUserInfoClose = document.querySelector(".btn-close-user-info");

const userTitleInfoButton = document.querySelector("#user_title-info");
const userBodyInfoButton = document.querySelector("#user_body-info");
const userIdInfoButton = document.querySelector("#user_ID-info");
const userIdInfoHidden = document.querySelector("#user_id-info");

fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    data.map((el, index) => {
      tdHtmlTitleArray[index].innerText = el.title;
      tdHtmlBodyArray[index].innerText = el.body;
      tdHtmlIdArray[index].innerText = el.userId;

      // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   აგვიანებს ინდექსის გადაცემას

      function elementIdDeleteBatonidan(btnDeleteIndex) {
        btnDelete[btnDeleteIndex].addEventListener("click", () => {
          userIdInfoHidden.value = el.id;
          console.log(userIdInfoHidden.value, "esaa");
        });
      }

      elementIdDeleteBatonidan(index);

      //  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

      function elementIndexbTenidan(btnIndex) {
        btnEdit[btnIndex].addEventListener("click", () => {
          modalUserInfo.style.display = "block";
          userTitleInfoButton.value = tdHtmlTitleArray[btnIndex].innerText;
          userBodyInfoButton.value = tdHtmlBodyArray[btnIndex].innerText;
          userIdInfoButton.value = tdHtmlIdArray[btnIndex].innerText;
          userIdInfoHidden.value = el.id;
        });
      }

      elementIndexbTenidan(index);

      btnModalUserInfoClose.addEventListener("click", () => {
        modalUserInfo.style.display = "none";
        userTitleInfoButton.value = "";
        userBodyInfoButton.value = "";
        userIdInfoButton.value = "";
        userIdInfoHidden.value = "";
      });
    });
  });

function newUserEditFN(newUserEdit) {
  fetch(`https://jsonplaceholder.typicode.com/posts/ ${newUserEdit.id}`, {
    method: "PUT",
    body: JSON.stringify(newUserEdit),
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

const formEditInfo = document.querySelector(".form-edit-info");

formEditInfo.addEventListener("submit", (el) => {
  el.preventDefault();
  formEditInfo.reset();

  const newUserEdit = {
    id: userIdInfoHidden.value,
    title: userTitleInfoButton.value,
    body: userBodyInfoButton.value,
    userId: userIdInfoButton.value,
  };

  newUserEditFN(newUserEdit);
  // console.log(newUserEdit.id);
});

function deleteUser(deletedUser) {
  fetch(`https://jsonplaceholder.typicode.com/posts/ ${deletedUser.id}`, {
    method: "DELETE",
    body: JSON.stringify(deletedUser),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("finally");
    });
}

const btnDeleteArray = Array.from(btnDelete);

btnDeleteArray.forEach((btn, index) => {
  function deleteHtmTableInfo(btnIndex) {
    tdHtmlTitle[btnIndex].remove();
    tdHtmlBody[btnIndex].remove();
    tdHtmlId[btnIndex].remove();
    btnTd[btnIndex].remove();
    btnDelete[btnIndex].remove();
    btnEdit[btnIndex].remove();
  }

  btn.addEventListener("click", () => {
    const deletedUser = {
      id: userIdInfoHidden.value,
    };

    console.log(deletedUser.id, "meore");

    deleteUser(deletedUser);

    deleteHtmTableInfo(index);
  });
});
