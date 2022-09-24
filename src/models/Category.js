const CategorySchema = (sequelize, DataTypes) => {

    const CategoryTable = sequelize.define('Category', {
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
