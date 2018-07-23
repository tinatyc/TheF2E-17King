var weapon = new PIXI.Graphics();
var weapon2 = new PIXI.Graphics();
var weaponDot = new PIXI.Graphics();
var bullet = new PIXI.Graphics();
// weapon circie
weapon.lineStyle(5, 0x3f6c84, 1,1);
weapon.drawCircle(0, 0, 50);
weapon.endFill();

weapon.lineStyle(1, 0xffffff, 0.5,1);
weapon.drawCircle(0, 0, 70);
weapon.endFill();

weapon.lineStyle(2, 0xffffff);
weapon.moveTo(-50, 0);
weapon.lineTo(0, 0);
weapon.endFill();

weapon.lineStyle(2, 0xffffff);
weapon.moveTo(0, -50);
weapon.lineTo(0, 0)
weapon.endFill();

weapon.lineStyle(2, 0xffffff);
weapon.moveTo(-29, -29);
weapon.lineTo(29, 29);
weapon.setTransform(0, 0, 0, 0, 10, 0, 0, 0, 0);
weapon.endFill();

weapon2.lineStyle(1, 0xffffff, 0.5,1);
weapon2.beginFill(0xffffff, 0.8);
weapon2.drawPolygon([0, 25,10, 10, 10, -25,-10, -25, -10, 10, 0, 25,]);
weapon2.setTransform(0, 0, 0, 0, 90.85, 0, 0, 0, -65);
weapon2.endFill();

weaponDot.lineStyle(1, 0xffffff, 0.5,1);
weaponDot.beginFill(0xffffff, 0.5);
weaponDot.drawCircle(0, 85, 5);
weaponDot.endFill();

bullet.lineStyle(1, 0xffffff, 1,1);
bullet.beginFill(0xffffff, 1);
bullet.drawCircle(0, 0, 50);
bullet.endFill();

const detailStyle = new PIXI.TextStyle({
    fontFamily: "Helvetica",
    fontSize: 20,
    dropShadow: true,
    dropShadowAngle: 6.8,
    dropShadowBlur: 2,
    dropShadowColor: "#686868",
    dropShadowDistance: 2,
    fill: "white"
});

const detailText = new PIXI.Text('按"W"有子彈', detailStyle);

const ATStyle = new PIXI.TextStyle({
	dropShadow: true,
	dropShadowAlpha: 0.5,
	dropShadowBlur: 5,
	dropShadowColor: "#fffefd",
	dropShadowDistance: 1,
	fill: "#ff000e",
	fontFamily: "Verdana",
	fontWeight: 900,
	stroke: "white",
	strokeThickness: 1
});

const ATText = new PIXI.Text('但只有一發\nI do my best...\n(;´༎ຶД༎ຶ`)', ATStyle);

function secStage(){

	app.stage.addChild(weapon, weapon2,weaponDot,detailText);
	app.ticker.add(function(delta) {

	    count += 0;

	    var mouseX = app.renderer.plugins.interaction.mouse.global.x;
	    var mouseY = app.renderer.plugins.interaction.mouse.global.y;

	    weapon.x = mouseX;
	    weapon.y = mouseY;
	    weapon2.x = mouseX;
	    weapon2.y = mouseY;
	    weaponDot.x = mouseX;
	    weaponDot.y = mouseY;
	    weaponDot.rotation += 0.1 * delta;
	});	
}
window.addEventListener("keypress", function(e) {
        if (e.keyCode === 87) {
        	app.stage.removeChild(bullet);
            console.log("87");
			bulletFly();
            e.preventDefault();
        }
    }, false);
function bulletFly(){
	app.renderer.resize(window.innerWidth, window.innerHeight);
	resetOriginW = app.screen.width / 2;
	resetOriginhH = app.screen.height / 2;
	ATText.position.set(resetOriginW, resetOriginhH);
	app.stage.addChild(ATText);
	app.ticker.add(function(delta) {
	    count += 0;
	    var mouseX = app.renderer.plugins.interaction.mouse.global.x;
	    var mouseY = app.renderer.plugins.interaction.mouse.global.y;
	    // bullet.x = mouseX;
	    // bullet.y = mouseY;
	    // bullet.rotation += 0.1 * delta;
	    // bullet.pivotX += 0.1 * delta;
	    for (var i = 0; i < 100; i++) {
	    	app.stage.addChild(bullet);
	    	bullet.direction = Math.random() * Math.PI * 2;
	    	bullet.x += Math.floor(bullet.direction) * 0.5;
	    	bullet.y += Math.floor(bullet.direction) * 0.5;
	    }
	});
	
}
