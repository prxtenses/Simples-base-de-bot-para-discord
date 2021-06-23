// Declara algumas bibliotecas que o BOT vai precisar para funcionar
const Discord = require("discord.js");
const client = new Discord.Client();

// Declara a localização dos javascripts
const config = require("./config.json");

// Vai mostrar no OUTPUT/SAIDA se o bot esta funcionando ou não
client.on("ready", () => {
    console.log("Estou ligado!");
});

client.on("message", (message) => {
    // Desliga e para se o prefixo não estiver lá ou se o usuário for um bot
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
   
    // Sua primeira função, quando você digitar o prefixo + ping: !ping
    // o bot ira mandar uma mensagem escrita "pong!" no mesmo canal que você.
    if (message.content.startsWith(config.prefix + "ping")) {
        message.channel.send("pong!");
    }
});

//Token do bot, ele vai pegar o "token:" do config.json
client.login(config.token);

// Pequena base de bot para quem está aprendendo JavaScript e deseja fazer um bot para discord
// ele contem as funções essenciais para o perfeito funcionamento do bot! - Sonka