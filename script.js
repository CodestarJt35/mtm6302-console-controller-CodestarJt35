$header = document.getElementById('h1')
$text = document.getElementById('text')
$body = document.body

function setTitle() {
    $header.innerHTML = 'New Console Controls'
}

function setDescription() {
    $text.innerHTML = 'Updated text'
}

function setBackgroundColor() {
    $body.style.backgroundColor = '#eeeeee'
}

function setFontColor() {
    $text.style.color = "#3d123d"
    $header.style.color = "#3d123d"
}

function setTheme() {
    $body.classList.toggle('dark')
    $body.classList.toggle('light')
}