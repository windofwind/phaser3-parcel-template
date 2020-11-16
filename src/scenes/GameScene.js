import Phaser from "phaser";

const GROUND_KEY = 'ground'

export default class Scene1 extends Phaser.Scene {
	constructor() {
		super("Game-Scene");
	}

	preload() {
        this.load.image("sky", "assets/sky.png");
		this.load.image(GROUND_KEY, "assets/platform.png");
		this.load.image("star", "assets/star.png");
		this.load.image("bomb", "assets/bomb.png");

		this.load.spritesheet("dude", 
			"assets/dude.png",
			{ frameWidth: 32, frameHeight: 48 }
		);
    }

    create() {
        this.add.image(400, 300, 'sky');
        this.add.image(400, 300, 'star');
    }
}
 