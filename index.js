const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '6357343887:AAFe5KnCeo8Gwr_rslUd704-JA_zWsRkcE8';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: {interval:300, autoStart: true}});

let text1 = "";
let text2 = "";



const commands = [{
	command: "/start",
	description: "Запуск бота"
	},
	{
	command: "/menu",
	description: "меню"
	},]
bot.setMyCommands(commands);


let fs = require('fs');
fs.readFile('text1.txt', 'utf8',
	function(error,fileContent){
		if(error) throw error;
		text1 = fileContent.toString();
		console.log(text1);
	}
);
fs.readFile('text2.txt', 'utf8',
	function(error,fileContent){
		if(error) throw error;
		text2 = fileContent.toString();
		console.log(text1);
	}
);













bot.on('message',(msg)=> {
	var UserMessage = msg.text.toString();
	//console.log(msg);
	
	if (msg.text.toString() == "/menu"){
		bot.sendMessage(msg.chat.id, "Меню бота", {
		reply_markup: {
			keyboard:[
				["Вариант 1", "Вариант 2"]
		
			]
		}
		})
	}
	
	
	
	else if (msg.text.toString()== "Вариант 1"){
		
		bot.on("polling_error",(err)=> console.log(err));
		bot.sendMessage(msg.chat.id,text1)}
	else if (msg.text.toString()== "Вариант 2"){
		
		bot.on("polling_error",(err)=> console.log(err));
		bot.sendMessage(msg.chat.id,text2)}
	
	
	
	
	//Повторюша --->
	else if (msg.text.toString().indexOf(UserMessage) === 0){
		bot.sendMessage(msg.chat.id,msg.text.toString())
	}
	
	
	


	
});





