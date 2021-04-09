/* Function to make dark mode button work
    - select dark mode button class
    - use toggle method to switch between dark mode and light mode themes
*/
const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', () => {
    // change theme
    var createNote = document.getElementById("createNote")
    var saveButton = document.getElementById("saveButton")
    var deleteButton = document.getElementById("deleteButton")
    var noteTitle = document.getElementById("noteTitle")
    var noteBody = document.getElementById("noteBody")
    var sidebarToggle = document.getElementById("sidebarToggle")

    document.body.classList.toggle('light')
    createNote.classList.toggle('light')
    saveButton.classList.toggle('light')
    deleteButton.classList.toggle('light')
    noteTitle.classList.toggle('light')
    noteBody.classList.toggle('light')
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

    insertNotesList(notesList, notesArray)

    eraseText()
})

function insertNotesList(notesList, notesArray) {
    // inserts value of notesList into HTML
    var id = randId()
    notesList.insertAdjacentHTML('afterbegin', `<li class="noteArray"><button class="noteButton" id=${id} onclick="viewNote(id, notesArray)">${notesArray[0]}</button></li>`)
}

function randId() {
    // generates a random id
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4()
}

const deleteButton = document.getElementById("deleteButton")

deleteButton.addEventListener("click", () => {
    // closes note taking area without saving the note
    var noteArea = document.getElementById("noteArea")
    var createNote = document.getElementById("createNote")
    noteArea.classList.toggle('visible')
    createNote.classList.toggle('hidden')

    eraseText()
})

function viewNote(id, notesArray) {
    // adds note array to noteTitle and noteBody
    var noteTitle = document.getElementById("noteTitle")
    var noteBody = document.getElementById("noteBody")
    var noteButton = document.getElementById(id)
    var createNote = document.getElementById("createNote")
    var noteArea = document.getElementById("noteArea")

    createNote.classList.toggle('hidden')
    noteArea.classList.toggle('visible')

    noteTitle.value = notesArray[0]
    noteBody.value = notesArray[1]
}

const sidebarToggle = document.getElementById("sidebarToggle")

sidebarToggle.addEventListener("click", () => {
    // hides and shows the sidebar on click
    var sidebar = document.getElementById("sidebar")
    sidebar.classList.toggle('hidden')
    sidebarToggle.classList.toggle('moved')
})