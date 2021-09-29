/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    password: process.env.password,
    MY_URI: process.env.MY_URI,
    GET_WORDS: process.env.GET_WORDS,
  },
};
