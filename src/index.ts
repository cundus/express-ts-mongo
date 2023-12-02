import express from "express";
import mongoose from "mongoose";
import router from "./routes";

const app = express();
const port = 3000;
const uri = "mongodb+srv://root:FltbJAt7yr6L1o7v@livekit.elj6nfb.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use("/api", router);
app.get("/", async (req: express.Request, res: express.Response) => {
   res.send("TODO APP PERMATA INDONESIA");
});

app.listen(port, async () => {
   try {
      await mongoose.connect(uri);

      console.log(`TODO APP PERMATA INDONESIA - running on port ${port}!`);
   } catch (error) {
      console.log(error);
   }
});
