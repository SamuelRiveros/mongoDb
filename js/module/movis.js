import { connect } from "../../helpers/db/connect.js";


export class movis extends connect {
    static instance; 
    constructor() {
        if(typeof movis.instance === "object") {
            return movis.instance;
        }
        super();
        this.collection = this.db.collection("movis");
        movis.instance = this;
        return this;
    }


    // consultas

    async getAllMovis(){
        let res = await this.collection.find({}).toArray();
        await this.conexion.close()
        return res;
    }

    async getMoviesByGenreAction() {
        let res = await this.collection.find({ genre: { $elemMatch: { $eq: "Accion" } } }, { projection: { _id: 0, genre: 1 } }).toArray();
        await this.conexion.close();
        return res;
    }

    async getMoviesWithMoreThan200CopiesInBluray() {
        let res = await this.collection.find({ "format.name": "Bluray", "format.copies": { $gt: 200 } }, {projection: { _id: 0, format: 1 }}).toArray();
        await this.conexion.close();
        return res;
    }

    async getMoviesWithDVDValueLessThan10() {
        let res = await this.collection.find({ "format.name": "dvd", "format.value": { $lt: 10 } }, {projection: { _id: 0, format: 1 }} ).toArray();
        await this.conexion.close();
        return res;
    }
    
    async getMoviesWithCharacterCobb() {
        let res = await this.collection.find({ "character": { $elemMatch: { "apodo": "Cobb" } } }, {projection: { "_id": 0, "name": 1, "character": 1 }} ).sort({ "character.apodo": -1 }).toArray();
        await this.conexion.close();
        return res;
    }

    async getMoviesWithActors2And3() {
        let res = await this.collection.find({ character: { $elemMatch: { id_actor: { $in: [2, 3] } } } }, {projection: { _id: 0, name: 1, genre: 1 }} ).toArray();
        await this.conexion.close();
        return res;
    }

    
    async getMoviesWithBlurayFormat() {
        let res = await this.collection.find({ "format": { $elemMatch: { "name": "Bluray" } } }, {projection: { _id: 0, "name": 1, "format": 1 }} ).toArray();
        await this.conexion.close();
        return res;
    }

    async getMoviesByGenreSciFi() {
        let res = await this.collection.find({ genre: { $elemMatch: { $eq: "Ciencia Ficción" } } }, {projection: { _id: 0, genre: 1 }} ).toArray();
        await this.conexion.close();
        return res;
    }
    
    async getMoviesWithMainCharacterMiguel() {
        let res = await this.collection.find({ "character.rol": "principal", "character.apodo": "Miguel" }, {projection: { _id: 0, character: 1, apodo: 1 }} ).toArray();
        await this.conexion.close();
        return res;
    }

    async getMoviesWithFormatMoreThan100Copies() {
        let res = await this.collection.find({ "format": { $elemMatch: { "copies": { $gt: 100 } } } }, {projection: { _id: 0, "name": 1, "format": 1 }} ).toArray();
        await this.conexion.close();
        return res;
    }

    async getMoviesWithActorId1() {
        let res = await this.collection.find({ character: { $elemMatch: { id_actor: { $in: [1] } } } }, {projection: { _id: 0, character: 1 }} ).toArray();
        await this.conexion.close();
        return res;
    }

    async getMoviesWithMainCharacterCobb() {
        let res = await this.collection.find({ "character": { $elemMatch: { "apodo": "Cobb" } } }, {projection: { "_id": 0, "name": 1, "character": 1 }} ).sort({ "character.apodo": -1 }).toArray();
        await this.conexion.close();
        return res;
    }
    
    async getMoviesWithMainCharacterCobbRole() {
        let res = await this.collection.find({ "character.rol": "principal", "character.apodo": "Cobb" }, {projection: { _id: 0, character: 1, apodo: 1 }} ).toArray();
        await this.conexion.close();
        return res;
    }

    async getMoviesWithBlurayMoreThan200Copies() {
        let res = await this.collection.find({ "format.name": "Bluray", "format.copies": { $gt: 200 } }, {projection: { _id: 0, format: 1 }} ).toArray();
        await this.conexion.close();
        return res;
    }

    async getMoviesWithDVDValueLessThan10Again() {
        let res = await this.collection.find({ "format.name": "dvd", "format.value": { $lt: 10 } }, {projection: { _id: 0, format: 1 }} ).toArray();
        await this.conexion.close();
        return res;
    }

    async getMoviesWithSecondaryCharacterArthur() {
        let res = await this.collection.find({ "character.rol": "secundario", "character.apodo": "Arthur" }, {projection: { _id: 0, character: 1, apodo: 1 }} ).toArray();
        await this.conexion.close();
        return res;
    }

    async getMoviesWithMainCharacterMiguelRole() {
        let res = await this.collection.find({ "character.rol": "principal", "character.apodo": "Miguel" }, {projection: { _id: 0, character: 1, apodo: 1 }} ).toArray();
        await this.conexion.close();
        return res;
    }    
}