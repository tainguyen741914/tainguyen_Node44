import { INTERNAL_SERVER, OK } from "../../const.js";
import pool from "../../db.js";

const createUser = (req, res) => {
  let params = req.params;
  let { id } = params;
  let body = req.body;
  res.send({
    id,
    hoten,
  });
};

const getUsers = async (req, res) => {
  try {
    const [data] = await pool.query("SELECT * FROM users"); // thêm ( Limit 1 )là chọn 1 bản thôi
    res.status(OK).json(data);
  } catch (error) {
    res.status(INTERNAL_SERVER).json({ message: "error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    const [data] = await pool.query(`
        DELETE FROM users 
        WHERE user_id = ${user_id}
        `);
    res.status(OK).json(data);
  } catch (error) {
    res.status(INTERNAL_SERVER).json({ message: "error" });
  }
};

export { createUser, getUsers, deleteUser };
