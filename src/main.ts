// クリックした対象の色を変えるプログラム
function main(param: g.GameMainParameterObject): void {
	const scene = new g.Scene({game: g.game});
	scene.loaded.add(() => {
		// 画面に表示するブロックを作る

		const rect = generateBlock(scene);

		rect.x = g.game.width / 2;
		rect.y = g.game.height / 2;

		rect.update.add(() => {
			//
		});
		scene.append(rect);
	});
	g.game.pushScene(scene);
}

function generateBlock(scene: g.Scene): g.E {
	const block = new g.FilledRect({
		scene: scene,
		cssColor: "#FF0000",
		width: 32,
		height: 32,
		touchable: true,
	});

	block.pointDown.add(() => {
		// 色の状態を変化させる
		switch (block.cssColor) {
			case "#FF0000":
				block.cssColor = "#00FF00";
				break;
			case "#00FF00":
				block.cssColor = "#0000FF";
				break;
			case "#0000FF":
				block.cssColor = "#FF0000";
				break;
			default:
				block.cssColor = "#FF0000";
				break;
		}
		block.modified();
	});

	return block;
}

export = main;
