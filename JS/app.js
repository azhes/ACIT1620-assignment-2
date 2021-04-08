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

let eraseText = () => {
    // deletes text from noteTitle and noteBody
    document.getElementById("noteTitle").value = ''
    document.getElementById("noteBody").value = ''
}

const saveButton = document.getElementById("saveButton")

saveButton.addEventListener("click", () => {
    // saves note title and note body in notesArray and saves notesArray in sidebar
    var noteArea = document.getElementById("noteArea")
    var createNote = document.getElementById("createNote")
    noteArea.classList.toggle('visible')
    createNote.classList.toggle('hidden')

    var noteTitle = document.getElementById("noteTitle").value
    var noteBody = document.getElementById("noteBody").value
    var notesArray = []
    notesArray.push(noteTitle)
    notesArray.push(noteBody)

    var notesList = document.getElementById("notesList")

    notesList.insertAdjacentHTML('afterbegin', `<li>${notesArray[0]}</li>`)

    eraseText()
})

const deleteButton = document.getElementById("deleteButton")

deleteButton.addEventListener("click", () => {
    // closes note taking area without saving the note
    var noteArea = document.getElementById("noteArea")
    var createNote = document.getElementById("createNote")
    noteArea.classList.toggle('visible')
    createNote.classList.toggle('hidden')

    eraseText()
})

var slideout = document.getElementById("slideout")

slideout.addEventListener("click", () => {
    var sidebar = document.getElementById("sidebar")
    sidebar.style.width == "20rem"

    console.log("done")
})