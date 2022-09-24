const CategorySchema = (sequelize, DataTypes) => {
    const CategoryTable = sequelize.define('Category', {
        
        id: DataTypes.INTEGER,
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            modelname: 'categories',
            timestamps: false,
        })
    return CategoryTable
};

module.exports = CategorySchema;
