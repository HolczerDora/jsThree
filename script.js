function generate(){
    var quotes = {
        "-Theodora Zeldin": '"A dream is what makes people love life even when it is painful"',
        "-Petrach":'" True, we love life, not because we are used to living, but because we are used to loving. There is always some madness in love, but there is also always some reason in madness."',
        "-Muhammed Ali": '"Don’t quit. Suffer now and live the rest of your life as a champion."',
        "-Chico Xavier":'"Though nobody can go back and make a new beginning… Anyone can start over and make a new ending.”',
        "-Rumi":'"Don’t grieve. Anything you lose comes around in another form."',
        "-Roy T. Bennett":'"Instead of worrying about what you cannot control, shift your energy to what you can create."'

    }


var authors = Object.keys(quotes);

var author = authors[Math.floor(Math.random() * authors.length)];

var quote = quotes[author];

document.getElementById("quote").innerHTML = quote;
document.getElementById("author").innerHTML = author;

}



