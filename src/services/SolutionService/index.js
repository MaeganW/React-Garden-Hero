import solutions from "../../data/solutions";

function getSolutions() {
  return new Promise((resolve, reject) => {
    if (!solutions) {
      reject("No events found");
    }
    resolve(solutions);
  });
}

export { getSolutions };
