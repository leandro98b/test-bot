const TelegramBot = require('node-telegram-bot-api');
const token = '2050139568:AAHrj-e20YYBZgHh-7SqYuy8PsMozPemW7s';
const bot = new TelegramBot(token, {polling:true});

bot.on('polling_error', function(error){
    console.log(error);
});

bot.onText(/^\/start/, function(msg){
    var chatId = msg.chat.id;
    var nameUser = msg.from.first_name;
    
    bot.sendMessage(chatId, "Bienvenido a mi bot " + nameUser);
    bot.sendMessage(chatId, "su id: " + chatId);
});

bot.onText(/^\/id/, function(msg){
    var chatId = msg.chat.id;
    var myid = msg.from.id

    bot.sendMessage(chatId, "su id: " + myid);
});

bot.onText(/\/foto/, (msg) => {
    bot.sendPhoto(msg.chat.id,"./mapa.jpg" ); 
});

bot.onText(/^\/ping/, function(msg){
    var chatId = msg.chat.id;
    var tipoChat = msg.chat.type;
    
    if (tipoChat == 'private'){
        bot.sendMessage(chatId, "Pong!")
    } 
    
    else if (tipoChat == 'supergroup') {
        bot.sendMessage(chatId, "Este comando solo funciona en privado")
    }
});

bot.onText(/^\/commands/, (msg) => {
    bot.getMyCommands().then(function (info) {
        console.log(info)
    });
});