import datastore from '../../lib/service/db/datastore'
import Mongoose from 'mongoose'
import crypto from 'crypto'

export default userModel()

function userModel () {
  const Schema = Mongoose.Schema

  const UserSchema = new Schema({

    username: {
      type: String,
      required: true,
      unique: true,
      dropDups: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true

    },
    admin: Boolean

  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  })
  // Static Method to match encrypted password
  UserSchema.statics.matchPassword = (password, userPassword) => {
    const decipher = crypto.createDecipheriv('aes192', 'password')
    let decrypted = decipher.update(password, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    if (userPassword === decrypted) {
      return true
    } else {
      return false
    }
  }
  return { createNew: async function createNew (user) {
    UserSchema.pre('save', function (next) {
      const cipher = crypto.createCipheriv('aes192', 'password')
      let encrypted = cipher.update(this.password, 'utf8', 'hex')
      encrypted += cipher.final('hex')
      this.password = encrypted // Encrypted incomming password
      next()
    })

    UserSchema.set('toJSON', {
      transform: function (doc, ret, options) {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
      }
    })
    const UserModel = Mongoose.model('userModel', UserSchema)
    return await datastore.addToStore(new UserModel(user))
  }
  }
}
