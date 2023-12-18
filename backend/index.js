const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { connection } = require("./connection");

const { taskRouter } = require("./routes/task.routes");
const { projectRouter } = require("./routes/project.routes");
const { userRouter } = require("./routes/user.routes");
const LogModel = require("./model/log.model");

require("dotenv").config();

const PORT = process.env.PORT || 7070;

const app = express();

app.use(express.json());
app.use(cors());

app.use(
  morgan("common", {
    stream: {
      write: async (log) => {
        try {
          await LogModel.findOneAndUpdate(
            {},
            { $push: { logs: log } },
            { upsert: true }
          );
        } catch (err) {
          console.error("Error saving log to MongoDB:", err);
        }
      },
    },
  })
);

app.use("/users", userRouter);
app.use("/tasks", taskRouter);
app.use("/projects", projectRouter);

app.get("/", (req, res) => {
  try {
    res.status(200).send("Server is running");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Server is connected to PORT: ${PORT}`);
  } catch (error) {
    console.log("Index Error", error.message);
  }
});
