//captire the body

let ruler = document.createElement("div")
ruler.setAttribute("id", "myDiv")

document.body.prepend(ruler)

// make the div element draggable
myRuler = document.getElementById("myDiv")

dragElement( document.getElementById("myDiv") )

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
      /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown

    function dragMouseDown(e) {
      // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
      // call a function whenever the cursor moves:
        document.onmousemove = elementDrag
        document.onmouseup = closeDragElement
    }

    function elementDrag(e) {
      // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
      // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

