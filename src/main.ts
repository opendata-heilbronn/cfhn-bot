import express from 'express';
import Telegraf from 'telegraf';
import config from './config';

import JoinMeModule from './joinme/joinme.module';

const app = new Telegraf(config.botToken, { username: 'cfhn_bot' });
app.startPolling();

const joinme = new JoinMeModule(app);
