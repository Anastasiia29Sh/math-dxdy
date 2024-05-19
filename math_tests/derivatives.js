export const derivativesTests = [
	{
		"id": 1,
		"idLectures": 2,
		"format": "input",
		"example": {
			"text": "Вычислите значение производной функции f(x) в точке x = 2",
			"formula": "\\(f(x) = x - \\dfrac{1}{x}\\)"
		},
		"trueAnswer": 1.25
	},
	{
		"id": 2,
		"idLectures": 2,
		"format": "input",
		"example": {
			"text": "Вычислите значение производной функции f(x) в точке x = 1",
			"formula": "\\(f(x) = x^3 - 0.5x^2 + 3x + 5\\)"
		},
		"trueAnswer": 5
	},
	{
		"id": 3,
		"idLectures": 2,
		"format": "input",
		"example": {
			"text": "Вычислите значение производной функции f(x) в точке x = 3",
			"formula": "\\(f(x) = (x^2 + 3x + 5)(x^2 - 2x + 10)\\)"
		},
		"trueAnswer": 209
	},
	{
		"id": 4,
		"idLectures": 2,
		"format": "input",
		"example": {
			"text": "Вычислите значение производной функции f(x) в точке x = 0.5",
			"formula": "\\(f(x) = \\dfrac{x^2}{x-1}\\)"
		},
		"trueAnswer": -3
	},
	{
		"id": 5,
		"idLectures": 2,
		"format": "choice",
		"example": {
			"text": "Найдите производную функции",
			"formula": "\\(f(x) = (1 - x^3)(x^4 + 4x)\\)"
		},
		"answers": ["\\( -7x^6 - 12x^3 + 4 \\)", "\\( 4x^3 + 4 \\)", "\\( -7x^6 - 12x^3 \\)", "\\( 7x^6 - 12x^3 - 4 \\)"],
		"trueAnswer": 0
	},
	{
		"id": 6,
		"idLectures": 3,
		"format": "choice",
		"example": {
			"text": "Найдите производную функции",
			"formula": "\\(y = ln(ax^2 + c)\\)"
		},
		"answers": ["\\( \\dfrac{2ax}{ax^2} \\)", "\\( \\dfrac{2ax}{2ax + c} \\)", "\\( \\dfrac{2ax}{ax^2 + c} \\)", "\\( \\dfrac{2x}{ax^2 + c} \\)"],
		"trueAnswer": 2
	},
	{
		"id": 7,
		"idLectures": 3,
		"format": "choice",
		"example": {
			"text": "Найдите производную функции",
			"formula": "\\(y = cos(x^3 - 3)\\)"
		},
		"answers": ["\\( 3x^2·cos(x^3 - 3) \\)", "\\( -3x^2·sin(x^3 - 3) \\)", "\\( -3x^2·sin(x^3) \\)", "\\( -sin(x^3 - 3) \\)"],
		"trueAnswer": 1
	},
	{
		"id": 8,
		"idLectures": 3,
		"format": "choice",
		"example": {
			"text": "Найдите производную функции",
			"formula": "\\(y = ln(x + \\sqrt{x^2 + 1})\\)"
		},
		"answers": ["\\( \\dfrac{1}{\\sqrt{x^2 + 1}} \\)", "\\( \\dfrac{x}{\\sqrt{x^2 + 1}} \\)", "\\( -\\dfrac{1}{\\sqrt{x^2 + 1}} \\)", "\\( \\dfrac{1}{\\sqrt{2x + 1}} \\)"],
		"trueAnswer": 0
	},
	{
		"id": 9,
		"idLectures": 3,
		"format": "choice",
		"example": {
			"text": "Найдите производную функции",
			"formula": "\\(y = 6sin^3x + cos(x^4)\\)"
		},
		"answers": ["\\( 6xcosx \\)", "\\( 3x^2cosx \\)", "\\( 3x^2sinx \\)", "\\( -3x^2cosx \\)"],
		"trueAnswer": 1
	},
	{
		"id": 10,
		"idLectures": 3,
		"format": "choice",
		"example": {
			"text": "Найдите производную функции",
			"formula": "\\(y = \\sqrt{x}sinx·cosx\\)"
		},
		"answers": ["\\( \\dfrac{sin(2x)}{\\sqrt{x}} + \\sqrt{x}cos(x) \\)", "\\( \\dfrac{sin(x)}{4\\sqrt{x}} + \\sqrt{x}cos(x) \\)", "\\( \\dfrac{sin(2x)}{4\\sqrt{x}} + cos(2x) \\)", "\\( \\dfrac{sin(2x)}{4\\sqrt{x}} + \\sqrt{x}cos(2x) \\)"],
		"trueAnswer": 3
	},
	{
		"id": 11,
		"idLectures": 3,
		"format": "choice",
		"example": {
			"text": "Найдите производную функции",
			"formula": "\\(y = \\dfrac{4}{xe^x}\\)"
		},
		"answers": ["\\( -\\dfrac{4(1+x)}{x^2·e^x} \\)", "\\( \\dfrac{4}{x^2·e^x} \\)", "\\( -\\dfrac{4}{x^2·e^x} \\)", "\\( \\dfrac{4(1+x)}{x·e^x} \\)"],
		"trueAnswer": 0
	},
	{
		"id": 12,
		"idLectures": 3,
		"format": "choice",
		"example": {
			"text": "Найдите производную функции",
			"formula": "\\(y = e^{sinx}\\)"
		},
		"answers": ["\\( e^{sinx} \\)", "\\( e^{sinx}cosx \\)", "\\( -e^{sinx}cosx \\)", "\\( e^{sinx}sinx \\)"],
		"trueAnswer": 1
	},
	{
		"id": 13,
		"idLectures": 3,
		"format": "choice",
		"example": {
			"text": "Найдите производную функции",
			"formula": "\\(y = 2^{x^3 + x - 4}\\)"
		},
		"answers": ["\\( 2^{x^3 + x - 4}·ln(3x^2 + 1) \\)", "\\( 2^{(x^3 + x - 4)·ln2(3x^2 + 1)} \\)", "\\( 2^{x^3 + x - 4} \\)", "\\( 2^{x^3 + x - 4}·ln(2(3x^2 + 1)) \\)"],
		"trueAnswer": 3
	},
	{
		"id": 14,
		"idLectures": 3,
		"format": "choice",
		"example": {
			"text": "Найдите производную функции",
			"formula": "\\(y = x^x\\)"
		},
		"answers": ["\\( x^x · (lnx - 1) \\)", "\\( x(lnx + 1) \\)", "\\( x^x · (lnx + 1) \\)", "\\( x^x \\)"],
		"trueAnswer": 2
	},
	{
		"id": 15,
		"idLectures": 4,
		"format": "choice",
		"example": {
			"text": "Найдите производную функции",
			"formula": "\\( y·sinx = cos(x-y) \\)"
		},
		"answers": ["\\( \\dfrac{-y·cosx - sin(x-y)}{sinx - sin(x-y)} \\)", 
						"\\( \\dfrac{y·cosx + sin(x-y)}{sinx + sin(x-y)} \\)", 
						"\\( \\dfrac{y·sinx - cos(x-y)}{sinx - sin(x-y)} \\)", 
						"\\( \\dfrac{y·cosx + sin(x-y)}{cosx - sin(x-y)} \\)"],
		"trueAnswer": 0
	},
	{
		"id": 16,
		"idLectures": 4,
		"format": "choice",
		"example": {
			"text": "Найдите производную функции",
			"formula": "\\( ln(y) = arcctg(\\dfrac{x}{y}) \\)"
		},
		"answers": ["\\( \\dfrac{ln(y) + \\dfrac{y^2}{x^2+y^2}}{\\dfrac{1}{y} - \\dfrac{y^2}{x^2+y^2}} \\)", 
						"\\( \\dfrac{-ln(y) + \\dfrac{y^2}{x^2-y^2}}{\\dfrac{1}{y} - \\dfrac{y^2}{x^2-y^2}} \\)", 
						"\\( \\dfrac{-ln(y) + \\dfrac{y^2}{x^2-y^2}}{\\dfrac{1}{y}} \\)", 
						"\\( \\dfrac{y^2}{x^2-y^2}{\\dfrac{1}{y} - \\dfrac{y^2}{x^2-y^2}} \\)"],
		"trueAnswer": 1
	},
	{
		"id": 17,
		"idLectures": 4,
		"format": "choice",
		"example": {
			"text": "Найдите производную функции",
			"formula": "\\(y^6 - y - x^2 = 0 \\)"
		},
		"answers": ["\\( \\dfrac{-2x}{6y^5 + 1} \\)", "\\( \\dfrac{x}{3y^5} \\)", "\\( \\dfrac{x}{6y^5} \\)", "\\( \\dfrac{2x}{6y^5 - 1} \\)"],
		"trueAnswer": 3
	},
	{
		"id": 18,
		"idLectures": 4,
		"format": "choice",
		"example": {
			"text": "Найдите производную функции",
			"formula": "\\( e^{2x}·sin^3(y) - 1 = e^{-3y}·cos^2(x) \\)"
		},
		"answers": ["\\( -\\dfrac{2(e^{-3y}sin(x)cos(x) + e^{2x}sin^3(x))}{3(e^{2x}sin^(y)cos(y) + e^{-3y}cos^2(x))} \\)", 
						"\\( 2(e^{-3y}sin(x)cos(x) + e^{2x}sin^3(x)) \\)", 
						"\\( \\dfrac{2(e^{-3y}sin(x)cos(x) + e^{2x}sin^3(x))}{3(e^{2x}sin^(y)cos(y) + e^{-3y}cos^2(x))} \\)", 
						"\\( \\dfrac{2(e^{-3y}sin(x)cos(x) - e^{2x}sin^3(x))}{3(e^{2x}sin^(y)cos(y) - e^{-3y}cos^2(x))} \\)"],
		"trueAnswer": 0
	},
	{
		"id": 19,
		"idLectures": 4,
		"format": "choice",
		"example": {
			"text": "Найдите производную функции",
			"formula": "\\( y = x + arctg(y) \\)"
		},
		"answers": ["\\( \\dfrac{1-y^2}{y^2} \\)", "\\( \\dfrac{1+y^2}{y^2} \\)", "\\( -\\dfrac{1+y^2}{y^2} \\)", "\\( \\dfrac{1+y^2}{y} \\)"],
		"trueAnswer": 1
	},
	{
		"id": 20,
		"idLectures": 5,
		"format": "choice",
		"example": {
			"text": "Найдите первую производную функции",
			"formula": "\\( \\begin{cases} y = e^t·cos(t) \\\\ x = e^t·sin(t) \\end{cases} \\)"
		},
		"answers": ["\\( \\dfrac{cos(t)-sin(t)}{sin(t)+cos(t)} \\)", "\\( \\dfrac{cos(t)+sin(t)}{sin(t)-cos(t)} \\)", "\\( -\\dfrac{cos(t)-sin(t)}{sin(t)+cos(t)} \\)", "\\( \\dfrac{sin(t)-sin(t)}{cos(t)+sin(t)} \\)"],
		"trueAnswer": 0
	},
	{
		"id": 21,
		"idLectures": 5,
		"format": "choice",
		"example": {
			"text": "Найдите вторую производную функции",
			"formula": "\\( \\begin{cases} x = 3t + 1 \\\\ y = t^3 \\end{cases} \\)"
		},
		"answers": ["\\( t^2 \\)", "\\( \\dfrac{2t}{3} \\)", "\\( -\\dfrac{2t}{3} \\)", "\\( \\dfrac{t^2}{3} \\)"],
		"trueAnswer": 1
	},
	{
		"id": 22,
		"idLectures": 5,
		"format": "choice",
		"example": {
			"text": "Найдите первую производную функции",
			"formula": "\\( \\begin{cases} x = \\sqrt{2t-t^2} \\\\ y = arcsin(t-1) \\end{cases} \\)"
		},
		"answers": ["\\( 1-t \\)", "\\( -\\dfrac{1}{\\sqrt{1-t}} \\)", "\\( -\\dfrac{1}{t-1} \\)", "\\( \\dfrac{1}{1+t} \\)"],
		"trueAnswer": 2
	},
	{
		"id": 23,
		"idLectures": 5,
		"format": "choice",
		"example": {
			"text": "Найдите вторую производную функции",
			"formula": "\\( \\begin{cases} x = cos^2(t) \\\\ y = tg^2(t) \\end{cases} \\)"
		},
		"answers": ["\\( cos^6(t) \\)", "\\( \\dfrac{2}{cos^6(t)} \\)", "\\( -\\dfrac{1}{cos^4(t)} \\)", "\\( cos^4(t) \\)"],
		"trueAnswer": 1
	},
	{
		"id": 24,
		"idLectures": 5,
		"format": "choice",
		"example": {
			"text": "Найдите первую производную функции",
			"formula": "\\( \\begin{cases} x = t^2·log_{2}(t) \\\\ y = 2^{5t}+5 \\end{cases} \\)"
		},
		"answers": ["\\( \\dfrac{5·2^{5t}·ln^2(2)}{2t·ln(t)+t} \\)", "\\( -\\dfrac{5·2^{5t}·ln(2)}{2t·ln(t)+t} \\)", "\\( -\\dfrac{5·2^{5t}·ln^2(2)}{2t·ln(t)-t} \\)", "\\( \\dfrac{5·2^{5t}·log_{2}(t)}{2t·ln(t)+t} \\)"],
		"trueAnswer": 0
	},
	{
		"id": 25,
		"idLectures": 6,
		"format": "choice",
		"example": {
			"text": "Найдите производную 4 порядка",
			"formula": "\\( y = e^{3x} \\)"
		},
		"answers": ["\\( 9e^{3x} \\)", "\\( 27e^{3x} \\)", "\\( 3e^{3x} \\)", "\\( 81e^{3x} \\)"],
		"trueAnswer": 3
	},
	{
		"id": 26,
		"idLectures": 6,
		"format": "input",
		"example": {
			"text": "Найдите 18 производную в точке \\( x = \\dfrac{\\pi}{2} \\)",
			"formula": "\\( y = sin(x) \\)"
		},
		"trueAnswer": -1
	},
	{
		"id": 27,
		"idLectures": 6,
		"format": "choice",
		"example": {
			"text": "Найдите производную 5 порядка",
			"formula": "\\( y = (2x^2 - 7)ln(x - 1) \\)"
		},
		"answers": ["\\( \\dfrac{8(x^2 - 5x - 11)}{(x - 1)^5} \\)", "\\( \\dfrac{x^2 - 5x - 11}{(x - 1)^5} \\)", "\\( \\dfrac{8(x^2 - 5x - 11)}{(x - 1)} \\)", "\\( \\dfrac{8(x^2 - 7)}{(x - 1)^5} \\)"],
		"trueAnswer": 0
	},
	{
		"id": 28,
		"idLectures": 6,
		"format": "choice",
		"example": {
			"text": "Найдите вторую производную",
			"formula": "\\( 2x^2 + 3y^2 - 6 = 0 \\)"
		},
		"answers": ["\\( \\dfrac{4}{3y^3} \\)", "\\( \\dfrac{3}{3y^3} \\)", "\\( -\\dfrac{4}{3y^3} \\)", "\\( 3y^3 \\)"],
		"trueAnswer": 2
	}
]