import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from './const Joi = require('joi');
const loginSchema = Joi.object().keys({
  username: Joi.string()
    .min(3),
    .max(10),
    .required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
});

app.post('/login', function(req, res) {
  const valid = Joi.validate(req.body, loginSchema).error === null;
  if (!valid) {
    res.status(422).json({
      status: 'error',
      message: 'Invalid request data',
      data: req.body
    });
  } else {
    // happy days - login user
    res.send(`ok`);
  }
});vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import nightwatchPlugin from 'vite-plugin-nightwatch'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    nightwatchPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
