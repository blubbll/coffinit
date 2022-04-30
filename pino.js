{
  const moment = require("moment"),
    jimp = require("jimp"),
    fetch = require("node-fetch");

  const { Client, Intents, MessageEmbed } = require("discord.js-selfbot");

  const client = (process.client_public = new Client({
    ws: { properties: { $browser: "Discord iOS" }},
  }));

  {
    //setup client
    client._token = process.env.TOKEN_GOLD_PUBLIC;
 
  }


  client.on("ready", async () => {
    const self = client.self;

 
    console.log(`Logged in as ${client.user.tag}`);
   

    console.log("Client ready!");
  });

 
  //less go
  client.login(client._token);
}
