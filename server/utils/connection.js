import mongoose from "mongoose";

export default function () {
  mongoose
    .connect(process.env.CONNECTION_URL)
    .then(() => {
      console.log("connection established");
    })
    .catch((error) => {
      console.log("Error : " + error);
    });
}
