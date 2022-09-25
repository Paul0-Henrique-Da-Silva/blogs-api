module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id:
    {
     type: DataTypes.INTEGER,
     primaryKey: true, autoIncrement: true 
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
    {
      modelname: 'users',
      underscored: true
    });

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'user' });
  };


  return User;
};
