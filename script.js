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