const userControllers = require("../controllers/userControllers");
const groupControllers = require("../controllers/groupController");

module.exports = app => {
  // Creates a new user. Creates a new row for the user in User collection.
  app.route("/newuser").post(userControllers.userCreate);

  // Returns all users in the database. This is just for manual debugging,
  // frontend should never need to user it.
  app.route("/users").get(userControllers.usersGetAll);

  // Performs get/post/delete operations on the given user.
  app.route("/getevents").post(userControllers.getEvents);
  app.route("/event").post(userControllers.addEvent);
  app
    .route("/user/:id")
    .get(userControllers.userGetById)
    .post(userControllers.userEdit)
    .delete(userControllers.userDelete);
  app.route("/userToken/:id").get(userControllers.userGetByToken);
  app.route("/newgroup").post(groupControllers.groupCreate);

  // app.route("/auth").post(userControllers.userToken);
};
