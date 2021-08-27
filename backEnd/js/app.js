let express = require("express");
var cors = require("cors");

const app = express();



app.get("/st/:nameOfState", cors(), (req, res) => {
    const stateName = req.params.nameOfState;
   
    const fetch = require('node-fetch');
    let Andhra_Pradesh = [
        "Foreign Evacuees",
        "Anantapur",
        "Chittoor",
        "East Godavari",
        "Guntur",
        "Krishna",
        "Kurnool",
        "Other State",
        "Prakasam",
        "S.P.S. Nellore",
        "Srikakulam",        
        "Visakhapatnam",
        "Vizianagaram",
        "West Godavari",
        "Y.S.R. Kadapa"
    ]
    let url = "https://api.covid19india.org/state_district_wise.json";
    
    let settings = { method: "Get" };
    
    fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            let Active = [], Confirm = [], Deceased = [], Recovered = [];
            let sendData = {
                "active":Active,
                "confirm":Confirm,
                "deceased":Deceased,
                "recovered": Recovered
            }
            for(i = 0; i < Andhra_Pradesh.length;i++) 
            {
                Active[i] = json["Andhra Pradesh"].districtData[Andhra_Pradesh[i]].active; 
                Confirm[i] = json["Andhra Pradesh"].districtData[Andhra_Pradesh[i]].confirmed;
                Deceased[i] = json["Andhra Pradesh"].districtData[Andhra_Pradesh[i]].deceased;
                Recovered[i] = json["Andhra Pradesh"].districtData[Andhra_Pradesh[i]].recovered;                
            }
            res.send(sendData);               
        });
  });
  


const port = 9099;
app.listen( process.env.PORT ||port, () => console.log(`Listening on port ${port}..`));