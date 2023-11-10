import { Ball } from  "./ball.js";
import { Player } from "./player.js";

const canvas = document.getElementById('canvasJS');
canvas.height  = 600;

const ctx = canvas.getContext('2d');
const player = new Player (250,550, 100, 15,'red');
const ball = new Ball (250, 100, 3, 3, 15, 'black');  

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for( let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

animate();
function animate() {
    player.update();

    canvas.width = 500;
    ball.draw(ctx);
    player.draw(ctx);

    if(ball.x + ball.vx > player.x - player.width / 2 &&    
        ball.x + ball.vx < player.x + player.width / 2 &&    
        ball.y + ball.vy > player.y - player.height / 2 &&    
        ball.y + ball.vy < player.y + player.height / 2) {
            ball.vy = - ball.vy;
            ball.color = getRandomColor();
            player.color = getRandomColor();
        }
    if (ball.y + ball.vy > canvas.height -10) {
        alert('Game Over');
        ball.x = 250;
        ball.y = 100;
        ball.vx = 3;
        ball.vy = 3;
        ball.color = 'red';
        player.color = 'lightgray';
        player.x = 200;
    }
    requestAnimationFrame(animate);
}
