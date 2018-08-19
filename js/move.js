window.onload = function(){
    var t = document.getElementById("target");
    var ini;
    var raf;
    var c;
    var d;
    var x;
    var _x;
    t.addEventListener("touchstart", handleStart, true);
    t.addEventListener("touchmove", handleMove, true);
    t.addEventListener("touchend", handleEnd, true);

    function start(){
        console.log("yes")
    }

    function getPoint(e){
        var point = {};
        if(e.targetTouches){
            point.x = e.targetTouches[0].clientX;
            point.y = e.targetTouches[0].clientY;
        }
        else{
            console.log("No Touchy");
        }
        return point.x;
    }

    function animate(){
        if(!raf){
            return;
        }
        d = Math.round(c - ini);
        t.style.transform = "translateX("+d+"px)";
        raf = false;
    }

    function handleStart(e){
        e.preventDefault();
        if(e.touches && e.touches.length < 1){
            console.log("nope");
            return;
        }
        ini = getPoint(e);
        console.log(ini);
    }

    function handleEnd(e){
        console.log("Ended");
        e.preventDefault();
        if(e.touches && e.touches.length > 0){
            return;
        }
        t.removeEventListener("touchstart", this.handleStart, true);
        t.removeEventListener("touchmove", this.handleMove, true);
        t.removeEventListener("touchend", this.handleEnd, true);
        raf = false;
        ini = null;
    }

    function handleMove(e){
        e.preventDefault();
        if(!ini){
            return;
        }
        c = getPoint(e);
        console.log(c);
        if(raf){
            return;
        }
        raf = true;
        window.requestAnimationFrame(animate);
    }

}
