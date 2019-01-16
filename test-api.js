/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
require("dotenv").config();
const got = require("got");

const appid = process.env.APP_ID;
const appkey = process.env.APP_KEY;
const url = "https://api.tfl.gov.uk/Line/london-overground/Arrivals/910GWDST";

async function getTFL(){
	try {
		const response = await got(url);
		console.log(response);
	}catch (error) {
		console.log(error.response.body);
	}
}
getTFL();