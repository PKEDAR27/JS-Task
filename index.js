function createForm() {
  let fn = true;
  let ln = true;
  let mb = true;
  let em = true;

  let form = document.createElement("form");
  let div1 = document.createElement("div");
  let label = document.createElement("h1");
  let span = document.createElement("span");
  label.textContent = "Customer Details";
  label.classList = "text-white font-weight-bold";
  div1.classList = "text-center text-white font-weight-bold";
  div1.appendChild(label);
  form.appendChild(div1);

  let firstNameLable = document.createElement("label");
  firstNameLable.textContent = "First Name";
  let lastNameLable = document.createElement("label");
  lastNameLable.textContent = "List Name";
  let emailLable = document.createElement("label");
  emailLable.textContent = "Email";
  let mobileLable = document.createElement("label");
  mobileLable.textContent = "Mobile";

  let firstNameInput = document.createElement("input");
  firstNameInput.setAttribute("type", "text");
  firstNameInput.setAttribute("id", "fn");
  let lastNameInput = document.createElement("input");
  lastNameInput.setAttribute("type", "text");
  lastNameInput.setAttribute("id", "ln");
  let emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  let mobileInput = document.createElement("input");
  mobileInput.setAttribute("type", "text");
  mobileInput.setAttribute("id", "mobile");

  let submit = document.createElement("input");

  submit.setAttribute("type", "Button");
  submit.value = "Submit";
  submit.classList = "btn btn-primary mt-5";

  let table = document.createElement("table");

  let tr = document.createElement("tr");
  let tr1 = document.createElement("tr");
  let tr2 = document.createElement("tr");
  let tr3 = document.createElement("tr");

  let td = document.createElement("td");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");

  td.appendChild(firstNameLable);
  td1.appendChild(firstNameInput);

  tr.appendChild(td);
  tr.appendChild(td1);

  td2.appendChild(lastNameLable);
  td3.appendChild(lastNameInput);

  tr1.appendChild(td2);
  tr1.appendChild(td3);

  td4.appendChild(emailLable);
  td5.appendChild(emailInput);

  tr2.appendChild(td4);
  tr2.appendChild(td5);

  td6.appendChild(mobileLable);
  td7.appendChild(mobileInput);

  tr3.appendChild(td6);
  tr3.appendChild(td7);

  table.appendChild(tr);
  table.appendChild(tr1);
  table.appendChild(tr2);
  table.appendChild(tr3);

  table.classList = "text-center text-white font-weight-bold tablePos";

  let div = document.createElement("div");

  div.appendChild(table);
  div.appendChild(submit);
  div.classList = "border text-white p-3 font-weight-bold text-center ";

  form.appendChild(div);

  firstNameInput.addEventListener("click", function() {
    fn = true;
    span.textContent = "";
    form.appendChild(span);
  });

  lastNameInput.addEventListener("click", function() {
    ln = true;
    span.textContent = "";
    form.appendChild(span);
  });

  emailInput.addEventListener("click", function() {
    em = true;
    span.textContent = "";
    form.appendChild(span);
  });

  mobileInput.addEventListener("click", function() {
    mb = true;
    span.textContent = "";
    form.appendChild(span);
  });

  submit.addEventListener("click", async function() {
    let data = {
      id: Math.floor(Math.random() * 10000),
      FirstName: document.getElementById("fn").value,
      LastName: document.getElementById("ln").value,
      Email: document.getElementById("email").value,
      Mobile: document.getElementById("mobile").value
    };
    let regex = /^[a-zA-Z ]{2,30}$/;
    let mobex = /^[0-9]{10}$/;
    let emex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!regex.test(data.FirstName)) {
      fn = false;
      span.textContent = "Enter a Valid First Name";
    } else if (!regex.test(data.LastName)) {
      ln = false;
      span.textContent = "Enter a Valid Last Name";
    } else if (!emex.test(data.Email)) {
      em = false;
      span.textContent = "Enter a Valid E-Mail";
    } else if (!mobex.test(data.Mobile)) {
      mb = false;
      span.textContent = "Enter a Valid Mobile Number";
    }

    if ((((fn === ln) === mb) === em) === true) {
      let response = await fetch(`http://localhost:3000/coustmor`, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      return response.json();
    } else {
      form.appendChild(span);
    }
  });

  form.classList = "text-white p-3 font-weight-bold";

  return form;
}
