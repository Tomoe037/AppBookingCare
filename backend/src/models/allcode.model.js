import pkg from "sequelize";
const { Model, DataTypes } = pkg;

export default (sequelize) => {
  class Allcode extends Model {
    static associate(models) {
      // associate de dinh danh cac moi quan he
      Allcode.hasMany(models.User, {
        foreignKey: "positionId",
        as: "positionData",
      });
      Allcode.hasMany(models.User, {
        foreignKey: "gender",
        as: "genderData",
      });
    }
  }

  Allcode.init(
    {
      keyMap: DataTypes.STRING,
      type: DataTypes.STRING,
      valueEn: DataTypes.STRING,
      valueVi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Allcode",
    }
  );

  return Allcode;
};
