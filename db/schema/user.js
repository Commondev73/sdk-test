const Mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2')
const { UserStatus } = require('../../constants')

const UserSchema = new Mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: [8, 'Please use minimum of 8 characters']
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    status: {
      type: Number,
      default: UserStatus.ACTIVE,
      required: true
    },
    photo: {
      type: String
    }
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true
  }
)

UserSchema.plugin(paginate)
const User = Mongoose.model('User', UserSchema)
module.exports = User
