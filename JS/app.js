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
    // var noteButton = document.getElementById("noteButton")
    var sidebarToggle = document.getElementById("sidebarToggle")

    document.body.classList.toggle('light')
    slideout.classList.toggle('light')
    createNote.classList.toggle('light')
    saveButton.classList.toggle('light')
    deleteButton.classList.toggle('light')
    noteTitle.classList.toggle('light')
    noteBody.classList.toggle('light')
    // noteButton.classList.toggle('light')
    sidebarToggle.classList.toggle('light')
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

    notesList.insertAdjacentHTML('afterbegin', `<li id="notesArray"><button id="noteButton">${notesArray[0]}</button></li>`)

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

// const noteButton = document.getElementById("noteButton")

// noteButton.addEventListener("click", () => {
//     // adds noteButton array to noteTitle and noteBody
//     var noteTitle = document.getElementById("noteTitle")
//     var noteBody = document.getElementById("noteBody")
//     var noteArray = noteButton.value

//     console.log('hi')
// })

const sidebarToggle = document.getElementById("sidebarToggle")

sidebarToggle.addEventListener("click", () => {
    // hides and shows the sidebar on click
    var sidebar = document.getElementById("sidebar")
    sidebar.classList.toggle('hidden')
    sidebarToggle.classList.toggle('moved')
})