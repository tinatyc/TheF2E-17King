var h = $(window).height() - 30;
var w = $(window).width() - 10;
var ratio = w / h;
console.log(h);
console.log(w);

// var app = new PIXI.Application(w, h, { transparent: true, antialias: true });
var app = new PIXI.Application({
    autoResize: true,
    resolution: devicePixelRatio,
    transparent: true,
    antialias: true
});
// document.body.appendChild(app.view);
// console.log(app);
document.body.appendChild(app.view);

var redStone = new PIXI.Graphics();
var circie = new PIXI.Graphics();
var circieLineBold = new PIXI.Graphics();
var circieLineThin = new PIXI.Graphics();
var triangle = new PIXI.Graphics();
var lineX = new PIXI.Graphics();
var mouseIcon = PIXI.Sprite.fromImage('img/x.png');
mouseIcon.anchor.set(0.5);
mouseIcon.x = app.screen.width / 2;
mouseIcon.y = app.screen.height / 2;
// set a fill and line style again
lineX.lineStyle(2, 0x6d7d86);
lineX.moveTo(w/2, 0);
lineX.lineTo(w/2, w);
lineX.lineStyle(1, 0x6d7d86);
lineX.moveTo(0, h/2);
lineX.lineTo(w, h/2);
// red stone
redStone.lineStyle(0, 0xffffff, 1);
redStone.beginFill(0xE7465D, 1);
redStone.drawPolygon([20, 50, 50, 20, 100, 20, 120, 40, 120, 80, 50, 80, 20, 50]);
redStone.endFill();

// yellow circie
circie.lineStyle(0, 0xffffff, 1);
circie.beginFill(0xF5AF5F, 1);
circie.drawCircle(200, 100, 50);
circie.endFill();

// circie line bold
circieLineBold.lineStyle(2, 0x6d7d86, 1);
// graphics.beginFill(0xF5AF5F, 1);
circieLineBold.drawCircle(w / 2, h / 2, 200);
circieLineBold.endFill();

// circie line thin
circieLineThin.lineStyle(1, 0x3f6c84, 1);
// circieLineThin.beginFill(0xF5AF5F, 1);
circieLineThin.drawCircle(w / 2, h / 2, 280);
circieLineThin.endFill();

const style = new PIXI.TextStyle({
    fontFamily: "Helvetica",
    fontSize: 20,
    dropShadow: true,
    dropShadowAngle: 6.8,
    dropShadowBlur: 2,
    dropShadowColor: "#686868",
    dropShadowDistance: 2,
    fill: "white"
});

const basicText = new PIXI.Text('Readio Defense', style);

// basicText.x = (w / 2) * 0.7;
// basicText.y = (h / 2) * 1.2;

const rstyle = new PIXI.TextStyle({
    fill: "white",
    fontFamily: "Helvetica",
    fontSize: 65,
    fontWeight: 500,
    stroke: "#58ca36",
    dropShadow: true,
    dropShadowAlpha: 0.8,
    dropShadowAngle: 0.7,
    dropShadowBlur: -16,
    dropShadowColor: "#b9bdc6",
    dropShadowDistance: 3,
});

const rText = new PIXI.Text('R', rstyle);

const btnstyle = new PIXI.TextStyle({
  dropShadow: true,
  dropShadowColor: "white",
  fill: [
      "#65bfff",
      "#5f77aa",
      "#667fff"
  ],
  fontFamily: "Verdana",
  fontStyle: "italic",
  letterSpacing: 5,
  lineJoin: "bevel",
  stroke: "white",
  strokeThickness: 3
});
const btnHoverstyle = new PIXI.TextStyle({
  dropShadowColor: "white",
  fill: [
      "#65bfff",
      "#5f77aa",
      "#667fff"
  ],
  fontFamily: "Verdana",
  fontStyle: "italic",
  letterSpacing: 5,
  lineJoin: "bevel",
  stroke: "white",
  strokeThickness: 3
});

const btnText = new PIXI.Text('Start Game', btnstyle);
btnText.interactive = true;
btnText.buttonMode = true;
btnText.click = function(){
  console.log("click");
  app.stage.removeChild(redStone, circie, basicText, rText, triangle, circieLineBold,
      circieLineThin, smallText, lineX, mouseIcon,btnText);
  secStage();

}
btnText.anchor.set(0);
btnText.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
        function onButtonDown() {
            this.isdown = true;
            this.setTransform(resetOriginW-80, resetOriginhH+120, 0, 0, 0, 0, 0, -2, 0-2);
            this.alpha = 1;
        }

        function onButtonUp() {
            this.isdown = false;
            if (this.isOver) {
                this.setTransform(resetOriginW-80, resetOriginhH+120, 0, 0, 0, 0, 0, 6, 6);
            }
            else {
                this.setTransform(resetOriginW-80, resetOriginhH+120, 0, 0, 0, 0, 0, 0, 0);
            }
        }

        function onButtonOver() {
            this.isOver = true;
            if (this.isdown) {
                return;
            }
            this.setTransform(resetOriginW-80, resetOriginhH+120, 0, 0, 0, 0, 0, 6, 6);
        }
        function onButtonOut() {
            this.isOver = false;
            if (this.isdown) {
                return;
            }
            this.setTransform(resetOriginW-80, resetOriginhH+120, 0, 0, 0, 0, 0, 0, 0);
        }

const smallTextStyle = new PIXI.TextStyle({
    fontFamily: "Helvetica",
    fontSize: 15,
    dropShadow: true,
    dropShadowAngle: 6,
    dropShadowBlur: 3,
    dropShadowColor: "#686868",
    dropShadowDistance: 1.5,
    fill: "#ffffff99",
});

const smallText = new PIXI.Text('你身負運送能量電池的任務\n卻遭到幾何星人的埋伏\n請協助他們的手中奪回能量電池', smallTextStyle);
// smallText.x = w/9;
// smallText.y = h/3;
// // blue triangle
// graphics.lineStyle(0, 0xffffff, 1);
// graphics.beginFill(0x3676BB, 1);
// graphics.drawPolygon([445, 400, 490, 490, 400, 490]);
// graphics.endFill();
var count = 0;
triangle.x = w;
triangle.y = h;
app.ticker.add(function(delta) {

    count += 0.2;
    triangle.clear();
    triangle.lineStyle(0, 0xffffff, 1);
    triangle.beginFill(0x3676BB, 1);
    triangle.drawPolygon([
        300, 270,
        330, 330,
        270, 330
    ]);
    triangle.rotation = count * 0.25;
    redStone.rotation = count * 0.15;
    circie.rotation = count * -0.3;
    circieLineBold.position.x = count;
    circieLineBold.position.y = count;
    circieLineThin.position.x = count;
    circieLineThin.position.y = count;
    // console.log(count);
    
    var mouseX = app.renderer.plugins.interaction.mouse.global.x;
    var mouseY = app.renderer.plugins.interaction.mouse.global.y;

    lineX.x = mouseX -w/2;
    lineX.y = mouseY -h/2;
    mouseIcon.x = mouseX;
    mouseIcon.y = mouseY;
    mouseIcon.rotation += 0.1 * delta;

});

// app.stage.addChild(triangle);
app.stage.addChild(redStone, circie, basicText, rText, triangle, circieLineBold,
    circieLineThin, smallText, lineX, mouseIcon,btnText);
window.addEventListener('resize', resize);

function resize() {
    // Resize the renderer
    app.renderer.resize(window.innerWidth, window.innerHeight);
    //-----size------
    w = app.screen.width;
    h = app.screen.height;
    ratio = w / h;
    resetOriginW = app.screen.width / 2;
    resetOriginhH = app.screen.height / 2;
    // -----Graphics resize position-----
    triangle.position.set(resetOriginW, resetOriginhH);
    redStone.position.set(resetOriginW, resetOriginhH);
    circie.position.set(resetOriginW, resetOriginhH);
    circieLineBold.position.set(resetOriginW, resetOriginhH);
    circieLineThin.position.set(resetOriginW, resetOriginhH);
    //------text position-----
    basicText.position.set(resetOriginW - 45, resetOriginhH + 70);
    rText.position.set(resetOriginW, resetOriginhH);
    smallText.position.set(w * 0.1 - 50, h * 0.85);
    btnText.position.set(resetOriginW-80, resetOriginhH+120);
    // lineX.position.set(0,0);
}
resize();
