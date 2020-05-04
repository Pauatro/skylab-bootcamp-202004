//Devuelve los datos de todos los usuarios
function searchUser(token,query,callback){
    //Comprueba que los parametros son del tipo adecuado
    if(typeof query!=="string") throw new TypeError(query +" is not a string");
    query=query.toLowerCase();

    if(typeof token!=="string") throw new TypeError(token +" is not a string");
    if(typeof callback!=="function") throw new TypeError(callback+ " is not a function");

    call('GET', 'https://skylabcoders.herokuapp.com/api/v2/users/all', 
        undefined, 
        { "Authorization": `Bearer ${token}`}, 
        (error, status, body) => {
            if(error) return callback(error);
            if(status==200){
                const users = JSON.parse(body);
                let results=users.filter(function(user){return user.name && user.name.toLowerCase().includes(query) || user.surname && user.surname.toLowerCase().includes(query) || user.username && user.username.toLowerCase().includes(query)})
                results = results.map(({ name, surname, username, id }) => ({ name, surname, email: username, id }));
                callback(undefined, results);
            }else{
                callback(new Error(JSON.parse(body).error))
            }
            
        }
    )
}

