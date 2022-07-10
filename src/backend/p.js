const express = require('express')
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('./connection')
const app = express();
app.use(cors());
app.use(bodyparser.json());


db.connect(err => {
    if (err) { console.log('err'); }
    console.log('database Connected...');
})


app.get('/user', (req, res) => {
    let qr = 'select * from "FoodDetail"'
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
                    ID: result.rows[i].ID,
                    NAME: result.rows[i].NAME,
                    COOKTIME: result.rows[i].COOKTIME,
                    PRICE: result.rows[i].PRICE,
                    FAVORITE: result.rows[i].FAVORITE,
                    ORIGIN: result.rows[i].ORIGIN,
                    STAR: result.rows[i].STAR,
                    IMAGEURL: result.rows[i].IMAGEURL
                });

            }
            //console.log(result.rows[0].NAME);
            res.send(data1);
            //res.send(result.rows);
            //}
        })
        .catch(err => console.log(err, 'errs'));
});
app.listen(3000, () => {
    console.log('server Running');
})
