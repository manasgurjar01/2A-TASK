let error1 = document.querySelector("#error");
      let success1 = document.querySelector("#success");

      let btn = document.querySelector("#btn");

      btn.addEventListener("click", () => {
        error1.innerHTML = "";
        success1.innerHTML = "";

        let input = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;

        if (input.trim() == "") {
          error1.innerHTML = "Please enter valid email!";
        } else if (password.trim() == "") {
          error1.innerHTML = "Please enter valid password!";
        } else {
          success1.innerHTML = "Submit successfully";
        }
      });