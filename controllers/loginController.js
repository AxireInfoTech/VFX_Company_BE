const registerUser = (req, res) => {
    res.render("register", {
    } );
}
// For View 
const loginUser = (req, res) => {

    res.render("login", {
    } );
}
module.exports =  {
    registerUser,
    loginUser
};