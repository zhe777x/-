const home_bum = document.getElementById("home_bum")
const captain_bum = document.getElementById("captain_bum")
const fleet_bum = document.getElementById("fleet_bum")
const about_bum = document.getElementById("about_bum")
const join_bum = document.getElementById("join_bum")
const facebook_bum = document.getElementById("facebook_button")
const instagram_bum = document.getElementById("instagram_button")
console.log("hello world")
console.log([
    "                   _ooOoo_",
    "                  o8888888o",
    "                  88\" . \"88",
    "                  (| -_- |)",
    "                  O\\  =  /O",
    "               ____/`---'\\____",
    "             .'  \\\\|     |//  `.",
    "            /  \\\\|||  :  |||//  \\",
    "           /  _||||| -:- |||||-  \\",
    "           |   | \\\\\\  -  /// |   |",
    "           | \\_|  ''\\---/''  |   |",
    "           \\  .-\\__  `-`  ___/-. /",
    "         ___`. .'  /--.--\\  `. . __",
    "      .\"\" '<  `.___\\_<|>_/___.'  >'\"\".",
    "     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
    "     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
    "======`-.____`-.___\\_____/___.-`____.-'======",
    "                   `=---='",
    "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
    "         佛祖保佑       永無BUG"
].join('\n'));


facebook_bum.addEventListener("click",() => {
    location.href = "https://www.facebook.com/groups/757600724886753"
})

instagram_bum.addEventListener("click",() => {
    location.href = "https://www.instagram.com/virtualstarluxchairman/"
})

home_bum.addEventListener("click",() => {
    location.href = "/starlux/web_page/home.html"
})

captain_bum.addEventListener("click",() => {
    location.href = "driver_list.html"
})

fleet_bum.addEventListener("click",() => {
    location.href = "fleet/fleet_a330neo.html"
})

about_bum.addEventListener("click",() => {
    location.href = "about.html"
})

join_bum.addEventListener("click",() => {
    location.href = "join.html"
})


