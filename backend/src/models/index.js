import SequelizeModule from "sequelize";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const { Sequelize, DataTypes } = SequelizeModule;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.resolve(__dirname, "../config/config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"))[
  process.env.NODE_ENV || "development"
];

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

const db = { sequelize, Sequelize, DataTypes };

const modelsPath = path.resolve(__dirname);

const modelFiles = fs
  .readdirSync(modelsPath)
  .filter((file) => file !== "index.js" && file.endsWith(".js"));
// Duyệt lần lượt và chờ import từng model
for (const file of modelFiles) {
  const modelModule = await import(`file://${path.join(modelsPath, file)}`);
  const model = modelModule.default(sequelize, DataTypes);
  db[model.name] = model;
}

// Gọi associate sau khi tất cả model đã được gán vào db
for (const modelName of Object.keys(db)) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
}

export default db;
