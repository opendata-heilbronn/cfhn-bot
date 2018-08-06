import { Telegraf, ContextMessageUpdate } from "telegraf";
import Extra from "telegraf/extra"

export default class JoinMeModule {


    constructor(
        private app: Telegraf<ContextMessageUpdate>
    ) {
        app.command('start', this.start);
        app.command('/join', this.join);
        app.action(/eta:[0-9]+:[0-9]+/, this.eta);
    }



    private start(ctx: any) {
        console.log('start', ctx.from);
        console.log('chat', ctx.chat);
    }

    private join(ctx: any) {
        console.log('start', ctx.from);
        console.log('chat', ctx.chat);

        const keyboard = Extra.Markup.inlineKeyboard([
            Extra.Markup.callbackButton("18:00", 'eta:18:00'),
            Extra.Markup.callbackButton("18:30", 'eta:18:30'),
        ]);

        return ctx.telegram.sendMessage(ctx.chat.id, "Wann willst du im CoWo aufschlagen?", keyboard.extra())
            .then((response) => {
                console.log("response", response);
                return ctx.telegram.sendMessage(ctx.chat.id, 'Deine Anwesenheit wurde eingebucht.');
            });
    }

    private eta(ctx: any) {
        console.log('start', ctx.from);
        console.log('chat', ctx.chat);

    }
}

/*

const questions = {
    food_vote: {
        question: 'Hallo, ich bin J.A.R.V.I.B. - wie kann ich dir helfen?',
        answers: [
            [{ text: 'Ich möchte heute ins CoWo kommen.', callback: 'joinme' }],
            [{ text: 'Ich möchte ins WLAN.', callback: 'wlan' }],
        ]
    },
};

const db = {
    chats: [

    ]
};

module.exports = function (botToken) {
    console.log('bot running');

    const app = new Telegraf(botToken, { username: 'cfhn_bot' });

    app.command('/go', (ctx) => {
        



        return reply('')
    });
}

*/