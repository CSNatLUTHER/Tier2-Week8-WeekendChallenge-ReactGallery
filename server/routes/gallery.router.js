const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require( '../modules/pool' );

// DO NOT MODIFY THIS FILE FOR BASE MODE

// GET Route
router.get('/', (req, res) => {
    let queryString = `SELECT * 
                        FROM gallery_items
                        ORDER BY id DESC`
    pool.query( queryString ).then( ( results )=>{
        res.send( results.rows );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
}); // END PUT Route

// PUT Route
router.put('/like', (req, res) => {
    let queryString = `UPDATE "gallery_items"
                        SET likes = ${req.query.likes}
                       WHERE id = ${req.query.id};`
    pool.query( queryString ).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
}); // END GET Route

router.post('/', (req, res) => {
    console.log(req.body);
    let queryString = `INSERT INTO "gallery_items" ( "path", "description", "likes")
    VALUES ($1, $2, $3 );`;
    let values = [req.body.path, req.body.description, req.body.likes ]
    pool.query( queryString, values ).then( ( results )=>{
        res.sendStatus( 201 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
}); // END GET Route

router.delete('/', (req, res) => {
    console.log(req.query);
    let queryString = `DELETE FROM gallery_items
                       WHERE id=${req.query.id};`;
    pool.query( queryString ).then( ( results )=>{
        res.sendStatus( 201 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
}); // END GET Route
module.exports = router;