var demo = document.getElementById("demo");
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    console.log(this);
    if (this.readyState == 4 && this.status == 200) {
        demo.innerHTML = this.responseText;
    } else if (this.readyState == 4 && this.status == 404) {
        alert('Erreur 404 :/');
    }
}

xhr.open("GET", "async/text.txt", true);
xhr.reponseType = "text";
xhr.send();
