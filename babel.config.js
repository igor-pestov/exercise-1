module.exports = {
	presets: [
		"@babel/preset-typescript",
		["@babel/preset-env", {targets: {node: "current"}}],
		"@babel/preset-react"
	],
	plugins: [
		"@babel/proposal-class-properties",
		"@babel/proposal-object-rest-spread"
	]
}