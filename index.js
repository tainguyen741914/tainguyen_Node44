//B1 : improt lib express
import express from "express";

// B2 : tạo object express
const app = express();

// thêm middleware để để đọc data json
app.use(express.json());

//B3 : define port cho BE chạy
// params 1 : define port BE
// params 2 : callback function

app.get("/", (req, res) => {
  res.send("Hello node44");
});
app.get("/test", (req, res) => {
  res.send("Test api");
});
app.post("/user/:id", (req, res) => {
  let params = req.params;
  let { id } = params;
  let body = req.body;
  res.send({
    id,
    hoten,
  });
});

// demo get query từ URL
app.get("/test-query", (req, res) => {
  let query = req.query;
  res.send(query);
});

//demo get header from request
app.get("/test-header", (req, res) => {
  let query = req.headers;
  res.send(headers);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
