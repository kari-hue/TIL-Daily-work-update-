const datastore = [

    { 
        Name : "Karishma",
        age : 21,
        status: "unmarried",
        Favfood:"anything that is sweet",
        Favbook: "The kite Runner",
        Favdestination:"I want to visit montecarlo",
        Image:"https://randomuser.me/api/portraits/women/24.jpg"
},
{ 
    Name : "Anush",
    age : 23,
    status: "unmarried",
    Favfood:"Momo",
    Favbook: "Jiban kads ki phool",
    Favdestination:"somewhere abroad",
    Image:"https://randomuser.me/api/potraits/men/24.jpg"
},
{ 
    Name : "Medhavee",
    age : 21,
    status: "unmarried",
    Favfood:"chicken",
    Favbook: "The Alchemist",
    Favdestination:"Maldives",
    Image:"https://randomuser.me/api/potraits/women/25.jpg"
},
{ 
    Name : "Aakash",
    age : 21,
    status: "unmarried",
    Favfood:"weed",
    Favbook: "Mountain between us",
    Favdestination:"Reach at the top of mounteverest",
    Image:"https://randomuser.me/api/potraits/men/25.jpg"
},


]

const profiles = profile(datastore);
//next event
//call first profile
nextprofile();

document.getElementById('next').addEventListener('click',nextprofile);
//describing the next function
function nextprofile()
{

const currentProfile = profiles.next().value;
if(currentProfile !== undefined){
document.getElementById('profileDisplay').innerHTML = `
<ul class="list-group">
<li class="list-group-item">Name: ${currentProfile.Name}</li>
<li class="list-group-item">Age: ${currentProfile.age}</li>
<li class="list-group-item">Status: ${currentprofile.status}</li>
<li class="list-group-item">Favourite food: ${currentProfile.Favfood}</li>
<li class="list-group-item">Favourite Book: ${currentProfile.Favbook}</li>
<li class="list-group-item">Favourite Destination: ${currentProfile.Favdestination}</li>
<li class="list-group-item">Image: ${currentProfile.Image}</li>

<ul>
`;
document.getElementById("imageDisplay").innerHTML = `<img src = "${currentProfile.image}">`;
} else{
    window.location.reload();

}
}



//create actual iterator function

function profile(p){

    const count = 0;
    return{
        next: function() {
            return count < p.length ? {
                value: p[count++],done:false
            } :
            {
                done:true
            }
        }
    }

}