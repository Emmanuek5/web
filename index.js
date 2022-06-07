const qrcode = require('qrcode-terminal');
const apsi = require("./test")
const fs = require('fs');
const { Client, LocalAuth } = require('whatsapp-web.js');
const text1 =  "Welcome To Fsg Work Solutions \n Select Your Services Below: \n 1)🐮Agro Section\n 2)👲Hr Department \n 3)🛍Online Shop \n Select The Appropriate Number In Chat."
const text2 = "You've Selected The Fsg Agro Section. Pick From The Options Below \n Agro 1) 🥩Order Meat  \n Agro 2)Buy Land \n "
const client = new Client({
  
    authStrategy: new LocalAuth({
      clientId: "client-one"
    }),
   
  });




client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
client.on('authenticated', (session) => {
   
    console.log("Authenticated")
});
client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('message', message => {
	console.log(message.body)
    if(message.body === 'Hello') {
		client.sendMessage(message.from, text1);
	}
  if(message.body === "1"){
    message.reply("")
  }

});

client.initialize();