import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

let teaData = [];
let nextId = 1;

// Create tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);
  return res.status(201).send(newTea);
});

// Get all the teas
app.get("/teas", (req, res) => {
  return res.status(200).send(teaData);
});

// Get / update / delete the tea
app
  .route("/teas/:id")
  .get((req, res) => {
    const tea = teaData.find((t) => t.id === parseInt(req.params.id));
    if (!tea) {
      return res.status(404).send("Tea does not exists");
    }
    return res.status(200).send(tea);
  })
  .put((req, res) => {
    const tea = teaData.find((t) => t.id === parseInt(req.params.id));
    if (!tea) {
      return res.status(404).send("Tea does not exists");
    }
    const { name, price } = req.body;
    tea.name = name;
    tea.price = price;
    return res.status(200).send(tea);
  })
  .delete((req, res) => {
    const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).send("Tea does not exists");
    }
    teaData.splice(index, 1);
    return res.status(200).send("Deleted the tea");
  });

// app.get("/", (req, res) => {
//   return res.status(200).send("Hello, Backend is working !!!");
// });

// app.get("/ice-tea", (req, res) => {
//  return res.status(200).send("What ice tea would you prefer?");
// });

// app.get("/register", (req, res) => {
//  return res.status(200).send("User is registered successfully");
// });

app.listen(PORT, () => {
  console.log(`Server is listening to http://localhost:${PORT}`);
});
