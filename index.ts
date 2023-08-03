const TelegramBot = require('node-telegram-bot-api');

//импорт токена из файла, который нельзя выгружать
import token from "./token_info";
//импорт фуекции чтения из файла
import ReadTxtFromFile from "./functions";
//импорт названия файла из файла с основными константами
import txtfilename1 from "./important_values";
import txtfilename2 from "./important_values";
//импорт команд для бота из ...
import commands from "./important_values";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: {interval:300, autoStart: true}});

bot.setMyCommands(commands);

let text1 = ReadTxtFromFile(txtfilename1);
let text2 = ReadTxtFromFile(txtfilename2);

bot.on('message',(msg: any)=> 
{		
	if (msg.text == "/menu")
	{
		bot.sendMessage(msg.chat.id, "Меню бота", 
		{
			reply_markup: 
			{
				keyboard:
				[
					["Вариант 1", "Вариант 2"]
				]
			}
		})
	}
	else if (msg.text == "Вариант 1")
	{
		bot.on("polling_error",(err: any)=> console.log(err));
		bot.sendMessage(msg.chat.id,text1)
	}
	else if (msg.text == "Вариант 2")
	{
		bot.on("polling_error",(err:any)=> console.log(err));
		bot.sendMessage(msg.chat.id,text2)
	}
	else if (msg.text.toString().indexOf(msg) === 0)
	{//элемент повторения
		bot.sendMessage(msg.chat.id,msg.text.toString())
	}
	
});




