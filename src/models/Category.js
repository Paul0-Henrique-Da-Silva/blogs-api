const CategorySchema = (sequelize, DataTypes) => {
    const CategoryTable = sequelize.define('Category', {
        
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            tableName: 'categories',
            timestamps: false,
            underscored: true,
        })
    return CategoryTable
};

module.exports = CategorySchema;
