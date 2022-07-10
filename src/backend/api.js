 const client = require('./connection.js')
 const express = require('express');
 const app = express();
 const db = require('./connection.js')                       //It is not useful
 var cors = require('cors')

app.use(cors());
app.use(bodyParser.json());

// //const {Client} = require('pg');


// //   const client = new Client({
// //       host: "localhost",
// //       user: "postgres",
// //       port: 5432,
// //       password: "rootUser",
// //       database: "FOOD_DATA"
// //  })

// //  module.exports = client


 db.connect(err=>{
     if(err){console.log(err,dberr);}
     console.log('database connected..');
 })



// app.get('/user', (req, res)=>{

//     client.query(`Select * from foodimage`, (err, result)=>{
//         if(!err){
//             res.send(result.rows);
//         }
//     });
//     client.end;
// })
app.get('/food', (req, res) => {
    let qr = 'select * from "foodimage"'
    db
        .query({
            //rowMode: "array",
            text: qr
        })

        .then(result => {
            //console.log(result); 
            var data1 = [];
            for (var i = 0; i < result.rows.length; i++) {
                data1.push({
                    id: result.rows[i].id,
                    name: result.rows[i].name,
                    image_url: result.rows[i].image_url
                });

            }
            console.log(result.rows[0].Name);
            res.send(data1);
            //res.send(result.rows);
            //}
        })
        .catch(err => console.log(err, 'errs'));
});





app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})