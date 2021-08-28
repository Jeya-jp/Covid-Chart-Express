let filterUrl = window.location.href;

let filter = filterUrl.split("st/");
let state = filter[1];
console.log(state);

function sendReq() {
    document.getElementById("statename").innerHTML = "COVID REPORT - " + state;
    var httpRequestForOneData = new XMLHttpRequest();
    httpRequestForOneData.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
             

            let myjsonData = JSON.parse(this.response);

            let Active = myjsonData.active;
            let Confirmed = myjsonData.confirm;
            let Deceased = myjsonData.deceased;
            let Recovered = myjsonData.recovered;

            let dist = myjsonData.Dist;

            let myChart = document.getElementById("chart").getContext("2d");
            let display = new Chart(myChart, 
            {
                type: 'line',
                data: 
                {            
                    labels: dist,
                    datasets: [
                        {
                            label: "Active",
                            data: Active,                    
                            backgroundColor: "Blue",
                            borderWidth: 1,
                            borderColor: "Black"                    
                        },
                        {
                            label: "Confirmed",
                            data: Confirmed,                    
                            backgroundColor: "Red",
                            borderWidth: 1,
                            borderColor: "#777"
                        },
                        {
                            label: "Deceased",
                            data: Deceased,                    
                            backgroundColor: "Yellow",
                            borderWidth: 1,
                            borderColor: "#777"
                        },
                        {
                            label: "Recovered",
                            data: Recovered,                    
                            backgroundColor: "Green",
                            borderWidth: 1,
                            borderColor: "#777"
                        }
                    ]
                }            
            });
        }
    };
    httpRequestForOneData.open("GET", "http://127.0.0.1:9099/st/" + state, true);
    httpRequestForOneData.send();
}