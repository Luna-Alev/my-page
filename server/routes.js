const express = require('express');
const router = express.Router();

const projectController = require('./controllers/projectController');

router.get('/project', projectController.getProjects);

module.exports = router;