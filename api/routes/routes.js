const userControllers = require("../controllers/userControllers");

module.exports = app => {
  // Creates a new user. Creates a new row for the user in User collection.
  app.route("/newuser").post(userControllers.userCreate);

  // Returns all users in the database. This is just for manual debugging,
  // frontend should never need to user it.
  app.route("/users").get(userControllers.usersGetAll);

  // Performs get/post/delete operations on the given user.
  app
    .route("/user/:id")
    .get(userControllers.userGetById)
    .post(userControllers.userEdit)
    .delete(userControllers.userDelete);

  // Recieve client token after authentication

  // app.route("/auth").post(userControllers.userToken);
};
