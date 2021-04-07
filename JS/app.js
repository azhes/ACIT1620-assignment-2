/* Function to make dark mode button work
    - select dark mode button class
    - use toggle method to switch between dark mode and light mode themes
*/
const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', () => {
    // change theme
    var slideout = document.getElementById("slideout")
    var newnote = document.getElementById("newnote")
    var nav = document.getElementById("nav")
    var nav2 = document.getElementById("nav2")

    document.body.classList.toggle('light');
    slideout.classList.toggle('light')
    newnote.classList.toggle('light')
    nav.classList.toggle('light')
    nav2.classList.toggle('light')
})
