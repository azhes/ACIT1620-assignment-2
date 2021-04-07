/* Function to make dark mode button work
    - select dark mode button class
    - use toggle method to switch between dark mode and light mode themes
*/
const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', () => {
    // change theme
    var slideout = document.getElementById("slideout")

    document.body.classList.toggle('light')
    slideout.classList.toggle('light')
})
