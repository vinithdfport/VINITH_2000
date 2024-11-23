const jwt = require("jsonwebtoken");

class AdminController {
    login = async(request, response) => {
        /*
        POST /login
            {
                "username": "mahesh",
                "password": "1234"
            }
        */    
        let responseCode = 200;
        let responseBody = {};
        let isValidLogin = true;

        const form = {...request.body};
        const inputLogin = {name:form.username, password:form.password};
        console.log(inputLogin);

        const oldAdmin = await AdminModel.findOne(
                    {
                        name: inputLogin.name
                    }
            );
        if(!oldAdmin){
            isValidLogin = false;
            responseCode = 200;
            responseBody = {isValidLogin: isValidLogin, message: 'Invalid username / password'}
        }

        
        if(isValidLogin){
            if(oldAdmin.password !== inputLogin.password) {
                isValidLogin = false;
                responseCode = 200;
                responseBody = {isValidLogin: isValidLogin, message: 'Invalid username / password'}
            }
        }
        
        
        if(isValidLogin){

            let token_json = {
                username: form.username, 
                name: form.username,
                app: 'admin',
                role: 'admin',
                admin_id: oldAdmin.id
            };
            console.log(token_json)
            
            const token = jwt.sign(
                token_json,
                jwtConfig.jwtSecret,
                {
                    algorithm: 'HS256',
                    allowInsecureKeySizes: true,
                    expiresIn: jwtConfig.jwtExpires
                }
            );

            const userData = {token: token, 
                ...token_json}
            responseCode = 200;
            responseBody = {isValidLogin: true, message: 'Successful Login', user: userData}
        }        
        response.status(responseCode).send(responseBody)
    }
        
    tokenVerify = (request, response, next)=>{
        let responseCode = 200;
        let responseBody = {};

        let token = request.headers["x-access-token"];

        if(!token){
            responseCode = 401;
            responseBody = {isLoggedIn: false, message: 'Unauthorized Access'};

            response.status(responseCode).send(responseBody);
        }

        jwt.verify(token,
            jwtConfig.jwtSecret,
            (err, decoded) => {
                if (err) {
                    console.log('unauthorized') // XXXXX
                    responseCode = 401;
                    responseBody = {isLoggedIn: false, message: 'Login Expired'};
                    response.status(responseCode).send(responseBody);
                    return
                }
                
                console.log('authorized', decoded) // XXXXX
                request.loginData = {loginname: decoded.loginname, role: decoded.role, app: decoded.app,
                    name: decoded.name, admin_id:decoded.admin_id}
                next()
            });
    }  
}

module.exports = AdminController;