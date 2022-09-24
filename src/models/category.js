const CategorySchema = (sequelize, DataTypes) => {

    const CategoryTable = sequelize.define('Categories', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            timestamps: false,
        })
    return CategoryTable
};

module.exports = CategorySchema;