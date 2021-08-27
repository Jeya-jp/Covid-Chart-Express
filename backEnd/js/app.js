let express = require("express");
var cors = require("cors");

const app = express();

app.get("/st/:nameOfState", cors(), (req, res) => {
  const stateName = req.params.nameOfState;
  const fetch = require("node-fetch");
  let TriggerState;
  let stateNameStr;




//   ---------------------------------------------- State Names and trigger Names 
  if (stateName == "TamilNadu") {
    let Tamil_Nadu = [
      "Ariyalur",
      "Chengalpattu",
      "Chennai",
      "Coimbatore",
      "Cuddalore",
      "Dharmapuri",
      "Dindigul",
      "Erode",
      "Kallakurichi",
      "Kancheepuram",
      "Kanyakumari",
      "Karur",
      "Krishnagiri",
      "Madurai",
      "Nagapattinam",
      "Namakkal",
      "Nilgiris",
      "Perambalur",
      "Pudukkottai",
      "Ramanathapuram",
      "Ranipet",
      "Salem",
      "Sivaganga",
      "Tenkasi",
      "Thanjavur",
      "Theni",
      "Thiruvallur",
      "Thiruvarur",
      "Thoothukkudi",
      "Tiruchirappalli",
      "Tirunelveli",
      "Tirupathur",
      "Tiruppur",
      "Tiruvannamalai",
      "Vellore",
      "Viluppuram",
      "Virudhunagar",
    ];

    TriggerState = Tamil_Nadu;
    stateNameStr = "Tamil Nadu";
    
  }

  if (stateName == "AndhraPradesh") {
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
      "Y.S.R. Kadapa",
    ];
    TriggerState = Andhra_Pradesh;
    stateNameStr = "Andhra Pradesh";
  }






// -------------------------------------------------end state











// ------------------public api 

  let url = "https://api.covid19india.org/state_district_wise.json";

  let settings = { method: "Get" };

  fetch(url, settings)
    .then((res) => res.json())
    .then((json) => {
      let Active = [],
        Confirm = [],
        Deceased = [],
        Recovered = [];
      let sendData = {
        Dist: TriggerState,
        active: Active,
        confirm: Confirm,
        deceased: Deceased,
        recovered: Recovered,
      };
      for (i = 0; i < TriggerState.length; i++) {
        Active[i] = json[stateNameStr].districtData[TriggerState[i]].active;
        Confirm[i] = json[stateNameStr].districtData[TriggerState[i]].confirmed;
        Deceased[i] = json[stateNameStr].districtData[TriggerState[i]].deceased;
        Recovered[i] =
          json[stateNameStr].districtData[TriggerState[i]].recovered;
      }
      res.send(sendData);
    });
});

const port = 9099;
app.listen(process.env.PORT || port, () =>
  console.log(`Listening on port ${port}..`)
);
