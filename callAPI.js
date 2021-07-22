// Serverless AWS Nodejs Jquerycall >> Content GET API

$(document).ready(function() {
    $("button").click(function() {
        $.ajax({
            url: "https://jasqud5rfb.execute-api.ap-northeast-1.amazonaws.com/serverless-zkm-dev-generateRandomNumber",
            type: "GET",
            success: function(result) { console.log(result); $('#response').append(JSON.stringify(result)); },
            error: function(error) { console.log(error); }
        });
    });
});