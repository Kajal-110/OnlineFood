var db =require('./database');
const {connectableObserveble} = require('rxjs');
const express =require ('express');
const app =express();

db.connect(err =>{
    if(err) {console.log('err');    }
    console.log('database connected');
})

app.get('/user',(req,res)=>{
    let qr=`select * from food "`
    db
        .query({
            rowMode:"array",
            text:qr
        })
        .then(result => {
            res.send({
                message:'all info data',
                data:result.rows
            });
        })
        .catch(err => console.log(err,'errs'));
});
app.listen(3000,() => {
    console.log('Server Running');
})
