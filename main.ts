import { serve } from "https://deno.land/std@0.159.0/http/server.ts";
import { webhookCallback } from "https://deno.land/x/grammy@v1.10.1/mod.ts";
import { bot } from "./bot.ts";

const handleUpdate = webhookCallback(bot, "std/http");

serve(async (req) => {
    if (req.method === "POST") {
        return await handleUpdate(req);
    }

    return new Response("Hello from Deno Deploy!");
});
