module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
    'member',
    {
    ex1: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    comment: '예시',
    },
    ex2: {
    type: DataTypes.STRING(100),
    primaryKey: false,
    allowNull: false,
    comment: '예시',
    }
    },
    {
        sequelize,
        tableName: 'post',
        timestamps: false,
        comment: '예시데이터',
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'ex1' }],
          },
        ],
      });
    };