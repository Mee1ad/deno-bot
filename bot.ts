import { Bot } from "https://deno.land/x/grammy@v1.28.0/mod.ts";

const bot = new Bot("7277453739:AAGbYxEEWniDVcvVSmBYd21G-McQv5q95Fs");

bot.command("start", (ctx) => ctx.reply("Welcome to my Deno bot yaaaaaaaaay!"));

bot.on("message", (ctx) => ctx.reply("You said: " + ctx.message.text));

bot.start();

export { bot };
