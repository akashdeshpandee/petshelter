var mysql = require('mysql2');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"nodejs"
});
con.connect((err)=>{
            if (err) {
              console.warn("error")  }
            else{
            console.log("connected");}
            //console.log(result.length);
            
     });
     con.query("select * from login",(err,result)=>{
      console.warn("result",result)
     })
     module.exports=con;