const { mapValues } = require('lodash')
const User = require('../schema/user')

const getList = async (query = {}, page = 1, limit = 10, sort = { createdAt: -1 }) => {
  try {
    const options = {
      page,
      limit,
      sort
    }
    return await User.paginate(query, options)
  } catch (error) {
    console.log(error)
    return {}
  }
}

const create = async (data) => {
  try {
    const customer = new User(data)
    return await customer.save()
  } catch (error) {
    console.log(error)
    return null
  }
}

const update = async (id, data) => {
  try {
    const query = { _id: id }
    const comment = await User.findOne(query)
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
    return await User.deleteOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

const aggregate = async (stage) => {
  try {
    return await User.aggregate(stage)
  } catch (error) {
    console.log(error)
    return []
  }
}

const find = async (query) => {
  try {
    return await User.find(query)
  } catch (error) {
    console.log(error)
    return []
  }
}

const findOne = async (query) => {
  try {
    return await User.findOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

const findById = async (id) => {
  try {
    const query = { _id: id }
    return await User.findOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

const matchPassword = async (password) => {
  try {
    return await User.matchPassword(password)
  } catch (error) {
    console.log(error)
    return false
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
  findById,
  matchPassword
}
