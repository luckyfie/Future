var Scraper = require('images-scraper');

const google = new Scraper({
  puppeteer: {
    headless: true,
  }
});

(async () => {
  const results = await google.scrape('banana', 200);
  console.log('results', results);
})();


module.exports = {
  name: 'image',
  aliases: ['afbeelding', 'zoekimage', 'zoekafbeelding'],
  permissions: [],
  description: 'This sends a image to a discord channel',
  async execute(message, args, client) {
    const image_query = args.join(" ");
    if (!image_query) return message.channel.send('Place a subject off what image you want!');

    const image_results = await google.scrape(image_query, 1);
    message.channel.send(image_results[0].url);
  }
}