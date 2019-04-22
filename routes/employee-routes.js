const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employee-controller')

router.get('/', employeeController.getEmployees);
router.get('/:id', employeeController.getEmployee);
router.post('/', employeeController.createEmployee);
router.put('/:id', employeeController.editEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;