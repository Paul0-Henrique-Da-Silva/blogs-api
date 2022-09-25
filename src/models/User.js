const UsersSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id:
    {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true
    });

  UserTable.associate = ({ BlogPost }) => {
    UserTable.hasMany(BlogPost, { foreignKey: 'userId', as: 'blogPosts' });
  };

  return UserTable;
};

module.exports = UsersSchema;
