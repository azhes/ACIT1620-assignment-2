/* Function to make dark mode button work
    - select dark mode button class
    - use toggle method to switch between dark mode and light mode themes
*/
const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', () => {
    // change theme
    var slideout = document.getElementById("slideout")
    var createNote = document.getElementById("createNote")
    var saveButton = document.getElementById("saveButton")
    var deleteButton = document.getElementById("deleteButton")
    var noteTitle = document.getElementById("noteTitle")
    var noteBody = document.getElementById("noteBody")

    document.body.classList.toggle('light')
    slideout.classList.toggle('light')
    createNote.classList.toggle('light')
    saveButton.classList.toggle('light')
    deleteButton.classList.toggle('light')
    noteTitle.classList.toggle('light')
    noteBody.classList.toggle('light')
})

createNote.addEventListener("click", () => {
    //makes the textarea visible
    var noteArea = document.getElementById("noteArea")
    var createNote = document.getElementById("createNote")
    noteArea.classList.toggle('visible')
    createNote.classList.toggle('hidden')
})
