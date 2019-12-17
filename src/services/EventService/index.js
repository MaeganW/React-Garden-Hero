import events from "../../data/events";

function getEvents() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!events) {
        reject("No events found");
      }
      resolve(events);
    }, 500);
  });
}

export { getEvents };
