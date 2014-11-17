
// var W = 900;
// var H = 600;

// var velocity = 0;

// var image = new Image();
// image.src = 'http://fc02.deviantart.net/fs71/i/2012/148/b/move1/space___star_cluster_by_mr_rand0m-d51dirc.jpg'; //background

// function renderGame() {
//     window.requestAnimationFrame(renderGame);

//     ctx.clearRect(0, 0, W, H);

//     ctx.fillStyle = '#000';
//     ctx.fillRect(0, 0, 900, 600);
//     ctx.drawImage(image, velocity, 0);
//     ctx.drawImage(image, image.width-Math.abs(velocity), 0);

//     if (Math.abs(velocity) > image.width) {
//         velocity = 0;
//     }

//     velocity -= 0.3; //Background velocity
// }