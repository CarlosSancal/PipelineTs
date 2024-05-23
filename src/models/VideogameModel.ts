import {Model, Sequelize} from "sequelize"

interface VideogameAttributes {
    id: number;
    name: string;
    ign_score: number;
    developer: string;
}

module.exports = (sequelize: any,DataTypes: any) => {
    class Videogame extends Model<VideogameAttributes> implements VideogameAttributes {
        public id!: number;
        name!: string;
        ign_score!: number;
        developer!: string;
    }
    Videogame.init({
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        ign_score:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        developer:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        sequelize,
        modelName:'Videogame'
    });
    return Videogame;
}
