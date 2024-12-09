import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "node44", // tên database
  "root", // tên user
  "123456", // password user
  {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  }
);
export default sequelize;
