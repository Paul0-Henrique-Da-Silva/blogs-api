const UsersSchema = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define('Users', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
    {
      modelname: 'users',
      underscored: true
    });

  return UsersTable;
};


module.exports = UsersSchema;