const mariadb = require('mariadb');
const connection = mariadb.createConnection({host: '10.241.176.200', user:'yujupay', password:'12qwasZX!"', database: 'inventario_yujupay',connectionLimit: 2});



module.exports = {
	mostrarInventario: function(err) {
	if (err) throw err;
	connection.query("SELECT * from producto",
		function(err, result, fields) {
			if(err) throw err;
			console.log(result);
		});
	}
}



// module.exports = {

// 	mostrarInventario: async function asyncFunction() {
// 		let conn;
// 		try {
// 		conn = await pool.getConnection();
// 		rows = await conn.query("SELECT * from producto");
// 		return (rows); //[ {val: 1}, meta: ... ]
// 		//const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
// 		//console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

// 		} 
// 		catch (err) {
// 		throw err;
// 		} 
// 		finally {
// 		if (conn) return conn.end();
// 		}
// 	}



// }

