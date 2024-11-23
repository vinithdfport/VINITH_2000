//TrainerModel
class TrainerController {
    create = async (request, response) => {
        const form = { ...request.body };
        
        let rbody = { };
        let rstatus = 200;

        try {
            const trainerModel = new TrainerModel( {
                _id : new mongoose.Types.ObjectId(),
                name: form.name, 
                location: form.location,
                technology: form.technology,
                phone_number: form.phone_number
            } );
            const trainerModelRes = await trainerModel.save();

            const trainerDoc = await TrainerModel.findOne({_id: trainerModel._id}).lean();

            rbody = {
                data : trainerDoc,
                isError: false,
                isLoggedIn: true
            };

            if(IS_DEBUG) { console.log("create", rbody); }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in creating trainer.\n${error}`},
                isError: true,
                isLoggedIn: true
            };         

            if(IS_DEBUG) { console.log("create", rbody); }

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }     

    update = async (request, response) => {
        //path variables
        const id = request.params.id;
        //form posted
        const form = { ...request.body };
        
        //
        let rbody = {};
        let rstatus = 200;

        try {
            const updatableTrainer = {
                name: form.name, 
                location: form.location,
                technology: form.technology,
                phone_number: form.phone_number
            };  
            const trainerModelRes = await TrainerModel.findOneAndUpdate({ _id : id }, updatableTrainer, {new: true});
            const updatedTrainer = await TrainerModel.findOne({ _id: id });
            
            if(!updatedTrainer) {
                rbody = {
                    data : {"message" : "trainer is not found"},
                    isError: true,
                    isLoggedIn: true
                };

                if(IS_DEBUG) { 'update', console.log(rbody); }

                rstatus = 404;
            }
            else {
                rbody = {
                    data : updatedTrainer,
                    isError: false,
                    isLoggedIn: true
                };

                if(IS_DEBUG) { 'update', console.log(rbody); }
            }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in updating trainer.\n${error}`},
                isError: true,
                isLoggedIn: true
            };

            if(IS_DEBUG) { 'update', console.log(rbody); }

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);        
    }
    
    remove = async (request, response) => {
        const id = request.params.id;
        
        let rbody = {};
        let rstatus = 200;

        try {
            const trainerModelRes = await TrainerModel.findOneAndDelete({ _id : id });

            if(!trainerModelRes) {
                rbody = {
                    data : {"message" : "trainer is not found"},
                    isError: true,
                    isLoggedIn: true
                };

                if(IS_DEBUG) { 'delete', console.log(rbody); }

                rstatus = 404;
            } 
            else {
                rbody = {
                    data : {message: "trainer is Deleted successfully."},
                    isError: false,
                    isLoggedIn: true
                }; 

                if(IS_DEBUG) { 'delete', console.log(rbody); }
            }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in deleting trainer.\n${error}`},
                isError: true,
                isLoggedIn: true
            };

            if(IS_DEBUG) { 'delete', console.log(rbody); }

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }  

    readAll = async (request, response) => {
        let rbody = {};
        let rstatus = 200;

        try {
            const trainerDocs = await TrainerModel.find().lean();

            rbody = {
                data : trainerDocs,
                isError: false,
                isLoggedIn: true
            };
            
            if(IS_DEBUG) { 'readAll', console.log(rbody); } 
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in reading all trainers.\n${error}`},
                isError: true,
                isLoggedIn: true
            };

            if(IS_DEBUG) { 'readAll', console.log(rbody); } 

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);  
    }
    
    readById = async (request, response) => {
        const id = request.params.id;

        let rbody = {};
        let rstatus = 200;

        try {
            const trainerDoc = await TrainerModel.findOne({ _id : id }).lean(); 

            if(!trainerDoc) {
                rbody = {
                    data : {"message" : "trainer is not found"},
                    isError: true,
                    isLoggedIn: true
                };

                if(IS_DEBUG) { 'read by id', console.log(rbody); } 

                rstatus = 404;
            }
            else {
                rbody = {
                    data : trainerDoc,
                    isError: false,
                    isLoggedIn: true
                };

                if(IS_DEBUG) { 'read by id', console.log(rbody); } 
            }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in reading trainer.\n${error}`},
                isError: false,
                isLoggedIn: true
            };

            if(IS_DEBUG) { 'read by id', console.log(rbody); } 

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }

}

module.exports = TrainerController;