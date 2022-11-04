const Mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2')

const UserEventSchema = new Mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    seat: {
      type: String
    },
    eventId: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true
    }
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true
  }
)

UserEventSchema.plugin(paginate)
const UserEvent = Mongoose.model('userEvent', UserEventSchema)
module.exports = UserEvent
