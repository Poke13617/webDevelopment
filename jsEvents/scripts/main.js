function init() {
    const canvas = document.getElementById("canvas");
    canvas.addEventListener("mouseover", handleMouseMove, false);
    const context = canvas.getContext('2d');// get drawing area

    let started = false;
    function handleMouseMove(e) {
        let x,y;
        if (e.clientX //if X position is specified...
            || e.client == 0 //...And it's not 0...
        ){
            x = e.clientX;
            y = e.clientY;
        }
        if (!started) {           //If path not yet started
            context.beginPath();  //... star path and...
            context.moveTo(x, y);  //Move to a position for us
            started = true;
        } else {                  //If path has started
            context.lineTo(x, y); //Move to Position
            context.stroke();     //And draw connection
        }
    }
}
document.addEventListener('DOMContentLoaded', init)