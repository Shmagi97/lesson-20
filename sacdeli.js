function modalAction(selector) {
  const modal = document.querySelector(selector);
  const closeBtn = modal.querySelector(".modal-close");
  modal.classList.add("open");
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
  });
}

const openRegFormBtn = document.querySelector("#open-reg-form");

openRegFormBtn.addEventListener("click", () => {
  modalAction("#reg-modal");
});

const createUserUrl = "https://borjomi.loremipsum.ge/api/register", //method POST  ყველა ველი სავალდებულო
  getAllUsersUrl = "https://borjomi.loremipsum.ge/api/all-users", //method GET
  getSingleUserUrl = "https://borjomi.loremipsum.ge/api/get-user/1 ", //id, method  GET
  updateUserUrl = "https://borjomi.loremipsum.ge/api/update-user/1 ", //id, method PUT  ყველა ველი სავალდებულო
  deleteUserUrl = "https://borjomi.loremipsum.ge/api/delete-user/1"; //id, method DELETE

const regForm = document.querySelector("#reg"),
  userName = document.querySelector("#user_name"),
  userSurname = document.querySelector("#user_surname"),
  userEmail = document.querySelector("#user_email"),
  userPhone = document.querySelector("#user_phone"),
  userPersonalID = document.querySelector("#user_personal-id"),
  userZip = document.querySelector("#user_zip-code"),
  userGender = document.querySelector("#user_gender"),
  // user id ფორმში, რომელიც გვჭირდება დაედითებისთვის
  user_id = document.querySelector("#user_id");

const user = {
  first_name: "steso",
  last_name: "text",
  phone: "123456789",
  id_number: "12345678909",
  email: "text@gmail.com",
  gender: "male",
  zip_code: "1245",
};

// TODO: დაასრულეთ შემდეგი ფუნქციები

function userActions() {
  // 1. ცხრილში ღილაკებზე უნდა მიამაგროთ event listener-ები
  // 2. იქნება 2 ღილაკი რედაქტირება და წაშლა როგორც "ცხრილი.png" ში ჩანს
  // 3. id შეინახეთ data-user-id ატრიბუტად ღილაკებზე, data ატრიბუტებზე წვდომა შეგიძლიათ dataset-ის გამოყენებით მაგ:selectedElement.dataset
  // 4. წაშლა ღილაკზე დაჭერისას უნდა გაიგზავნოს წაშლის მოთხოვნა (deleteUser ფუნქციის მეშვეობით) სერვერზე და გადაეცეს id
  // 5. ედიტის ღილაკზე უნდა გაიხსნას მოდალი სადაც ფორმი იქნება იმ მონაცემებით შევსებული რომელზეც მოხდა კლიკი.
  //   ედიტის ღილაკზე უნდა გამოიძახოთ getUserInfo ფუნქცია და რომ დააბრუნებს ერთი მომხმარებლის დატას
  //    (ობიექტს და არა მასივს)  ეს დატა უნდა შეივსოს ფორმში და ამის შემდეგ შეგიძლიათ დააედიტოთ ეს ინფორმაცია და ფორმის
  //    დასაბმითებისას უნდა მოხდეს updateUser() ფუნქციის გამოძახება, სადაც გადასცემთ განახლებულ იუზერის ობიექტს, გვჭირდება
  //    იუზერის აიდიც, რომელიც  მოდალის გახსნისას user_id-ის (hidden input არის და ვიზუალურად არ ჩანს) value-ში შეგიძლიათ
  //    შეინახოთ
  //
}

function renderUsers(usersArray) {
  // TODO: usersArray არის სერვერიდან დაბრუნებული ობიექტების მასივი
  // TODO: ამ მონაცმების მიხედვით html ში ჩასვით ცხრილი როგორც "ცხრილი.png" შია

  console.log(usersArray);
  userActions(); // ყოველ რენდერზე ახლიდან უნდა მივაბათ ივენთ ლისნერები
}

function getAllUsers() {
  fetch("https://borjomi.loremipsum.ge/api/all-users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const users = data.users;
      // console.log(users);

      // html-ში გამოტანა მონაცემების
      renderUsers(users);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("finnaly");
    });
}

function deleteUser(id) {
  fetch(`http://borjomi.loremipsum.ge/api/delete-user/${id}`, {
    method: "delete",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // გვიბრუნებს სტატუსს
      getAllUsers(); // შენახვის, ედიტირების და წაშლის შემდეგ ახლიდან უნდა წამოვიღოთ დატა
      // ამიტომ აქ ყველგან დაგვჭირდება უბრალოდ ამ ფუნქციის გამოძახება, რომელიც ხელახლა გადახატავს ინფორმაციას
    })
    .catch((error) => {
      console.log(error);
    });
}

function getUserInfo(id) {
  fetch(`https://borjomi.loremipsum.ge/api/get-user/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // გვიბრუნებს იუზერის ობიექტს
      console.log(data);
    });
}

function updateUser(userObj) {
  // მიიღებს დაედითებულ ინფორმაციას და გააგზავნით სერვერზე
  // TODO დაასრულეთ ფუნქცია
  //  method: "put",  http://borjomi.loremipsum.ge/api/update-user/${userObj.id}
  // TODO: შენახვის, ედიტირების და წაშლის შემდეგ ახლიდან წამოიღეთ დატა
}

function createUser(userObj) {
  fetch("https://borjomi.loremipsum.ge/api/register", {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      console.log(data);
      // გვიბრუნებს სტატუსს (წარმატებით გაიგზავნა თუ არა) და დამატებული იუზერის ობიექტს
      // დატის მიღების შემდეგ ვწერთ ჩვენს კოდს
      console.log(data);
      // შენახვის, ედიტირების და წაშლის შემდეგ ხელახლა გამოგვაქვს ყველა იუზერი
      getAllUsers();
    });
}

getAllUsers();

regForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userObj = {
    id: user_id.value, //ეს #user_id hidden input გვაქვს html-ში და ამას გამოვიყენებთ მხოლოდ დაედითებისთვის
    first_name: userName.value,
    last_name: userSurname.value,
    phone: userPhone.value,
    id_number: userPersonalID.value,
    email: userEmail.value,
    gender: userGender.value,
    zip_code: userZip.value,
  };

  // console.log(userObj);
  // createUser(userObj);

  //  TODO: თუ user_id.value არის ცარიელი (თავიდან ცარიელია) მაშინ უნდა შევქმნათ  -->  addNewUser(user);
  // თუ დაედითებას ვაკეთებთ, ჩვენ ვანიჭებთ მნიშვნელობას userActions ფუნქციაში
  // TODO: თუ user_id.value არის (არაა ცარიელი სტრინგი) მაშინ უნდა დავაედიტოთ, (როცა ფორმს ედითის ღილაკის შემდეგ იუზერის ინფუთით ვავსებთ, ვაედითებთ და ვასაბმითებთ) -->  updateUser(user);
});

async function getAllUsersAsync() {
  try {
    const response = await fetch(
      "https://borjomi.loremipsum.ge/api/all-users",
      {
        method: "get",
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
}

// getAllUsersAsync();

function addPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
