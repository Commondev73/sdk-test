const Mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2')
const { EventStatus } = require('../../constants')

const EventSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    startDate: {
      type: Date
    },
    endDate: {
      type: Date
    },
    status: {
      type: Number,
      default: EventStatus.SHOW,
      required: true
    },
    limit: {
      type: Number,
      required: true
    },
    adminId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: 'admin',
      required: true
    }
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true
  }
)

EventSchema.plugin(paginate)
const Event = Mongoose.model('event', EventSchema)
module.exports = Event
