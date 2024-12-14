//B1 : improt lib express
import express from "express";
import pool from "./db.js";
import { OK, INTERNAL_SERVER } from "./const.js";
import rootRoutes from "./src/routes/root.router.js";
import cors from "cors";

// B2 : tạo object express
const app = express();

// thêm middleware để để đọc data json
app.use(express.json());
app.use("/", rootRoutes);
// import rootRouter
app.use(rootRoutes);

// thêm middleware cors để FE có thể call API tới BE
app.use(cors());

//B3 : define port cho BE chạy
// params 1 : define port BE
// params 2 : callback function

app.get("/", (req, res) => {
  res.send("Hello node44");
});
app.get("/test", (req, res) => {
  res.send("Test api");
});

// demo get params từ url
// app.post("/user/:id", (req, res) => {
//   let params = req.params;
//   let { id } = params;
//   let body = req.body;
//   res.send({
//     id,
//     hoten,
//   });
// });

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

// app.get("/users", async (req, res) => {
//   try {
//     const [data] = await pool.query("SELECT * FROM users"); // thêm ( Limit 1 )là chọn 1 bản thôi
//     res.status(OK).json(data);
//   } catch (error) {
//     res.status(INTERNAL_SERVER).json({ message: "error" });
//   }
// });

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
