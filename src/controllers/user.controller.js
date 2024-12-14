import { INTERNAL_SERVER, OK } from "../../const.js";
import pool from "../../db.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op } from "sequelize"; // sử dụng Op để sử dụng các toán tử trong sequelize Like , AND
const models = initModels(sequelize);

const createUser = async (req, res) => {
  //   let params = req.params;
  //   let { id } = params;
  //   let body = req.body;
  //   res.send({
  //     id,
  //     hoten,
  //   });

  // lấy data từ body của request
  try {
    const { full_name, email, password } = req.body;
    let newUser = await models.users.create({
      full_name,
      email,
      password,
    });
    return res.status(OK).json(newUser);
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: "error" });
  }
};

const getUsers = async (req, res) => {
  try {
    // const [data] = await pool.query("SELECT * FROM users"); // thêm ( Limit 1 )là chọn 1 bản thôi
    let { full_name = "" } = req.query;
    let data = await models.users.findAll({
      where: {
        full_name: {
          [Op.like]: `%${full_name}%`,
        },
      },
      attributes: ["full_name"],
      include: [
        {
          model: models.video, // chọn model mà muốn kết bảng
          as: "videos",
          attributes: ["video_name", "user_id"], // chỉ đỉnh những colum nào sẽ hiển thị
          required: true, // nếu true thì sẽ hiển thị những bản ghi có dữ liệu
          include: [
            {
              model: models.video_comment,
              as: "video_comments",
            },
          ],
        },
      ],
    });
    return res.status(OK).json(data);
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: "error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    // const [data] = await pool.query(`
    //     DELETE FROM users
    //     WHERE user_id = ${user_id}
    //     `);
    let user = await models.users.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.destroy();
    return res.status(OK).json({ message: "User deleted seccessfully!" });
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: "error" });
  }
};
const updateUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { full_name, pass_word } = req.body;

    // check user có tồn tài database hay không
    let user = await models.users.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let data = await models.users.update(
      { full_name, pass_word },
      { where: { user_id } }
    );
    //Cách 2 : dùng chính object user để update infor user
    // user.full_name = full_name || user.full_name;
    // user.pass_word = pass_word || user.pass_word;
    // await user.save();
    // return res.status(OK).json({ message: "User updated successfully!" });

    return res.status(OK).json({ message: "User updated successfully!" });
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: "error" });
  }
};

export { createUser, getUsers, deleteUser, updateUser };
