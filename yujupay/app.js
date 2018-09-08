
var express = require('express');
var app = express();
//const mariadb = require('./mariadb-connection.js');
const mariadb = require('mysql');
const connection = mariadb.createConnection({host: '10.241.176.200', user:'yujupay', password:'12qwasZX!"', database: 'inventario_yujupay',connectionLimit: 2});

app.get('/', function (req, res) {
  res.send('Bienvenido al Web Service de yujupay');
});

app.get('/inventario/mostrar',function(req, res) {
	connection.connect(function(err) {
	if (err) throw err;
	connection.query("SELECT * FROM producto",
		function(err, result, fields) {
			if(err) throw err;
			console.log(result);
		});
	});
});

app.get('/inventario/modificar/nombreProducto',function (req, res, next) {
	connection.connect(function(err) {
	if (err) throw err;
	connection.query("UPDATE producto SET nombre_producto='%s' WHERE address = '%s',(new,old)",
		function(err, result, fields) {
			if(err) throw err;
			console.log(result);
		});
	});	
});

app.get('/inventario/insertar/producto',function (req, res) {
	res.send('');
});

app.get('/inventario/borrar/producto',function (req, res) {
	res.send('');
});

app.listen(3000, function () {
  console.log('Servicio iniciado, escuchando por el puerto 3000');
});

