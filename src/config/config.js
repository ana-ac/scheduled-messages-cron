require('dotenv-safe').config();
const config = require('../../config');

module.exports = {
    url_whatsapp : config.url_whatsapp_web,
    whatsapp_user_agent : config.whatsapp_user_agent,
}