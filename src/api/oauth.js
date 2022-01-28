import { post } from 'axios'

const clientId = '99427fb058474145a75754fd1da23872'
const clientSecret = 'dD8aQ2xRiwsHjjelyqCv9fuiB7qzhG5c'

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()

  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  return post(API_URL, body, config)
}

export {
  getToken
}
