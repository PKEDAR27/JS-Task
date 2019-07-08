async function getList(post) {
  const res = await fetch(`http://localhost:3000/coustmor`);
  return await res.json();
}

async function deleteData(coustID) {
  const response = await fetch(`http://localhost:3000/coustmor/` + coustID, {
    method: "delete"
  });
  const json = await response.json();
  window.location.reload();
  return json;
}
