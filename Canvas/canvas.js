const canvas = document.getElementById('cartoonCanvas');
const ctx = canvas.getContext('2d');
// title 
ctx.font = '100px Arial';
ctx.fillStyle = 'black'; // Set the text color

// Set the position for the title and add the text
ctx.fillText('Cartoon Picture', 100, 30); 
// Background color 
ctx.fillStyle = 'skyblue';
ctx.fillRect(0,0,canvas.width, canvas.height)
// Creating the sun 
ctx.beginPath();
ctx.arc(70,68,60,0,2*Math.PI);
ctx.fillStyle= "yellow";
ctx.fill();
// Creating the ground 
ctx.fillStyle = "green";
ctx.fillRect(0,230,600,200)
// creating the house 
ctx.fillStyle="red";
//the door 
ctx.fillRect(480,71,100,160)
ctx.fillStyle="black";
// The window 
ctx.fillRect(506,168,40,60)
ctx.fillStyle ="white"
ctx.fillRect(485, 105, 28, 20);
// roof of house 
ctx.beginPath();
ctx.moveTo(475, 70); 
ctx.lineTo(525, 40); 
ctx.lineTo(575, 70); 
ctx.closePath(); 
ctx.fillStyle = 'black'; 
ctx.fill();
ctx.strokeStyle= "black";
ctx.stroke();
ctx.fill(); 
// dor knob
ctx.fillStyle ="gold"
ctx.fillRect(530, 195, 8, 10);
 
// to create the mini rocks 
for (let i = 0; i < 212; i += 25) { 
    ctx.beginPath();
    ctx.arc(i + 8, 270, 5, 0, Math.PI * 2); 
    ctx.fillStyle = 'gray'; 
    ctx.fill();
    // line with is the line sronding the shape like the circle fonts 
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke(); 
}

ctx.beginPath();

// the head
ctx.arc(305, 135, 25, 0, Math.PI * 2, true);  
// always close the path so we dont have the same issue with connecting lines 
ctx.closePath();  
ctx.stroke();  

//  The Mouth
ctx.beginPath(); 
ctx.arc(305, 138, 10, 0, Math.PI, false);  
ctx.stroke();  

//  left eye
ctx.beginPath();  
ctx.arc(300, 125, 3, 0, Math.PI * 2, true);  
ctx.stroke();  

//   right eye
ctx.beginPath();  
ctx.arc(315, 125, 3, 0, Math.PI * 2, true); 
ctx.stroke();  
  // body line 
  ctx.beginPath();
  ctx.moveTo(305,160);
  ctx.lineTo(305,230);
  ctx.stroke();
  //right leg
  ctx.beginPath();
  ctx.moveTo(305,220);
  ctx.lineTo(330,250);
  ctx.stroke();
    //left leg
    ctx.beginPath();
    ctx.moveTo(305,220);
    ctx.lineTo(280,250);
    ctx.stroke();
      //right arm
  ctx.beginPath();
  ctx.moveTo(305,170);
  ctx.lineTo(320,190);
  ctx.stroke();
    //left arm
    ctx.beginPath();
    ctx.moveTo(305,170);
    ctx.lineTo(286,190);
    ctx.stroke();
// title 
ctx.font = '32px Brush Script MT ';
ctx.fillStyle = 'black'; // Set the text color
ctx.fillText('Cartoon Picture', 220, 50); 