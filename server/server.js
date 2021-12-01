const express = require("express");
const app = express();

const tasks = [
  {
    title: "Rinse the dishes",
    dueDate: "2021-11-24",
    assignee: "Reza",
    details:
      "Get out the hose, throw the dishes on the driveway, spray them til clean",
  },
  {
    title: "Rinse the car",
    dueDate: "2021-11-25",
    assignee: "Michelle",
    details:
      "Get out the hose, put the car on the driveway, spray it til clean",
  },
];
app.use(express.json())
app.use("*", (req, res, next) => {
  console.log('path is ' + req.originalUrl)
  next()
})
app.get("/api/tasks", (req, res) => {
  console.log("we got here");
  res.json(tasks);
});
app.post("/api/tasks", (req, res) => {
    const newTask = req.body
    tasks.push(newTask)
    console.log('new task added', newTask)
    res.send("success")
});

app.use('*', (req, res) => {
  console.log('we didn\'t get anywhere')
  res.send('Sorry that path doesn\'t exist')
})
app.listen(5000, () => {
  console.log("listening on 5000");
});
