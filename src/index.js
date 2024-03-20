import express from "express";
import { PORT } from "./configs/serverconfig.js";
function setupandrun() {
  const app = express();
  app.listen(PORT, (req, res) => {
    console.log(`App is listening to the PORT ${PORT}`);
  });
}
setupandrun();
