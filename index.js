const express = require('express');
const {Configuration, OpenAIApi} = require('openai');

const configuration = new Configuration({
    apiKey : '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'
});

const openai = new OpenAIApi(configuration);
const app = express();

app.get('/', (req, res)=> {
    async function question(){
        res.setHeader('Access-Control-Allow-Origin', '*');
        const jawaban = await openai.createCompletion({
            model : "text-davinci-003",
            prompt : req.query.text,
            max_tokens: 1000
        });
        res.send(jawaban.data.choices[0].text);
    }
    question();
});

app.listen(3000,()=> {
    console.log("server berjalan di port 3000");
})