var x = document.getElementById('form_hover').style;
function a() {
    x.borderColor = '#3858F6';
    x.transition = '0.4s';
    if (x.style.borderColor === "none") {
        x.style.borderColor = "#3858F6";
    } else {
        x.style.borderColor = "none";
    }
}
