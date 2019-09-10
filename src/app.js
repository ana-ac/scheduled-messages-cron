// requirements
const config = require('./config/config')

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    })

    // set configuration for browser
    const page = await browser.newPage()
    await page.setUserAgent(config.whatsapp_user_agent)
    await page.setViewport({ width: 1600, height: 1600 })

    // load init page
    await page.goto(config.url_whatsapp)
    await page.waitFor(30000)

    // look at chats
    await page.screenshot({ path: 'page-loaded-1.png' })
    const wrapper = await page.$('.app-wrapper-web');
    wrapper.querySelectorAll('._2UaNq [title]').forEach(title => {
        console.log(title);
    })
    await page.screenshot({ path: 'page-loaded-2.png' })

    // close browser
    //await browser.close()
})()