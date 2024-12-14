import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op } from "sequelize"; // sử dụng Op để sử dụng các toán tử trong sequelize Like , AND

const models = initModels(sequelize);

const getListVideo = async (req, res) => {
  try {
    let data = await models.video.findAll();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "error" });
  }
};

export { getListVideo };
