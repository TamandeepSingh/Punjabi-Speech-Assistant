var sira = new Artyom();

var langs = ["hi-IN","en-GB"];
function startReco(){
    var picGif = document.getElementById("gif");
    picGif.innerHTML = "<img src=\"../gifs/speaking.gif\" width=\"400px\" height=\"75px\">";
    sira.initialize({
      lang: langs[0],
      //lang: langs[1],
      //lang:langs,  // hi-IN  //en-GB
      debug:true, // Show what recognizes in the Console
      listen:true, // Start listening after this
      speed:0.9, // Talk a little bit slow
      mode:"normal" // This parameter is not required as it will be normal by default
});
}

sira.addCommands([
    {
        indexes: ["खोलो Facebook"],
        action: function(i){
            console.log("खोलो Facebook");
            var eg = "ਖਲੋ Facebook";
            var res = document.getElementById("result");
            res.innerHTML = eg;
            window.open("https://www.facebook.com/");
        }
    },
    {
        indexes: ["Facebook खोलो"],
        action: function(i){
            console.log("Facebook खोल");
            var eg = "Facebook ਖਲੋ";
            var res = document.getElementById("result");
            res.innerHTML = eg;
            window.open("https://www.facebook.com/");
        }
    },
    {
        indexes: ["Facebook खोलो"],
        action: function(i){
            console.log("Facebook खोल");
            var eg = "Facebook ਖਲੋ";
            var res = document.getElementById("result");
            res.innerHTML = eg;
            window.open("https://www.facebook.com/",'_blank');
        }
    }
]);

function stopReco(){
    var picGif = document.getElementById("gif");
    picGif.innerHTML = "";
    var res = document.getElementById("result");
    res.innerHTML = "";
    sira.fatality();
}
