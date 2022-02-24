import express from "express";
import { newsRouter } from "./routes/news.routes";
import { tagRouter } from "./routes/tags.routes";

const app = express();

app.use(express.json());

app.use("/news", newsRouter);
app.use("/tag", tagRouter);

app.listen(3333, () => {
    console.log("Server started on port 3333");
});
