class AppModel {
    TrainerModel = () => {
        const collection_name = 'trainer';
        const collection_fields = {
            name: String,
            location: String,
            technology: String,
            phone_number: String
        };
        const collection_config = {
            timestamps: false
        };

        const schema = mongoose.Schema(collection_fields, collection_config);
        const Model = mongoose.model(collection_name, schema);

        return Model;
    }

    AdminModel = () => {
        const collection_name = 'user';
        const collection_fields = {
            name: String, password: String
        };
        const collection_config = {
            timestamps: false
        };

        const schema = mongoose.Schema(collection_fields, collection_config);
        const Model = mongoose.model(collection_name, schema);

        return Model;
    }
}

module.exports = AppModel;