var start = new Date().getTime();

function getRandomColor() {
    var letters, color, i;
    letters = '0123456789ABCDEF';
    color = '#';
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Reappear() {
    var t, l, h, w;
    t = Math.random() * 250;
    l =  Math.random() * 75;
    do {
        h =  Math.random() * 250;
    } while (h < 50);
    
    t = t + "px";
    l = l + "%"; 
    h = h + "px"; 
    w = h;  
    
    document.getElementById("fig").style.display = "block";
    document.getElementById("fig").style.top = t;
    document.getElementById("fig").style.left = l;
    document.getElementById("fig").style.height = h;
    document.getElementById("fig").style.width = w;
    document.getElementById("fig").style.backgroundColor = getRandomColor();
    
    if (Math.random() > 0.5) {
        document.getElementById("fig").style.borderRadius = 50 + "%";
    } else {
        document.getElementById("fig").style.borderRadius = "0px";
    }
    start = new Date().getTime();
}

document.getElementById("fig").onclick = function () {
    var end, time_taken;
    end = new Date().getTime();
    time_taken = (end - start) / 1000;

    document.getElementById("time").innerHTML = time_taken + "s";
    document.getElementById("fig").style.display = "none";
    
    setTimeout(Reappear, Math.random() * 2000);
};
		