module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("posts", {
        title: {
            type: DataTypes.STRING
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return Posts ;
}   