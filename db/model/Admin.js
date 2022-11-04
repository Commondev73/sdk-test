const { mapValues } = require('lodash')
const Admin = require('../schema/admin')

const getList = async (query = {}, page = 1, limit = 10, sort = { createdAt: -1 }) => {
  try {
    const options = {
      page,
      limit,
      sort
    }
    return await Admin.paginate(query, options)
  } catch (error) {
    console.log(error)
    return {}
  }
}

const create = async (data) => {
  try {
    const admin = new Admin(data)
    return await admin.save()
  } catch (error) {
    console.log(error)
    return null
  }
}

const update = async (id, data) => {
  try {
    const query = { _id: id }
    const comment = await Admin.findOne(query)
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
    return await Admin.deleteOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

const aggregate = async (stage) => {
  try {
    return await Admin.aggregate(stage)
  } catch (error) {
    console.log(error)
    return []
  }
}

const find = async (query) => {
  try {
    return await Admin.find(query)
  } catch (error) {
    console.log(error)
    return []
  }
}

const findOne = async (query) => {
  try {
    return await Admin.findOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

const findById = async (id) => {
  try {
    const query = { _id: id }
    return await Admin.findOne(query)
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
