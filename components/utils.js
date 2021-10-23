import urlExist from "url-exist"

export const social_url = {
  'facebook': 'https://facebook.com',
  'instagram': 'https://instagram.com',
  'linkedin': 'https://linkedin.com/in',
  'twitter': 'https://twitter.com',
  'github': 'https://github.com',
}
// TODO: add slack, producthunt, youtube, reddit, medium, gravatar, paypal, canva, telegram

export const domains = ['.com', '.net', '.app', '.org', '.us', '.me', '.info', '.xyz']

const config = {
  crossdomain: true,
  headers: {'Access-Control-Allow-Origin': '*'}
}

export const isUserExists = async (username, social) => {
  const url = `${social_url[social]}/${username}`
  return await urlExist(url)
}

export const checkAllSocials = async (username) => {
  const socialStatus = {}

  for (const social in social_url) {
    const response = await isUserExists(username, social)
    socialStatus[social] = response
  }
  return socialStatus
}