let codewarsDiv = document.getElementById("codeware_score");
codewarsDiv.style.visibility = "hidden";

function showCodewareScore() {
    if(codewarsDiv.style.visibility == "hidden") {
        codewarsDiv.style.visibility = "visible";
    }
    else {
        codewarsDiv.style.visibility = "hidden";
    }
}

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode"); 
}