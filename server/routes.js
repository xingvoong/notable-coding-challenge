const router = require('express').Router();
const controller = require('./controller');

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/users', controller.users.getAllUsers);
router.get('/users/username/:username', controller.users.getUserByName);
router.get('/users/:userID', controller.users.getUserById)
router.post('/users/create', controller.users.createUser);
router.delete('/users/delete/:id', controller.users.deleteUser);

module.exports = router;