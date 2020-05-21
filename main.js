function firstLoad() {
    const id = "mainContent1"
    tab(id)
    startTime()
}

function show(id) {
    const elem = document.getElementById(id)
    if (elem) elem.style.display = "flex"
    else console.log("no elem found for id", id)
}

function hide(id) {
    const elem = document.getElementById(id)
    if (elem) elem.style.display = "none"
}

function tab(id) {
    hide("mainContent1")
    hide("mainContent2")
    hide("mainContent3")
    hide("mainContent4")
    show(id)
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDay();
    var mm = today.getMonth();
    var y = today.getFullYear();

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    document.getElementById('date').innerHTML = 
    d + "/" + mm + "/" + y
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }