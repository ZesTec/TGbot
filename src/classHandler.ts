import TelegramBot, {ChatId} from "node-telegram-bot-api";

interface HandlerOptions
{
    bot:TelegramBot;
    message:TelegramBot.Message;
}

export default abstract class classHandler {
    
    private msg: TelegramBot.Message;
    private chatId: ChatId;
    private bot: TelegramBot;
    
    constructor(options: HandlerOptions) {
        this.msg = options.message;
        this.chatId = this.msg.chat.id;
        this.bot = options.bot;
    }

}