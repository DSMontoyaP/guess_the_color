var squares = document.querySelectorAll(".square");

var colors=[];
var pickedColor;
var message = document.getElementById("message");

var resetBtn =  document.getElementById("reset");
var modeBtns = document.querySelectorAll(".mode");
var num=6;
resetBtn.addEventListener("click", reset);


function changeColors(color){
    let h1 = document.getElementById("head");
    for(let i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;

}

function random(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")"
}

function generateRandomColors(num){
    var arr=[];
    for(let i = 0; i < num; i++){
        arr.push(random());
    }

    return arr;
}

function pickedColorRandom(){
    let b = Math.floor(Math.random()*colors.length);
    return colors[b];   
}

function reset(){
    message.hidden = true;
    document.getElementById("head").style.backgroundColor = "steelblue";
    colors = generateRandomColors(num);
    pickedColor = pickedColorRandom();
    document.getElementById("colorToFind").textContent = pickedColor;

    for( let i=0; i< squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]
            squares[i].style.display = "block"
        }else{
            squares[i].style.display = "none"
        }
    }
}

function setupSquares(){
    for( let i=0; i< squares.length; i++) {
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor){
                changeColors(clickedColor);
                message.textContent = "Correcto";
                message.hidden = false;
            }else{
                this.style.backgroundColor = "black";
                message.textContent = "Intenta de nuevo";
                message.hidden = false;
            }
            
        })
    }
}

function setupButtons(){
    for(let i = 0; i < modeBtns.length; i++)
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            
            this.textContent == "Novato" ? num = 3 : num = 6;
            reset()
        });

}

reset();
setupSquares();
setupButtons();