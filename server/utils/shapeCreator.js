const {
	topLeftPoint,
	centerPoint,
	widthAndHeight
} = require('./shapeDimensions')

//Shape Creators
const creators = {
	circle: (stroke) => {
		const [width, height] = widthAndHeight(stroke)
		const [x,y] = centerPoint(stroke)
		return {
			radius: (width + height)/4,
			x,
			y
		}
	},
	square: (stroke) => {
		const [width, height] = widthAndHeight(stroke)
		const [x, y] = topLeftPoint(stroke)
		return {
			width,
			height,
			x,
			y
		}
	}
}

const shapeCreator = (stroke, shape) => {
	return creators[shape](stroke)
}

module.exports = shapeCreator