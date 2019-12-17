import solutions from "../../data/solutions";

function getSolutions() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!solutions) {
        reject("No events found");
      }
      resolve(solutions);
    }, 500);
  });
}

export { getSolutions };
