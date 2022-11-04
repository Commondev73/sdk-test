const { mapValues } = require('lodash')
const UserEvent = require('../schema/userEvent')

const getList = async (query = {}, page = 1, limit = 10, sort = { createdAt: -1 }) => {
  try {
    const options = {
      page,
      limit,
      sort
    }
    return await UserEvent.paginate(query, options)
  } catch (error) {
    console.log(error)
    return {}
  }
}

const create = async (data) => {
  try {
    const userEvent = new UserEvent(data)
    return await userEvent.save()
  } catch (error) {
    console.log(error)
    return null
  }
}

const update = async (id, data) => {
  try {
    const query = { _id: id }
    const comment = await UserEvent.findOne(query)
    if (comment && comment._id) {
      mapValues(data, (value, key) => {
        comment[key] = value
      })
      return await comment.save()
    }
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

const remove = async (id) => {
  try {
    const query = { _id: id }
    return await UserEvent.deleteOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

const aggregate = async (stage) => {
  try {
    return await UserEvent.aggregate(stage)
  } catch (error) {
    console.log(error)
    return []
  }
}

const find = async (query) => {
  try {
    return await UserEvent.find(query)
  } catch (error) {
    console.log(error)
    return []
  }
}

const findOne = async (query) => {
  try {
    return await UserEvent.findOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

const findById = async (id) => {
  try {
    const query = { _id: id }
    return await UserEvent.findOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

module.exports = {
  getList,
  create,
  update,
  remove,
  aggregate,
  find,
  findOne,
  findById
}
