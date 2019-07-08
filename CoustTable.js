const CoustTable = async function() {
  let CoustArray = await getList();

  let div = document.createElement("div");

  let table = document.createElement("table");

  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.textContent = "ID";
  let td1 = document.createElement("td");
  td1.textContent = "First Name";
  let td2 = document.createElement("td");
  td2.textContent = "Last Name";
  let td3 = document.createElement("td");
  td3.textContent = "Email";
  let td4 = document.createElement("td");
  td4.textContent = "Mobile";
  let td5 = document.createElement("td");
  td5.textContent = "Delete";

  tr.appendChild(td);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);

  table.appendChild(tr);
  table.classList =
    "table table-bordered text-center bg-light text-dark font-weight-bold";

  for (let i = 0; i < CoustArray.length; i++) {
    let { id, FirstName, LastName, Email, Mobile } = CoustArray[i];
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.textContent = id;
    let td1 = document.createElement("td");
    td1.textContent = FirstName;
    let td2 = document.createElement("td");
    td2.textContent = LastName;
    let td3 = document.createElement("td");
    td3.textContent = Email;
    let td4 = document.createElement("td");
    td4.textContent = Mobile;
    let td5 = document.createElement("td");
    let button = document.createElement("button");
    button.setAttribute("id", id);
    button.textContent = "X";
    button.classList = "btn btn-danger";
    button.addEventListener("click", async function(e) {
      await deleteData(id);
    });
    td5.appendChild(button);

    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    table.appendChild(tr);
  }

  div.appendChild(table);

  document.body.appendChild(div);
};
