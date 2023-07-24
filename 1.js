function talk() {
    var know = {
        "hello" : "hello,nice to meet you",
        "hi" : "hello,nice to meet you",
        "who are you" : "i am bot ",
        "what is your age" : " i am infinite",
        "how old are you" : " i don't know...but younger than you",
        "How are you" : "Good :) ",
        "What can i do for you" : "Please Appreciate for this project. ",
        "Are you a bot ?" : "Oh..., Yes.",
        "Your Field of Interest" : "Web Development .",
        "OK" : "Thank You So Much ...",
        "Bye" : "Okay! Stay Healthy and Happy , will meet soon." 
    };
    
    var user = document.getElementById("userBox").value.toLowerCase();
    document.getElementById("chatLog").innerHTML = user+"<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user]+"<br>";
    } else {
        document.getElementById("chatLog").innerHTML = " Sorry , I didn't understand <br>";
    }
}
