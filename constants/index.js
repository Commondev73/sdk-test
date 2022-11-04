module.exports = {
  UserStatus: require('./UserStatus'),
  AdminStatus: require('./AdminStatus'),
  EventStatus: require('./EventStatus'),
  RemoveFieldsFromPopulate: {
    password: 0,
    firstName: 0,
    lastName: 0
  }
}
