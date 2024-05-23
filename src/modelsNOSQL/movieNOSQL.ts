import dynamodb from '../services/dynamoService'
import joi from "joi";
import {PREFIX_NAME} from "../config";

const MovieModel = dynamodb.define('movie',{
    hashKey:'MovieId',
    timestamps:false,
    schema:{
        MovieId:dynamodb.types.uuid(),
        director:joi.string(),
        release:joi.number(),
        imdb:joi.number()
    },
    tableName: `Movie${PREFIX_NAME}`
})


dynamodb.createTables((err) => {
    if(err)
        return console.log(err);
    console.log("Tabla creada")
})

export default MovieModel;
