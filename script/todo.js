// Mohit Kataria, Student Number: 8820649
let listNodes = document.getElementsByTagName("LI");

for (let i = 0; i < listNodes.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("X");

  span.className = "delete";
  span.appendChild(txt);
  listNodes[i].appendChild(span);
}

// Cross(X) button will hide the clicked item from list.
let deleteArr = document.getElementsByClassName("delete");
for (let i = 0; i < deleteArr.length; i++) {
  deleteArr[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
// Whenever we click on task, it will be shown as checked
let list = document.querySelector('ul');
list.addEventListener('click', function(ele) {
  if (ele.target.tagName === 'LI') {
    ele.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
// new
function addTask() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("inputValue").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You need to write something to add to the list!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("inputValue").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("X");
  span.className = "delete";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < deleteArr.length; i++) {
    deleteArr[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}