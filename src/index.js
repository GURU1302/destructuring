// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [civic, tesla] = cars;

const { model: one, coloursByPopularity: onePopu, speedStats: oneSs } = civic;
const { model: two, coloursByPopularity: twoPopu, speedStats: twoSs } = tesla;
const [topOne] = onePopu;
const [topTwo] = twoPopu;

const { topSpeed: speedOne } = oneSs;
const { topSpeed: speedTwo } = twoSs;

// {
//   model: "Honda Civic",
//   //The top colour refers to the first item in the array below:
//   //i.e. hondaTopColour = "black"
//   coloursByPopularity: ["black", "silver"],
//   speedStats: {
//     topSpeed: 140,
//     zeroToSixty: 8.5
//   }
// },

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{one}</td>
      <td>{speedOne}</td>
      <td>{topOne}</td>
    </tr>
    <tr>
      <td>{two}</td>
      <td>{speedTwo}</td>
      <td>{topTwo}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
