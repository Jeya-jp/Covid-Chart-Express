let express = require("express");
var cors = require("cors");

var statesInJs = require('./statesArray');


const app = express();
app.get("/st/:nameOfState", cors(), (req, res) => 
{ 
    const stateName = req.params.nameOfState;
    const fetch = require("node-fetch");
    let TriggerState;
    let stateNameStr;




//   ---------------------------------------------- State Names and trigger Names 
    if (stateName == "AndhraPradesh") 
    {
        let Andhra_Pradesh = 
        [
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
        stateNameStr = "Andhra Pradesh";   // similar like json data ****
    }

  if(stateName == "Arunachal Pradesh")
  {
    let Arunachal_Pradesh = 
    [
      "Anjaw",
      "Changlang",
      "East Kameng",
      "East Siang",
      "Kamle",
      "Kra Daadi",
      "Kurung Kumey",
      "Lepa Rada",
      "Lohit",
      "Longding",
      "Lower Dibang Valley",
      "Lower Siang",
      "Lower Subansiri",
      "Namsai",
      "Pakke Kessang",
      "Papum Pare",
      "Shi Yomi",
      "Siang",
      "Tawang",
      "Tirap",
      "Upper Dibang Valley",
      "Upper Siang",
      "Upper Subansiri",
      "West Kameng",
      "West Siang"
    ];
    TriggerState = Arunachal_Pradesh;
    stateNameStr = "Arunachal Pradesh";
  }
 
  if(stateName == "Assam")
  {
    let Assam =
    [
      "Baksa",
      "Barpeta",
      "Biswanath",
      "Bongaigaon",
      "Cachar",
      "Charaideo",
      "Chirang",
      "Darrang",
      "Dhemaji",
      "Dhubri",
      "Dibrugarh",
      "Dima Hasao",
      "Goalpara",
      "Golaghat",
      "Hailakandi",
      "Hojai",
      "Jorhat",
      "Kamrup",
      "Kamrup Metropolitan",
      "Karbi Anglong",
      "Karimganj",
      "Kokrajhar",
      "Lakhimpur",
      "Majuli",
      "Morigaon",
      "Nagaon",
      "Nalbari",
      "Sivasagar",
      "Sonitpur",
      "South Salmara Mankachar",
      "Tinsukia",
      "Udalguri",
      "West Karbi Anglong"
    ];
    TriggerState = Assam;
    stateNameStr = "Assam";
  }

  if(stateName == "Bihar")
  {
    let Bihar =
    [
      "Araria",
      "Arwal",
      "Aurangabad",
      "Banka",
      "Begusarai",
      "Bhagalpur",
      "Bhojpur",
      "Buxar",
      "Darbhanga",
      "East Champaran",
      "Gaya",
      "Gopalganj",
      "Jamui",
      "Jehanabad",
      "Kaimur",
      "Katihar",
      "Khagaria",
      "Kishanganj",
      "Lakhisarai",
      "Madhepura",
      "Madhubani",
      "Munger",
      "Muzaffarpur",
      "Nalanda",
      "Nawada",
      "Patna",
      "Purnia",
      "Rohtas",
      "Saharsa",
      "Samastipur",
      "Saran",
      "Sheikhpura",
      "Sheohar",
      "Sitamarhi",
      "Siwan",
      "Supaul",
      "Vaishali",
      "West Champaran"   
    ];
    TriggerState = Bihar;
    stateNameStr = "Bihar";
  }

  if(stateName == "Chandigarh")
  {
    let Chandigarh = ["Chandigarh"];
    TriggerState = Chandigarh;
    stateNameStr = "Chandigarh";
  }

  if(stateName == "Chhattisgarh")
  {
    let Chhatisgarh =
    [
      "Balod",
      "Baloda Bazar",
      "Balrampur",
      "Bametara",
      "Bastar",                
      "Bijapur",
      "Bilaspur",
      "Dakshin Bastar Dantewada",
      "Dhamtari",
      "Durg",
      "Gariaband",
      "Janjgir Champa",
      "Jashpur",
      "Kabeerdham",
      "Kondagaon",
      "Korba",
      "Koriya",
      "Mahasamund",
      "Mungeli",
      "Narayanpur",
      "Other State",
      "Raigarh",
      "Raipur",
      "Rajnandgaon",
      "Sukma",
      "Surajpur",
      "Surguja"
    ];
    TriggerState = Chhatisgarh;
    stateNameStr = "Chhattisgarh";
  }

  if(stateName == "Dadra and Nagar Haveli and Daman and Diu")
  {
    let Diu = ["Dadra and Nagar Haveli", "Daman", "Diu"]
    TriggerState = Diu;
    stateNameStr = "Dadra and Nagar Haveli and Daman and Diu";
  }

  if(stateName == "Delhi")
  {
    let Delhi =
    [
      "Central Delhi",
      "East Delhi",
      "New Delhi",
      "North Delhi",
      "North East Delhi",
      "North West Delhi",
      "Shahdara",
      "South Delhi",
      "South East Delhi",
      "South West Delhi",
      "West Delhi"
    ];
    TriggerState = Delhi;
    stateNameStr = "Delhi";
  }

  if(stateName == "Goa")
  {
    let Goa =
    [
      "North Goa",
      "South Goa" 
    ];
    TriggerState = Goa;
    stateNameStr = "Goa";
  }

  if(stateName == "Gujarat")
  {
    let Gujarat =
    [
      "Ahmedabad",
      "Amreli",
      "Anand",
      "Aravalli",
      "Banaskantha",
      "Bharuch",
      "Bhavnagar",
      "Botad",
      "Chhota Udaipur",
      "Dahod",
      "Dang",
      "Devbhumi Dwarka",
      "Gandhinagar",
      "Gir Somnath",
      "Jamnagar",
      "Junagadh",
      "Kheda",
      "Kutch",
      "Mahisagar",
      "Mehsana",
      "Morbi",
      "Narmada",
      "Navsari",
      "Panchmahal",
      "Patan",
      "Porbandar",
      "Rajkot",
      "Sabarkantha",
      "Surat",
      "Surendranagar",
      "Tapi",
      "Vadodara",
      "Valsad"
    ];
    TriggerState = Gujarat;
    stateNameStr = "Gujarat";
  }

  if(stateName == "Haryana")
  {
    let Haryana = 
    [
      "Ambala",
      "Bhiwani",
      "Charkhi Dadri",
      "Faridabad",
      "Fatehabad",
      "Gurugram",
      "Hisar",
      "Jhajjar",
      "Jind",
      "Kaithal",
      "Karnal",
      "Kurukshetra",
      "Mahendragarh",
      "Nuh",
      "Palwal",
      "Panchkula",
      "Panipat",
      "Rewari",
      "Rohtak",
      "Sirsa",
      "Sonipat",
      "Yamunanagar"
    ];
    TriggerState = Haryana;
    stateNameStr = "Haryana";
  }

  if(stateName == "Himachal Pradesh")
  {
    let Himachal_Pradesh =
    [
      "Bilaspur",
      "Chamba",
      "Hamirpur",
      "Kangra",
      "Kinnaur",
      "Kullu",
      "Lahaul and Spiti",
      "Mandi",
      "Shimla",
      "Sirmaur",
      "Solan",
      "Una",
    ];
    TriggerState = Himachal_Pradesh;
    stateNameStr = "Himachal Pradesh";
  }

  if(stateName == "Jammu and Kashmir")
  {
    let Jam =
    [
      "Anantnag",
      "Bandipora",
      "Baramulla",
      "Budgam",
      "Doda",
      "Ganderbal",
      "Jammu",
      "Kathua",
      "Kishtwar",
      "Kulgam",
      "Kupwara",
      "Mirpur",
      "Muzaffarabad",
      "Pulwama",
      "Punch",
      "Rajouri",
      "Ramban",
      "Reasi",
      "Samba",
      "Shopiyan",
      "Srinagar",
      "Udhampur"
    ];
    TriggerState = Jam;
    stateNameStr = "Jammu and Kashmir";
  }

  if(stateName == "Jharkhand")
  {
    let Jharkhand =
    [
      "Bokaro",
      "Chatra",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "East Singhbhum",
      "Garhwa",
      "Giridih",
      "Godda",
      "Gumla",
      "Hazaribagh",
      "Jamtara",
      "Khunti",
      "Koderma",
      "Latehar",
      "Lohardaga",
      "Pakur",
      "Palamu",
      "Ramgarh",
      "Ranchi",
      "Sahibganj",
      "Saraikela-Kharsawan",
      "Simdega",
      "West Singhbhum"
    ];
    TriggerState = Jharkhand;
    stateNameStr = "Jharkhand";
  }

  if(stateName == "Karnataka")
  {
    let Karnataka =
    [
      "Bagalkote",
      "Ballari",
      "Belagavi",
      "Bengaluru Rural",
      "Bengaluru Urban",
      "Bidar",
      "Chamarajanagara",
      "Chikkaballapura",
      "Chikkamagaluru",
      "Chitradurga",
      "Dakshina Kannada",
      "Davanagere",
      "Dharwad",
      "Gadag",
      "Hassan",
      "Haveri",
      "Kalaburagi",
      "Kodagu",
      "Kolar",
      "Koppal",
      "Mandya",
      "Mysuru",
      "Raichur",
      "Ramanagara",
      "Shivamogga",
      "Tumakuru",
      "Udupi",
      "Uttara Kannada",
      "Vijayapura",
      "Yadgir"
    ];
    TriggerState = Karnataka;
    stateNameStr = "Karnataka";
  }

  if(stateName == "Kerala")
  {
    let Kerala =
    [
      "Alappuzha",
      "Ernakulam",
      "Idukki",
      "Kannur",
      "Kasaragod",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Malappuram",
      "Palakkad",
      "Pathanamthitta",
      "Thiruvananthapuram",
      "Thrissur",
      "Wayanad"
    ];
    TriggerState = Kerala;
    stateNameStr = "Kerala";
  }

  if(stateName == "Ladakh")
  {
    let Ladakh = [ "Kargil", "Leh" ];
    TriggerState = Ladakh;
    stateNameStr = "Ladakh";
  }

  if(stateName == "Lakshadweep")
  {
    let Lakshadweep = [ "Lakshadweep" ];
    TriggerState = Lakshadweep;
    stateNameStr = "Lakshadweep";
  }

  if(stateName == "Madhya Pradesh")
  {
    let Madhya_Pradesh =
    [
      "Agar Malwa",
      "Alirajpur",
      "Anuppur",
      "Ashoknagar",
      "Balaghat",
      "Barwani",
      "Betul",
      "Bhind",
      "Bhopal",
      "Burhanpur",
      "Chhatarpur",
      "Chhindwara",
      "Damoh",
      "Datia",
      "Dewas",
      "Dhar",
      "Dindori",
      "Guna",
      "Gwalior",
      "Harda",
      "Hoshangabad",
      "Indore",
      "Jabalpur",
      "Jhabua",
      "Katni",
      "Khandwa",
      "Khargone",
      "Mandla",
      "Mandsaur",
      "Morena",
      "Narsinghpur",
      "Neemuch",
      "Niwari",
      "Panna",
      "Raisen",
      "Rajgarh",
      "Ratlam",
      "Rewa",
      "Sagar",
      "Satna",
      "Sehore",
      "Seoni",
      "Shahdol",
      "Shajapur",
      "Sheopur",
      "Shivpuri",
      "Sidhi",
      "Singrauli",
      "Tikamgarh",
      "Ujjain",
      "Umaria",
      "Vidisha"
    ];
    TriggerState = Madhya_Pradesh;
    stateNameStr = "Madhya Pradesh";
  }

  if(stateName == "Maharashtra")
  {
    let Maharashtra =
    [
      "Ahmednagar",
      "Akola",
      "Amravati",
      "Aurangabad",
      "Beed",
      "Bhandara",
      "Buldhana",
      "Chandrapur",
      "Dhule",
      "Gadchiroli",
      "Gondia",
      "Hingoli",
      "Jalgaon",
      "Jalna",
      "Kolhapur",
      "Latur",
      "Mumbai",
      "Mumbai Suburban",
      "Nagpur",
      "Nanded",
      "Nandurbar",
      "Nashik",
      "Osmanabad",
      "Palghar",
      "Parbhani",
      "Pune",
      "Raigad",
      "Ratnagiri",
      "Sangli",
      "Satara",
      "Sindhudurg",
      "Solapur",
      "Thane",
      "Wardha",
      "Washim",
      "Yavatmal"
    ];
    TriggerState = Maharashtra;
    stateNameStr = "Maharashtra";
  }

  if(stateName == "Manipur")
  {
    let Manipur =
    [
      "Bishnupur",
      "CAPF Personnel",
      "Chandel",
      "Churachandpur",
      "Imphal East",
      "Imphal West",
      "Jiribam",
      "Kakching",
      "Kamjong",
      "Kangpokpi",
      "Noney",
      "Pherzawl",
      "Senapati",
      "Tamenglong",
      "Tengnoupal",
      "Thoubal",
      "Ukhrul"
    ];
    TriggerState = Manipur;
    stateNameStr = "Manipur";
  }

  if(stateName == "Meghalaya")
  {
    let Meghalaya =
    [
      "East Garo Hills",
      "East Jaintia Hills",
      "East Khasi Hills",
      "North Garo Hills",
      "Ribhoi",
      "South Garo Hills",
      "South West Garo Hills",
      "South West Khasi Hills",
      "West Garo Hills",
      "West Jaintia Hills",
      "West Khasi Hills"
    ];
    TriggerState = Meghalaya;
    stateNameStr = "Meghalaya";
  }

  if(stateName == "Mizoram")
  {
    let Mizoram =
    [
      "Aizawl",
      "Champhai",
      "Hnahthial",
      "Khawzawl",
      "Kolasib",
      "Lawngtlai",
      "Lunglei",
      "Mamit",
      "Saiha",
      "Saitual",
      "Serchhip"
    ];
    TriggerState = Mizoram;
    stateNameStr = "Mizoram";
  }

  if(stateName == "Nagaland")
  {
    let Nagaland =
    [
      "Dimapur",
      "Kiphire",
      "Kohima",
      "Longleng",
      "Mokokchung",
      "Mon",
      "Peren",
      "Phek",
      "Tuensang",
      "Wokha",
      "Zunheboto"
    ];
    TriggerState = Nagaland;
    stateNameStr = "Nagaland";
  }

  if(stateName == "Odisha")
  {
    let Odisha =
    [
      "Angul",
      "Balangir",
      "Balasore",
      "Bargarh",
      "Bhadrak",
      "Boudh",
      "Cuttack",
      "Deogarh",
      "Dhenkanal",
      "Gajapati",
      "Ganjam",
      "Jagatsinghpur",
      "Jajpur",
      "Jharsuguda",
      "Kalahandi",
      "Kandhamal",
      "Kendrapara",
      "Kendujhar",
      "Khordha",
      "Koraput",
      "Malkangiri",
      "Mayurbhanj",
      "Nabarangapur",
      "Nayagarh",
      "Nuapada",
      "Puri",
      "Rayagada",
      "Sambalpur",
      "State Pool",
      "Subarnapur",
      "Sundargarh"
    ];
    TriggerState = Odisha;
    stateNameStr = "Odisha";
  }

  if(stateName == "Puducherry")
  {
    let Puducherry =
    [
      "Karaikal",
      "Mahe",
      "Puducherry",
      "Yanam"
    ];
    TriggerState = Puducherry;
    stateNameStr = "Puducherry";
  }

  if(stateName == "Punjab")
  {
    let Punjab =
    [
      "Amritsar",
      "Barnala",
      "Bathinda",
      "Faridkot",
      "Fatehgarh Sahib",
      "Fazilka",
      "Ferozepur",
      "Gurdaspur",
      "Hoshiarpur",
      "Jalandhar",
      "Kapurthala",
      "Ludhiana",
      "Mansa",
      "Moga",
      "Pathankot",
      "Patiala",
      "Rupnagar",
      "S.A.S. Nagar",
      "Sangrur",
      "Shahid Bhagat Singh Nagar",
      "Sri Muktsar Sahib",
      "Tarn Taran"
    ];
    TriggerState = Punjab;
    stateNameStr = "Punjab";
  }

  if(stateName == "Rajasthan")
  {
    let Rajasthan =
    [
      "Ajmer",
      "Alwar",
      "Banswara",
      "Baran",
      "Barmer",
      "Bharatpur",
      "Bhilwara",
      "Bikaner",
      "Bundi",
      "Chittorgarh",
      "Churu",
      "Dausa",
      "Dholpur",
      "Dungarpur",
      "Hanumangarh",
      "Jaipur",
      "Jaisalmer",
      "Jalore",
      "Jhalawar",
      "Jhunjhunu",
      "Jodhpur",
      "Karauli",
      "Kota",
      "Nagaur",
      "Pali",
      "Pratapgarh",
      "Rajsamand",
      "Sawai Madhopur",
      "Sikar",
      "Sirohi",
      "Tonk",
      "Udaipur"
    ];
    TriggerState = Rajasthan;
    stateNameStr = "Rajasthan";
  }

  if(stateName == "Sikkim")
  {
    let Sikkim =
    [
      "East Sikkim",
      "North Sikkim",
      "South Sikkim",
      "West Sikkim"
    ];
    TriggerState = Sikkim;
    stateNameStr = "Sikkim";
  }

  if(stateName == "Telangana")
  {
    let Telangana =
    [
      "Adilabad",
      "Bhadradri Kothagudem",
      "Hyderabad",
      "Jagtial",
      "Jangaon",
      "Jayashankar Bhupalapally",
      "Jogulamba Gadwal",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Komaram Bheem",
      "Mahabubabad",
      "Mahabubnagar",
      "Mancherial",
      "Medak",
      "Medchal Malkajgiri",
      "Mulugu",
      "Nagarkurnool",
      "Nalgonda",
      "Narayanpet",
      "Nirmal",
      "Nizamabad",
      "Peddapalli",
      "Rajanna Sircilla",
      "Ranga Reddy",
      "Sangareddy",
      "Siddipet",
      "Suryapet",
      "Vikarabad",
      "Wanaparthy",
      "Warangal Rural",
      "Warangal Urban",
      "Yadadri Bhuvanagiri"
    ];
    TriggerState = Telangana;
    stateNameStr = "Telangana";
  }

  if(stateName == "Tripura")
  {
    let Tripura =
    [
      "Dhalai",
      "Gomati",
      "Khowai",
      "North Tripura",
      "Sipahijala",
      "South Tripura",
      "Unokoti",
      "West Tripura"
    ];
    TriggerState = Tripura;
    stateNameStr = "Tripura";
  }

  if(stateName == "Uttar Pradesh")
  {
    let Uttar_Pradesh =
    [
      "Agra",
      "Aligarh",
      "Ambedkar Nagar",
      "Amethi",
      "Amroha",
      "Auraiya",
      "Ayodhya",
      "Azamgarh",
      "Baghpat",
      "Bahraich",
      "Ballia",
      "Balrampur",
      "Banda",
      "Barabanki",
      "Bareilly",
      "Basti",
      "Bhadohi",
      "Bijnor",
      "Budaun",
      "Bulandshahr",
      "Chandauli",
      "Chitrakoot",
      "Deoria",
      "Etah",
      "Etawah",
      "Farrukhabad",
      "Fatehpur",
      "Firozabad",
      "Gautam Buddha Nagar",
      "Ghaziabad",
      "Ghazipur",
      "Gonda",
      "Gorakhpur",
      "Hamirpur",
      "Hapur",
      "Hardoi",
      "Hathras",
      "Jalaun",
      "Jaunpur",
      "Jhansi",
      "Kannauj",
      "Kanpur Dehat",
      "Kanpur Nagar",
      "Kasganj",
      "Kaushambi",
      "Kushinagar",
      "Lakhimpur Kheri",
      "Lalitpur",
      "Lucknow",
      "Maharajganj",
      "Mahoba",
      "Mainpuri",
      "Mathura",
      "Mau",
      "Meerut",
      "Mirzapur",
      "Moradabad",
      "Muzaffarnagar",
      "Pilibhit",
      "Pratapgarh",
      "Prayagraj",
      "Rae Bareli",
      "Rampur",
      "Saharanpur",
      "Sambhal",
      "Sant Kabir Nagar",
      "Shahjahanpur",
      "Shamli",
      "Shrawasti",
      "Siddharthnagar",
      "Sitapur",
      "Sonbhadra",
      "Sultanpur",
      "Unnao",
      "Varanasi"
    ];
    TriggerState = Uttar_Pradesh;
    stateNameStr = "Uttar Pradesh";
  }

  if(stateName == "Uttarakhand")
  {
    let Uttarakhand =
    [
      "Almora",
      "Bageshwar",
      "Chamoli",
      "Champawat",
      "Dehradun",
      "Haridwar",
      "Nainital",
      "Pauri Garhwal",
      "Pithoragarh",
      "Rudraprayag",
      "Tehri Garhwal",
      "Udham Singh Nagar",
      "Uttarkashi"
    ];
    TriggerState = Uttarakhand;
    stateNameStr = "Uttarakhand";
  }

  if(stateName == "West Bengal")
  {
    let West_Bengal =
    [
      "Alipurduar",
      "Bankura",
      "Birbhum",
      "Cooch Behar",
      "Dakshin Dinajpur",
      "Darjeeling",
      "Hooghly",
      "Howrah",
      "Jalpaiguri",
      "Jhargram",
      "Kalimpong",
      "Kolkata",
      "Malda",
      "Murshidabad",
      "Nadia",
      "North 24 Parganas",
      "Paschim Bardhaman",
      "Paschim Medinipur",
      "Purba Bardhaman",
      "Purba Medinipur",
      "Purulia",
      "South 24 Parganas",
      "Uttar Dinajpur"
    ];
    TriggerState = West_Bengal;
    stateNameStr = "West Bengal";
  }

  if (stateName == "TamilNadu") 
  {
      let Tamil_Nadu = 
      [
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

  






// -------------------------------------------------end state











// ------------------public api 

  let url = "https://api.covid19india.org/state_district_wise.json";

  let settings = { method: "Get" };

  fetch(url, settings)
    .then((res) => res.json())
    .then((json) => 
    {
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



    //    Subtracting active count


    // let Active2 = [], temp = [];
    // fetch("Covid.json").then(function(resp)
    // {
    //     return resp.json();
    // })
    // .then(function(result)
    // {
    //     var ans = document.getElementById("incDec");
    //     for(i = 0; i < TriggerState.length;i++) 
    //     {
    //         Active2[i] = result[stateNameStr].districtData[TriggerState[i]].active;                 
    //         temp[i] = Active[i] - Active2[i];         
    //     }
           
    //     let s = [];            
    //     s = temp.map(String);

    //     for(let i = 0; i < TriggerState.length; i++)
    //     {
    //         if(Active2[i] <= Active[i])
    //         {                    
    //             var node = document.createElement("li");
    //             var textnode = document.createTextNode(dist[i] + " = " + s[i]);
    //             node.appendChild(textnode);
    //             document.getElementById("box2").appendChild(node);                     
    //         }

    //         if(Active2[i] > Active[i])
    //         {
    //             s[i] = s[i].replace('-', ''); 
    //             var node = document.createElement("li");
    //             var textnode = document.createTextNode(dist[i] + " = " + s[i]);
    //             node.appendChild(textnode);
    //             document.getElementById("box3").appendChild(node);                            
    //         }
    //     }
            
    //     for(let i = 0; i < dist.length; i++)
    //     {
    //         var node = document.createElement("li");
    //         var textnode = document.createTextNode(dist[i] + " = " + Active[i]);
    //         node.appendChild(textnode);
    //         document.getElementById("box1").appendChild(node);                
    //     }            
    // })

});


app.get("/total", cors(), (req, res) => {
  console.log(statesInJs.s);
});



const port = 9099;
app.listen(process.env.PORT || port, () =>
  console.log(`Listening on port ${port}..`)
);
