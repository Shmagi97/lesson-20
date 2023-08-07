function getAllUsers() {
  fetch("https://borjomi.loremipsum.ge/api/get-user/1")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const users = data.users;
      console.log(users);

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

getAllUsers();
