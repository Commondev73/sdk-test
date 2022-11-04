const Mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2')
const { AdminStatus } = require('../../constants')

const AdminSchema = new Mongoose.Schema(
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
      default: AdminStatus.ACTIVE,
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

AdminSchema.plugin(paginate)
const User = Mongoose.model('admin', AdminSchema)
module.exports = User
