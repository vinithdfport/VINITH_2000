const mongoose = require("mongoose");
const mongo_url = "mongodb://127.0.0.1:27017/notes_db?directConnection=true&serverSelectionTimeoutMS=2000"
const IS_DEBUG = true;
const connectToMongo = async () => {
    mongoose.Promise = global.Promise;
    
    try {
        await mongoose.connect(mongo_url);

        if(IS_DEBUG) { console.log("Connected to database");  }
    }
    catch( error ) {
        if(IS_DEBUG) { console.log("Cannot connect to database", error); }
        process.exit();
    }
}

const f = async() => {

    const NotesModel = (() => {
        const collection_name = 'note';
        const collection_fields = {
            title: String, 
            notes_text:String, 
            additional_information: String
        };
        const collection_config = {
            timestamps: false
        };
        
        const schema = mongoose.Schema(collection_fields, collection_config);
        const Model = mongoose.model(collection_name, schema);

        return Model;
    })();


    const notesDocs = await NotesModel.find().lean();
    console.log(notesDocs);
};

connectToMongo();
f();