const addBox = document.querySelector(".add-box"),
    popupBox = document.querySelector(".popup-box"),
    closeIcon = document.querySelector("header i"),
    titleTag = document.querySelector("input"),
    descTag = document.querySelector("textarea"),
    addBtn = document.querySelector("button");
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const notes = JSON.parse(localStorage.getItem("notes" || "[]"));

addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
})

closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
})

function showNotes() {
    notes.forEach((note) => {
        let liTag = `<li class="note">
                     <div class="details">
                         <p>${note.title}/p>
                          <span>${note.description}</span>
                      </div>
                      <div class="bottom-content">
                         <span>${note.date}</span>
                          <div class="settings">
                             <i class="uil uil-ellipsis-h"></i>
                             <ul class="menu">
                             <li> <i class="uil uil-pen"></i>Edit </li>
                             <li> <i class="uil uil-trash"></i>Delete</li>
                             </ul>
                         </div>
                     </div>
                   </li>`;
                   addBox.insertAdjacentHTML("afterend", liTag);
    });
}
showNotes();

addBtn.addEventListener("click", e => {
    e.preventDefault();
    let noteTitle = titleTag.value,
        noteDesc = descTag.value;
    let dateObj = new Date();
    month = months[dateObj.getMonth()],
        day = dateObj.getDate(),
        year = dateObj.getFullYear();

    let noteInfo = {
        title: noteTitle, description: noteDesc,
        date: `${month}, ${day}, ${year}`
    }

    notes.push(noteInfo);
    localStorage.setItem("notes", JSON.stringify(notes));
    closeIcon.click();

});
