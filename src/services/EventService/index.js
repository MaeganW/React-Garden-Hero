import events from "../../data/events";

function getEvents() {
  return new Promise((resolve, reject) => {
    if (!events) {
      reject("No events found");
    }
    resolve(events);
  });
}

export { getEvents };
