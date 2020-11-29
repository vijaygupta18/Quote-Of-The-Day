


function randomQuote() {

    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",

        success: function (quoteData) {

            if (quoteData.quoteAuthor === '') {
                quoteData.quoteAuthor = 'Unknown';
            };



            var eText = encodeURIComponent(quoteData.quoteText);
            var eAuthor = encodeURIComponent(quoteData.quoteAuthor);

            $("#randomQuote").html("<p id='randomQuote'>    " + quoteData.quoteText +  "<br><br></p>");
            $("#author").html("<p id='author'> -  " + quoteData.quoteAuthor  + "<br></p>");
            $("#tweetMe").attr("href", "https://twitter.com/home/?status=" + quoteData.quoteText + ' - ' + quoteData.quoteAuthor);
            $("#share").attr("href", "https://wa.me/?text=" + eText + "-" + eAuthor);





        }
    });


}





$(function () {
    randomQuote();


});


$(document).ready(function () {
    $('.twitter').tooltip({ title: "Tweet Me", trigger: "hover", delay: { hide: 10 } });
    $('.whatsapp').tooltip({ title: "Share", trigger: "hover", delay: { hide: 10 } });
    $('.clipboard').tooltip({ title: "Copy", trigger: "hover", delay: { hide: 10 } });

});


setInterval(function() {
    // your code goes here...
    randomQuote();

},  60000);



function f1() {
    var range = document.createRange();
    range.selectNode(document.getElementById("randomQuote"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}