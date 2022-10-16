const UserStatus = {
  INACTIVE: 0,
  ACTIVE: 1,
  BANNED: 99,

  getDescription: (status) => {
    switch (status) {
      case UserStatus.INACTIVE:
        return 'inactive'
      case UserStatus.ACTIVE:
        return 'active'
      case UserStatus.BANNED:
        return 'banned'
      default:
        return '-'
    }
  }
}

module.exports = UserStatus
