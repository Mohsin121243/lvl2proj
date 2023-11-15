const registeredEvents = [];

function registerEvent(eventName) {
  if(registeredEvents.includes(eventName) == false){
  registeredEvents.push(eventName);}
  updateRegisteredEvents();
}

function unregisterAllEvents() {
  registeredEvents.length = 0;
  updateRegisteredEvents();
}

function updateRegisteredEvents() {
  const registeredEventsElement = document.getElementById('registered-events');
  registeredEventsElement.textContent = registeredEvents.toString();
}

let nickInfo = "Nicholas Channing DiGiovanni (born May 19, 1996) is an American celebrity chef, internet personality, and entertainer. As of March 2023, DiGiovanni has over 25 million followers across his social media accounts, including YouTube, TikTok, and Instagram.";

let nickB = document.getElementById("nickButton");
nickB.addEventListener("click",()=>{
  document.getElementById("nickInfo").innerHTML = nickInfo;
});

let gordonInfo = "While best known as a celebrity chef now, Ramsay is successful in a variety of other ventures outside of food and television. Most notably as a published author, Ramsay has released a number of books, many of which have become bestsellers around the world; including his autobiography, Roasting in Hell's Kitchen.";

let gordonB = document.getElementById("gordonButton");
gordonB.addEventListener("click",()=>{
  document.getElementById("gordonInfo").innerHTML = gordonInfo;
});
let rushInfo = "Andre Rush is an American celebrity chef and military veteran. He worked in the White House as a Chef for four administrations. Rush, a retired Master Sergeant of the U.S. Army, gained attention for his large biceps and muscular physique.";

let rushB = document.getElementById("rushButton");
rushB.addEventListener("click",()=>{
  document.getElementById("rushInfo").innerHTML = rushInfo;
});

let goldenInfo = "In May 2020, The Golden Balance was founded by Ahmad Alzahabi, a passionate content creator. Each week, Ahmad invites his audience of over 8 million combined followers into his kitchen, where he creates easy recipes inspired by his Syrian-American Muslim background and the world at large.";

let gbB = document.getElementById("gbButton");
gbB.addEventListener("click",()=>{
  document.getElementById("gbInfo").innerHTML = goldenInfo;
});

let bobbyInfo = "Robert William Flay is an American celebrity chef, restaurateur, and reality television personality. Flay is the owner and executive chef of several restaurants and franchises, including Bobby's Burger Palace, Bobby's Burgers, and Amalfi."

let bobbyB = document.getElementById("bobbyButton");
bobbyB.addEventListener("click",()=>{
  document.getElementById("bobbyInfo").innerHTML = bobbyInfo;
});

let guyInfo = "Guy Ramsay Fieri is an American restaurateur, author, and an Emmy Award winning television presenter. He co-owned three now defunct restaurants in California, licenses his name to restaurants in cities all over the world, and is known for hosting various television series on the Food Network.";

let guyB = document.getElementById("guyButton");
guyB.addEventListener("click",()=>{
  document.getElementById("guyInfo").innerHTML = guyInfo;
});