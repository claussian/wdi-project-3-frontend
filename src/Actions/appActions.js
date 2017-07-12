export const triggerNotification = (message) => {
  return {
    type: "TRIGGER_NOTIFICATION",
    message
  }
}

export const closeNotification = () => {
  return {
    type: "CLOSE_NOTIFICATION"
  }
}
