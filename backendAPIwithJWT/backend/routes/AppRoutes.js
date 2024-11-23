class AppRoutes {   
    trainers = (trainersController, adminController) => {
        app.post("/trainers", [adminController.tokenVerify], trainersController.create);             
        app.get("/trainers", [adminController.tokenVerify], trainersController.readAll);     
        app.get("/trainers/:id", [adminController.tokenVerify], trainersController.readById);
        app.put("/trainers/:id", [adminController.tokenVerify], trainersController.update);
        app.delete("/trainers/:id", [adminController.tokenVerify], trainersController.remove);
    }
    
    auth = (adminController) => {
        app.post("/login", adminController.login);             
    }
    root = (appController) => {
        app.get("/", appController.serverRootAction); 
    }
}

module.exports = AppRoutes;