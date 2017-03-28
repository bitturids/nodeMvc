"use strict"
module.exports = function(sequelize, DataTypes){

    var User = sequelize.define("User",{
        name : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        isStudent : {
            type : DataTypes.BOOLEAN,
        } 

    });

    return User;
}