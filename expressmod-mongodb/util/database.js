const mongodb = require('mongodb')
require('dotenv').config();
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {

    MongoClient
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`)
    .then(client => {
        _db = client.db()
        callback(client)
    })
    .catch(err => {
        console.log(err)
        throw err
    })

}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'no database found.'
}

exports .mongoConnect = mongoConnect;
exports.getDb = getDb