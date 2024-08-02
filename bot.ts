import { Bot } from "https://deno.land/x/grammy@v1.10.1/mod.ts";

const bot = new Bot("<YOUR_BOT_TOKEN>");

bot.command("start", (ctx) => ctx.reply("Welcome to my Deno bot!"));

bot.on("message", (ctx) => ctx.reply("You said: " + ctx.message.text));

bot.start();

export { bot };
