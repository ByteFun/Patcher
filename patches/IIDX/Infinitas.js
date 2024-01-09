window.addEventListener("load", function () {
	new PatchContainer([
		new Patcher("bm2dx.exe", "2.0.1.620", [
			{
				name: "Prevent Windows volume change on boot",
				tooltip: "Saves the volume value set in the OS mixer.",
				patches: [
					{ offset: 0x27AE67, off: [0x0C], on: [0x04] },
					{ offset: 0x27AEDE, off: [0x0C], on: [0x04] },
				],
			},
		])
	]);				// PatchContainer
});					// addEventListener