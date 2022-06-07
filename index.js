const qrcode = require('qrcode-terminal');
const api = require("./test")
const fs = require('fs');
const { Client, LocalAuth } = require('whatsapp-web.js');


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
		client.sendMessage(message.from, hellomessage);
	}
});

client.initialize();