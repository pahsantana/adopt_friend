import Sequelize, { Model } from "sequelize";

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3030/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'files',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(
      models.Pet,
      {
        foreignKey: "avatar_id",
      }
    );
  }
}

export default File;