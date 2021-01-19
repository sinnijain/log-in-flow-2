export const emailRgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const capsNameRgx = /[A-Z]/ 

export const phoneNumRgx = /^\d+$/

export const isEmail = (email) => emailRgx.test(email)

export const isCapsName = (name) => capsNameRgx.test(name)

export const isPhoneNum = (phone) => phoneNumRgx.test(phone)
