$(document).ready(function () {
    $("#font-list").css({
        "background-color": "#510d51",
        "font size": "20px",
        "color": "#fff"
    });
    let fontitem = "";
    let red, green, blue, randomc;
    for (var i = 0; i < 50; i++) {
        fontitem = ' <li id="font' + i + '"> i am front size :' + i + '</li>';
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
        randomc = "rgb(" + red + "," + green + "," + blue + ")";
        $("#font-list").append(fontitem);
        $("#font" + i).css({
            "background-color": randomc,
            "font-size": i + "px",
            "margin": "0.5rem 0"
        });

    }
});