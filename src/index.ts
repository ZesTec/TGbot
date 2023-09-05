 
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config();

import { ReadTxtFromFile, WriteTxtfromFile  } from "./functions";
import { txtfilename1, txtfilename2, commands } from "./important_values";


const token = process.env.TOKEN || "YOUR_TOKEN";
const bot = new TelegramBot(token, { polling: { interval:300, autoStart: true }});

bot.setMyCommands(commands);



console.log("1");
bot.on('message',async (msg: TelegramBot.Message)=> 
{		

	bot.on("polling_error",(err: Error)=> console.log(err));
	console.log("2");
	if (msg.text == "/menu")
	{
		bot.on("polling_error",(err: Error)=> console.log(err));
		
		bot.sendMessage(msg.chat.id, "Меню бота", 
		{
			reply_markup: 
			{
				keyboard: [
					[
						{ text: 'qwe' }
					],
				]
			}
		})
	}
	else if (msg.text == "Вариант 1")
	{
		
		bot.on("polling_error",(err: Error)=> console.log(err));
		bot.sendMessage(msg.chat.id,ReadTxtFromFile(txtfilename1))
	}
	else if (msg.text == "Вариант 2")
	{
		bot.on("polling_error",(err: Error)=> console.log(err));
		bot.sendMessage(msg.chat.id,ReadTxtFromFile(txtfilename2))
	}
	else 
	{
		//элемент записи в файл
		bot.on("polling_error", (err: Error) => console.log(err));
		console.log("2");
		let usermessage = msg.text || "USER_message";
		console.log("2");
		WriteTxtfromFile(txtfilename1, usermessage)
		bot.sendMessage(msg.chat.id, " Сообщение сохранено на сервер");
	}
	
});


