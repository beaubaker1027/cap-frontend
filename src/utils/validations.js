export function emailValidation(input){
  return new Promise((resolve, reject) => {
    //email validation
    //regex to ensure is email
  })
}

export function userNameValidation(input){
  return new Promise((resolve, reject) => {
    reject(input)
    //userName validation
    //fetch username validation from api
  })
}

export function passwordValidation(input){
  return new Promise((resolve, reject) => {
    reject(input)
    //password validation
    //regex make sure password is >= 8 characters
    //and has number, symbol, and capital letter
  })
}
