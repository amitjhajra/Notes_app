// const notesContainer = document.querySelector(".notes-container");
// const btnDiv=document.querySelector(".btn-div");
const notesWrapper = document.querySelector(".notes-wrapper");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".notes-wrapper");

function showNotes() {
  notesWrapper.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();
function updateStorage() {
  localStorage.setItem("notes", notesWrapper.innerHTML);
}

createBtn.addEventListener("click", () => {
  let noteWrapper = document.createElement("div");
  noteWrapper.classList.add("note-wrapper");

  let div1 = document.createElement("div");
  div1.classList.add("notes-container");

  let div2 = document.createElement("div");
  div2.classList.add("btn-div");

  let inputBox = document.createElement("p");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");

  let img = document.createElement("img");
  img.src = "images/delete.png";
  img.setAttribute("contenteditable", "false");

  let saveBtn = document.createElement("button");
  saveBtn.classList.add("save-btn");
  saveBtn.innerText = "Save";

  inputBox.appendChild(img);
  div1.appendChild(inputBox);
  div2.appendChild(saveBtn);
  inputBox.focus();

  noteWrapper.appendChild(div1);
  noteWrapper.appendChild(div2);

  notesWrapper.appendChild(noteWrapper);

  saveBtn.addEventListener("click", updateStorage);
  notesWrapper.addEventListener("click", (e) => {

  if (e.target.tagName === "IMG") {

    const note = e.target.parentElement.parentElement.parentElement;

    note.remove();
    updateStorage();

  }

});


});
// notesWrapper.addEventListener("click", (e) => {
//   console.log("clicked", e.target);
// });

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
