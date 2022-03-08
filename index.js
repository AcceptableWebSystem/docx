var mammoth = require("mammoth");

mammoth.extractRawText({path: "./document.docx"})
    .then(function(result){
        var text = result.value; // The raw text

    console.log(text.replace(/\r?\n/g,""));
        var messages = result.messages;
    })
    .done();
