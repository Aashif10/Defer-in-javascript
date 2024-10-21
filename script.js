// In JavaScript, the defer attribute is used with
//  <script> tags to tell the browser to delay the
//     execution of the script until the HTML
//     document has been fully parsed. When you
//     include the defer attribute, the script is
//     loaded in parallel with the rest of the page
//     but only executed after the document has been
//     fully parsed, ensuring that the script doesn't
//     block the rendering of the HTML.
let element = document.getElementById("ele")
element.style.color = "red"

let element1 = document.getElementsByClassName("element")[0];
element1.style.color = "green";