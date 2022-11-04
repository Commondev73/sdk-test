const EventStatus = {
  HIDDEN: 0,
  SHOW: 1,

  getDescription: (status) => {
    switch (status) {
      case EventStatus.SHOW:
        return 'แสดง'
      case EventStatus.HIDDEN:
        return 'ซ่อน'
      default:
        return '-'
    }
  }
}

module.exports = EventStatus
