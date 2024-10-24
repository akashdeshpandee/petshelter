const {createPool }=require('mysql');
const pool= createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs",
    connectionLimit: 10
})
pool.query(`select * from login WHERE username=? AND password=?`, [username, password] ,(err,result,fields)=>{
    if(err){
        return console.log(err);

    }
    return console.log(result);n
})