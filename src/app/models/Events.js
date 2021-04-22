module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Events', {

        is_adopted: DataTypes.BOOLEAN,

        createdAt:DataTypes.DATE,

        updatedAt: DataTypes.DATE
    })

    return Event;
};

