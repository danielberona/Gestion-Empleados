/**
 * Vamos a crear rutas del servidor
 * creamos un m�dulo por eso utilizamos express
 * vamos a utilizar como nuestra rest api para 
 * enviar y recibir datos en formato json
 */
 const express = require('express');
 const router = express.Router();
 /* generamos un ejemplo cuando le soliciten 
 algo al servidor por el m�todo GET **/  
 
 const empleadoCtrl = require('../controllers/empleado.controller')
 
 // ruta para odtener todos los empleados
 router.get('/',empleadoCtrl.getEmpleados);

 // ruta para crear un nuevo empleado 
 router.post('/',empleadoCtrl.createEmpleados);

 // ruta para odtener el id del empleado 
 router.get(/:id/,empleadoCtrl.getUnicoEmpleado);

 // ruta para actualizar empleado
 router.put(/id/,empleadoCtrl.editarEmpleado);

 // eliminar el empleado
 router.delete('/:id',empleadoCtrl.eliminarEmpleado);
 module.exports = router;
