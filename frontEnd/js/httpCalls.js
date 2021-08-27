let filterUrl = window.location.href;

let filter = filterUrl.split("st/");
let state = filter[1];
function sendReq() {
    var httpRequestForOneData = new XMLHttpRequest();
    httpRequestForOneData.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("data").innerHTML = this.response ;
        }
    };
    httpRequestForOneData.open("GET", "http://127.0.0.1:9099/st/" + state, true);
    httpRequestForOneData.send();
}