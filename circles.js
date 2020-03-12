let randomCircles = {
    element: '', //Obavezno mora da se selectuje
    time: 1000, //Sporedno
    maxNum: 20, //Sporedno
    innerCircleColor: '#fff',
    start: callCircles
};

function callCircles(){
    let elementWidth = document.querySelector(randomCircles.element).offsetWidth;
    let elementHeight = document.querySelector(randomCircles.element).offsetHeight;

    setInterval(function(){
        let randomNumberCircles = Math.floor(Math.random() * randomCircles.maxNum) + 1;
        let output = '';
        for(let i = 0; i < randomNumberCircles; i++){
            output += '<div class="circles"><div class="innerCircle"></div></div>';
        }
        document.querySelector(randomCircles.element).innerHTML = output;
    
        let circles = document.querySelectorAll('.circles');
        let innerCircles = document.querySelectorAll('.innerCircle');
        
        circles.forEach(function(circle){
            let randomWidth = Math.floor(Math.random() * elementWidth) + 1;
            let randomHeight = Math.floor(Math.random() * elementHeight) + 1;
    
            circle.style.top = randomHeight + 'px';
            circle.style.left = randomWidth + 'px';
            circle.style.borderColor = generateRandomColors();
        });

        innerCircles.forEach(function(circle){
            circle.style.borderColor = randomCircles.innerCircleColor;
        });
    }, randomCircles.time);

    function generateRandomColors(){
        let r = Math.floor(Math.random() * 255) + 1;
        let g = Math.floor(Math.random() * 255) + 1;
        let b = Math.floor(Math.random() * 255) + 1;
        let opp = Math.random() + 1;
        return `rgba( ${r}, ${g}, ${b}, ${opp})`;
    }
}







