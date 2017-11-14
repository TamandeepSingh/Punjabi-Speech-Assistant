var sira = new Artyom();

var langs = ["hi-IN", "en-GB"];

function startReco() {
    var picGif = document.getElementById("gif");
    picGif.innerHTML = "<img src=\"../gifs/speaking.gif\" width=\"375px\" margin-left=\"5px\" height=\"75px\">";
    sira.initialize({
        lang: langs[0],
        //lang: langs[1],
        //lang:langs,  // hi-IN  //en-GB
        debug: true, // Show what recognizes in the Console
        listen: true, // Start listening after this
        speed: 0.9, // Talk a little bit slow
        mode: "normal" // This parameter is not required as it will be normal by default
    });
}


//// Player stuff ...................................
function player(){
  audiojs.events.ready(function() {
      var as = audiojs.createAll();
    });
}


// commands....................
sira.addCommands([
    ////// Fb vala........................................
    {
        indexes: ["खोलो Facebook"],
        action: function(i) {
            console.log("खोलो Facebook");
            var d = new Date();
            var eg = "<br/><strong>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</strong>:-Facebook ਖੋਲ ਰਿਆ ਜੀ ||";
            var res = document.getElementById("result");
            res.innerHTML += eg;
            window.open("https://www.facebook.com/");
        }
    },
    {
        indexes: ["Facebook खोलो"],
        action: function(i) {
            console.log("Facebook खोल");
            var d = new Date();
            var eg = "<br/><strong>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</strong>:-Facebook ਖੋਲ ਰਿਆ ਜੀ ";
            var res = document.getElementById("result");
            res.innerHTML += eg;
            window.open("https://www.facebook.com/");
        }
    },
    {
        indexes: ["खोल Facebook"],
        action: function(i) {
            console.log("Facebook खोल");
            var d = new Date();
            var eg = "<br/><strong>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</strong>:-Facebook ਖੋਲ ਰਿਆ ਜੀ";
            var res = document.getElementById("result");
            res.innerHTML += eg;
            window.open("https://www.facebook.com/", '_blank');
        }
    },
    {
        indexes: ["Facebook खोल"],
        action: function(i) {
            console.log("Facebook खोल");
            var d = new Date();
            var eg = "<br/><strong>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</strong>:-Facebook ਖੋਲ ਰਿਆ ਜੀ";
            var res = document.getElementById("result");
            res.innerHTML += eg;
            window.open("https://www.facebook.com/", '_blank');
        }
    },
    //  For camera photo.........................
    {
        indexes: ["कैमरा खोलो"],
        action: function(i) {
            console.log("कैमरा खोलो");
            var d = new Date();
            var eg = "<br/><strong>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</strong>:-ਕੈਮਰਾ ਖੋਲ ਰਿਆ ਜੀ";
            var res = document.getElementById("result");
            res.innerHTML += eg;
            opencam();
            exec();
        }
    },
    {
        indexes: ["फोटो खींचो"],
        action: function(i) {
            console.log("क्लिक करो");
            var d = new Date();
            var eg = "<br/><strong>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</strong>:- ਫੋਟੋ ਲੈ ਲਈ ਜੀ";
            var res = document.getElementById("result");
            res.innerHTML += eg;
            take_snapshot();
            var res = document.getElementById("results");
            res.style.display = "";
            var del = document.getElementById("my_camera")
            del.style.display = "none";
            var del = document.getElementById("location")
            del.style.display = "none";
        }


    }, {
        indexes: ["कैमरा बंद करो"],
        action: function(i) {
            console.log("कैमरा बंद करो");
            var d = new Date();
            var eg = "<br/><strong>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</strong>:- ਕੈਮਰਾ ਬੰਦ ਕਰ ਦਿੱਤਾ ਜੀ";
            var res = document.getElementById("result");
            res.innerHTML += eg;
            var del = document.getElementById("video-container");
            del.style.display = "none";
            var del = document.getElementById("camera-stream");
            del.style.display = "none";
            var del = document.getElementById("my_camera")
            del.style.display = "none";
        }
    },

    // For Whatsapp ................
    {
        indexes: ["खोलो WhatsApp"],
        action: function(i) {
            console.log("खोलो WhatsApp");
            var d = new Date();
            var eg = "<br/><strong>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</strong>:-WhatsApp ਖੋਲ ਰਿਆ ਜੀ";
            var res = document.getElementById("result");
            res.innerHTML += eg;
            window.open("https://web.whatsapp.com/");
        }
    },
    {
        indexes: ["WhatsApp खोलो"],
        action: function(i) {
            console.log("WhatsApp खोल");
            var d = new Date();
            var eg = "<br/><strong>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</strong>:-WhatsApp ਖੋਲ ਰਿਆ ਜੀ";
            var res = document.getElementById("result");
            res.innerHTML += eg;
            window.open("https://web.whatsapp.com/");
        }
    },
    {
        indexes: ["खोल WhatsApp"],
        action: function(i) {
            console.log("खोल WhatsApp");
            var d = new Date();
            var eg = "<br/><strong>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</strong>:-WhatsApp ਖੋਲ ਰਿਆ ਜੀ";
            var res = document.getElementById("result");
            res.innerHTML += eg;
            window.open("https://web.whatsapp.com/", '_blank');
        }
    },
    {
        indexes: ["WhatsApp खोल"],
        action: function(i) {
            console.log("WhatsApp खोल");
            var d = new Date();
            var eg = "<br/><strong>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</strong>:-WhatsApp ਖੋਲ ਰਿਆ ਜੀੋ";
            var res = document.getElementById("result");
            res.innerHTML += eg;
            window.open("https://web.whatsapp.com/", '_blank');
        }
    },
    {
        indexes: ["प्लेयर चलाओ"],
        action: function(i) {
            console.log("प्लेयर चलाओ");
            var d = new Date();
            var eg = "<br/><strong>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</strong>:-ਖੋਲ ਰਿਆ ਜੀੋ";
            var res = document.getElementById("result");
            res.innerHTML += eg;
            player();
        }
    },
    {
        indexes: ["प्लेयर चला"],
        action: function(i) {
            console.log("प्लेयर चला");
            var d = new Date();
            var eg = "<br/><strong>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</strong>:-ਖੋਲ ਰਿਆ ਜੀੋ";
            var res = document.getElementById("result");
            res.innerHTML += eg;
            player();
        }
    },
    {
        indexes: ["प्लेयर चला"],
        action: function(i) {
            console.log("प्लेयर चला");
            var d = new Date();
            var eg = "<br/><strong>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</strong>:-ਖੋਲ ਰਿਆ ਜੀੋ";
            var res = document.getElementById("result");
            res.innerHTML += eg;
            player();
        }
    }
]);

function stopReco() {
    var picGif = document.getElementById("gif");
    picGif.innerHTML = "";
    /*var res = document.getElementById("result");
    res.innerHTML = "";*/
    sira.fatality();
}



/*
Webcam.set({
  width: 320,
  height: 240,
  image_format: 'jpeg',
  jpeg_quality: 90
});
Webcam.attach( '#my_camera' );

function take_snapshot() {
  // take snapshot and get image data
  Webcam.snap( function(data_uri) {
    // display results in page
    document.getElementById('results').innerHTML =
      '<h2>Here is your image:</h2>' +
      '<img src="'+data_uri+'"/>';
  } );
}
*/
