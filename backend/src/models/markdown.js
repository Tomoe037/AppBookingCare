import pkg from "sequelize";
const { Model, DataTypes } = pkg;

export default (sequelize) => {
  class Markdown extends Model {
    static associate(models) {
      // associate de dinh danh cac moi quan he
      //quan he voi User
      Markdown.belongsTo(models.User, {
        foreignKey: "doctorId",
      });
    }
  }

  Markdown.init(
    {
      contentHTML: DataTypes.TEXT("long"),
      contentMarkdown: DataTypes.TEXT("long"),
      description: DataTypes.TEXT("long"),
      doctorId: DataTypes.INTEGER,
      specialtyId: DataTypes.INTEGER,
      clinicId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Markdown",
    }
  );

  return Markdown;
};
