const AdminStatus = {
  INACTIVE: 0,
  ACTIVE: 1,
  BANNED: 99,

  getDescription: (status) => {
    switch (status) {
      case AdminStatus.INACTIVE:
        return 'inactive'
      case AdminStatus.ACTIVE:
        return 'active'
      case AdminStatus.BANNED:
        return 'banned'
      default:
        return '-'
    }
  }
}

module.exports = AdminStatus
