import Mongoose from 'mongoose'
import config from 'config'
import bluebird from 'bluebird'

export default datastore()

function datastore () {
  // Read mongoHost and Port from config
  const mongoDBHost = config.get('MONGODB_HOST')
  const mongoDBPort = config.get('MONGODB_PORT')
  // Connect to Database
  Mongoose.connect(`mongodb://${mongoDBHost}:${mongoDBPort}/flexin`, { useMongoClient: true })
  Mongoose.Promise = bluebird
  Mongoose.set('debug', true)
  return {
    // function to store document in mongo
    addToStore: async function addToStore (obj) {
      return new Promise((resolve, reject) => {
        obj.save(function (err, doc) {
          if (err) {
            reject(err)
          } else {
            resolve(doc)
          }
        })
      })
    }
  }
}
