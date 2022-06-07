const qrcode = require('qrcode-terminal');

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
    if(message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
	}
});

client.initialize();