
function init(){
    let text = window.prompt("input data");
    let charSearching = window.prompt("input a char to search");

    document.writeln(text.indexOf(charSearching) + "<br>");
    document.writeln(text.lastIndexOf(charSearching) + "<br>");
    document.writeln(text.indexOf(charSearching, 3));
}



window.addEventListener("load", init, false);