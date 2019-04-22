const modelEmployee = require('../models/employee');
const employeeController = {};

employeeController.getEmployees = async (req, res) =>{
    const employees = await modelEmployee.find();
    res.json(employees);
};

employeeController.getEmployee = (req, res) =>{
    res.json({
        status: 'Employee goes here!'
    });
};

employeeController.createEmployee = async (req, res) =>{
    const employee = new modelEmployee(req.body);
    console.log(employee);
    await employee.save();
    res.json({
        'status': 'Employee is saved!'
    });
};

employeeController.editEmployee = (req, res) =>{
    res.json({

    });
};

employeeController.deleteEmployee = (req, res) =>{
    res.json({

    });
};


module.exports = employeeController;