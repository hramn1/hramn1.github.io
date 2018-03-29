let a = Math.floor(Math.random() * (10 - 6)) + 6;
let c = Math.floor(Math.random() * (15 - 11)) + 11;
let b = c - a;
let numA = document.querySelector('.num-a');
let numB = document.querySelector('.num-b');
let canvas = document.querySelector('.num-scale');
let ctx = canvas.getContext('2d');
let innerA = document.querySelector('.inner-num-a input');
let innerDivA = document.querySelector('.inner-num-a');
let innerB = document.querySelector('.inner-num-b input');
let innerDivB = document.querySelector('.inner-num-b');
let numC = document.querySelector('.sum-a-b');
numA.innerHTML = a;
numB.innerHTML = b;
ctx.strokeStyle="green";
ctx.lineWidth = 3;

scene1();

function scene1(){
  ctx.moveTo(39*a, 150);
  ctx.quadraticCurveTo(20 * a, 0, 0, 150);
  ctx.moveTo(39*a, 150); 
  ctx.lineTo(37 * a, 145);
  ctx.moveTo(39*a, 150); 
  ctx.lineTo(38.6 * a, 135);
  ctx.stroke();
  innerA.addEventListener('change',function () {
    if(innerA.value == a){
      innerA.style.display = "none";
      numA.style.backgroundColor = "transparent";
      innerDivA.innerHTML = a;
      return scene2()
  }
    else{
      innerA.style.color = "red";
      numA.style.backgroundColor = "orange";
    }
  });
};

function scene2(){
  innerDivB.style.display = "block"
  ctx.moveTo(39*c, 150);
  ctx.quadraticCurveTo((a*20)+ (20* c), 60, 39*a, 150);
  ctx.moveTo(39*c, 150); 
  ctx.lineTo(37.7 * c, 146);
  ctx.moveTo(39*c, 150); 
  ctx.lineTo(38.6 * c, 135);
  ctx.stroke();
  innerB.addEventListener('change',function(){
    if(innerB.value == b){
      innerB.style.display = "none";
      numB.style.backgroundColor = "transparent";
      innerDivB.innerHTML = b;
        return scene3()
    }
    else{
      innerB.style.color = "red";
      numB.style.backgroundColor = "orange"
    }
  });
};

function scene3(){
  numC.innerHTML = '<input type="text"/>';
  let inputC = numC.querySelector('input');
  inputC.addEventListener('change',function(){
    if(inputC.value == c){
      inputC.style.display = "none";
      numC.innerHTML = c;
    }
    else{
    inputC.style.color = "red";
    }
  });
};
