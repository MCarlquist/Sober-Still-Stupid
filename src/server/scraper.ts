import { WebScrapingAI } from 'webscraping-ai';
import { createServerFn } from "@tanstack/react-start";

export const scrapeNA = createServerFn().handler(async () => {
    const client = new WebScrapingAI({ apiKey: 'e260e1df-77b1-4cf4-998f-d0fcbe127ce5' });
    const text = await client.text({
      url: 'https://www.nasverige.org/moteslista/',
      timeout: 10000,
      js_timeout: 2000,
      text_format: 'json',
    });
    return JSON.stringify(text) ?? '';
});


