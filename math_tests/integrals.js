export const integralsTests = [
	{
		"id": 1,
		"idLectures": 7,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int(x^3 + \\dfrac{3}{2\\sqrt{x}} + \\dfrac{2}{x})dx \\)"
		},
		"answers": ["\\( \\dfrac{x^4}{4} + 3\\sqrt{x} + 2ln(x) + C \\)", "\\( \\dfrac{x^4}{4} + 3\\sqrt{x} + C \\)", "\\( \\dfrac{x^4}{4} + 2\\sqrt{x} - 2ln(x) + C \\)", "\\( \\dfrac{x^4}{4} + 2\\sqrt{x} + ln(x) + C \\)"],
		"trueAnswer": 0
	},
	{
		"id": 2,
		"idLectures": 7,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int(1 - \\sqrt{x})^{2}dx \\)"
		},
		"answers": ["\\( \\dfrac{4}{3}x^{\\dfrac{3}{2}} + x^2 + C \\)", 
						"\\( x - x^{\\dfrac{1}{2}} + 0.5x^2 + C \\)", 
						"\\( x - x^{\\dfrac{3}{2}} + 0.5x^2 + C \\)", 
						"\\( x - \\dfrac{4}{3}x^{\\dfrac{3}{2}} + 0.5x^2 + C \\)"],
		"trueAnswer": 3
	},
	{
		"id": 3,
		"idLectures": 7,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int(x^3 + \\dfrac{1}{2\\sqrt{x}})dx \\)"
		},
		"answers": ["\\( \\dfrac{x^4}{4} + C \\)", "\\( \\dfrac{x^4}{4} + \\sqrt{x} + C \\)", "\\( \\dfrac{x^4}{4} + 2\\sqrt{x} + C \\)", "\\( \\dfrac{x^4}{4} - \\sqrt{x} + C \\)"],
		"trueAnswer": 1
	},
	{
		"id": 4,
		"idLectures": 7,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int(x^{2}(3 + 4x)^2)dx \\)"
		},
		"answers": ["\\( 3x^3 + 6x^4 + \\dfrac{16x^5}{5} + C \\)", 
						"\\( 3x^3 + 4x^4 + \\dfrac{x^5}{5} + C \\)", 
						"\\( x^3 + x^4 + \\dfrac{x^5}{5} + C \\)", 
						"\\( 3x^3 + 6x^4 - \\dfrac{16x^5}{4} + C \\)"],
		"trueAnswer": 0
	},
	{
		"id": 5,
		"idLectures": 7,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int(4\\sqrt{x} + 6x^2 - 5\\sqrt[5]{x})dx \\)"
		},
		"answers": ["\\( x\\sqrt{x} + 2x^3 - x\\sqrt[5]{x} + C \\)", 
						"\\( \\dfrac{8}{3}x\\sqrt{x} + 2x^3 - \\dfrac{25}{6}x\\sqrt[5]{x} + C \\)", 
						"\\( \\dfrac{8}{3}x\\sqrt{x} + 2x^3 - x\\sqrt[5]{x} + C \\)", 
						"\\( \\dfrac{8}{3}\\sqrt{x} + 2x^3 - \\dfrac{25}{6}x\\sqrt[5]{x} + C \\)"],
		"trueAnswer": 1
	},
	{
		"id": 6,
		"idLectures": 8,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int \\dfrac{dx}{x+5} \\)"
		},
		"answers": ["\\( xln|x+5| + C \\)", 
						"\\( \\dfrac{ln|x+5|}{5} + C \\)", 
						"\\( ln|x+5| + C \\)", 
						"\\( 5ln|x+5| + C \\)"],
		"trueAnswer": 2
	},
	{
		"id": 7,
		"idLectures": 8,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int \\dfrac{xdx}{4x^2 + 1} \\)"
		},
		"answers": ["\\( xln|4x^2+1| + C \\)", 
						"\\( \\dfrac{1}{8}ln|8x+1| + C \\)", 
						"\\( ln|4x^2+1| + C \\)", 
						"\\( \\dfrac{1}{8}ln|4x^2+1| + C \\)"],
		"trueAnswer": 3
	},
	{
		"id": 8,
		"idLectures": 8,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int \\dfrac{xdx}{\\sqrt{x^2 + 1}} \\)"
		},
		"answers": ["\\( \\sqrt{x^2 + 1} + C \\)", 
						"\\( \\dfrac{\\sqrt{x^2 + 1}}{2} + C \\)", 
						"\\( \\sqrt{2x + 1} + C \\)", 
						"\\( 2\\sqrt{x} + C \\)"],
		"trueAnswer": 0
	},
	{
		"id": 9,
		"idLectures": 8,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int \\dfrac{e^{x}dx}{1 - 3e^{x}} \\)"
		},
		"answers": ["\\( ln|3e^{x}| + C \\)", 
						"\\( \\dfrac{1}{3}ln|1 - 3e^{x}| + C \\)", 
						"\\( ln|1 - 3e^{x}| + C \\)", 
						"\\( \\dfrac{1}{x}ln|1 - 3e^{x}| + C \\)"],
		"trueAnswer": 1
	},
	{
		"id": 10,
		"idLectures": 8,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int (3x + 2)^{4}dx \\)"
		},
		"answers": ["\\( (3x + 2)^5 + C \\)", 
						"\\( \\dfrac{(3x + 2)^3}{15}+ C \\)", 
						"\\( \\dfrac{(3x + 2)^5}{5} + C \\)", 
						"\\( \\dfrac{(3x + 2)^5}{15} + C \\)"],
		"trueAnswer": 3
	},
	{
		"id": 11,
		"idLectures": 9,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int \\dfrac{dx}{\\sqrt[3]{(3-4x)^2}} \\)"
		},
		"answers": ["\\( -\\dfrac{3\\sqrt[3]{3-4x}}{4} + C \\)", 
						"\\( \\dfrac{3\\sqrt[3]{3-4x}}{4}+ C \\)", 
						"\\( -\\dfrac{\\sqrt[3]{3-4x}}{4} + C \\)", 
						"\\( 3\\sqrt[3]{3-4x} + C \\)"],
		"trueAnswer": 0
	},
	{
		"id": 12,
		"idLectures": 9,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int \\dfrac{xdx}{\\sqrt{9 - 8x^2}} \\)"
		},
		"answers": ["\\( \\dfrac{\\sqrt{9 - 8x^2}}{8} + C \\)", 
						"\\( -\\dfrac{\\sqrt{9 - 8x^2}}{8} + C \\)", 
						"\\( -\\dfrac{\\sqrt{9 - 8x^2}}{4} + C \\)", 
						"\\( \\dfrac{\\sqrt{9 - 8x}}{8} + C \\)"],
		"trueAnswer": 1
	},
	{
		"id": 13,
		"idLectures": 9,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int (x\\sqrt{x+1})dx \\)"
		},
		"answers": ["\\( -\\dfrac{2}{15}(3x+2)\\sqrt{1+x} + C \\)", 
						"\\( (3x+2)\\sqrt{(1+x)^3} + C \\)", 
						"\\( \\dfrac{2}{15}(3x+2)\\sqrt{(1+x)^3} + C \\)", 
						"\\( \\sqrt{(1+x)^3} + C \\)"],
		"trueAnswer": 2
	},
	{
		"id": 14,
		"idLectures": 9,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int (\\dfrac{\\sqrt{x}}{2(x+4)})dx \\)"
		},
		"answers": ["\\( \\sqrt{x} - 2arctg(\\dfrac{\\sqrt{x}}{2}) + C \\)", 
						"\\( \\sqrt{x} + arctg(\\dfrac{\\sqrt{x}}{2}) + C \\)", 
						"\\( 2arctg(\\dfrac{\\sqrt{x}}{2}) + C \\)", 
						"\\( -\\sqrt{x} - 2arctg(\\sqrt{x}) + C \\)"],
		"trueAnswer": 0
	},
	{
		"id": 15,
		"idLectures": 9,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int \\dfrac{e^{x}dx}{10-6e^{x}} \\)"
		},
		"answers": ["\\( \\dfrac{1}{e^{x}}ln|10-6e^{x}| + C \\)", 
						"\\( \\dfrac{1}{6}ln|10-6e^{x}| + C \\)", 
						"\\( -\\dfrac{1}{6}ln|10-6e^{x}| + C \\)", 
						"\\( ln|10-6e^{x}| + C \\)"],
		"trueAnswer": 2
	},
	{
		"id": 16,
		"idLectures": 10,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int \\dfrac{ln(x)dx}{\\sqrt{x}} \\)"
		},
		"answers": ["\\( 2\\sqrt{x}(ln(x)-2) + C \\)", 
						"\\( \\sqrt{x}(ln(x)-2) + C \\)", 
						"\\( -\\sqrt{x}(ln(x)-2) + C \\)", 
						"\\( -2\\sqrt{2x}(ln(x)-2) + C \\)"],
		"trueAnswer": 0
	},
	{
		"id": 17,
		"idLectures": 10,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int (4x+1)e^{-2x}dx \\)"
		},
		"answers": ["\\( e^{2x}(2x+1.5) + C \\)", 
						"\\( e^{-2x}(2x+1.5) + C \\)", 
						"\\( -e^{2x}(2x+1.5) + C \\)", 
						"\\( -e^{-2x}(2x+1.5) + C \\)"],
		"trueAnswer": 3
	},
	{
		"id": 18,
		"idLectures": 10,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int (x^2 + 2)cos(x)dx \\)"
		},
		"answers": ["\\( x^{2}cos(x) + 2xcos(x) + C \\)", 
						"\\( x^{2}sin(x) + 2xcos(x) + C \\)", 
						"\\( x^{2}sin(x) + x^{2}cos(x) + C \\)", 
						"\\( x^{2}sin(x) - xcos(x) + C \\)"],
		"trueAnswer": 1
	},
	{
		"id": 19,
		"idLectures": 10,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int arcsin(3x)dx \\)"
		},
		"answers": ["\\( xarcsin(3x) + \\dfrac{1}{3}\\sqrt{1-9x^2} + C \\)", 
						"\\( xarcsin(3x) + C \\)", 
						"\\( xarcsin(3x) + \\sqrt{1-9x^2} + C \\)", 
						"\\( -xarcsin(3x) + \\sqrt{1-9x^2} + C \\)"],
		"trueAnswer": 0
	},
	{
		"id": 20,
		"idLectures": 10,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int \\dfrac{xdx}{cos^2(x)} \\)"
		},
		"answers": ["\\( tg(x) + ln|cos(x)| + C \\)", 
						"\\( xtg(x) + 2ln|cos(x)| + C \\)", 
						"\\( xtg(x) + ln|cos(x)| + C \\)", 
						"\\( 2xtg(x) + ln|cos(x)| + C \\)"],
		"trueAnswer": 2
	},
	{
		"id": 21,
		"idLectures": 11,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int sin(\\dfrac{x}{2})cos(\\dfrac{x}{4})dx \\)"
		},
		"answers": ["\\( -\\dfrac{2}{3}cos(\\dfrac{3x}{4}) - 2cos(\\dfrac{x}{4}) + C \\)", 
						"\\( cos(\\dfrac{3x}{4}) - 2cos(\\dfrac{x}{4}) + C \\)", 
						"\\( \\dfrac{2}{3}cos(\\dfrac{3x}{4}) + cos(\\dfrac{x}{4}) + C \\)", 
						"\\( -\\dfrac{2}{3}cos(\\dfrac{3x}{4}) - 8cos(\\dfrac{x}{4}) + C \\)"],
		"trueAnswer": 0
	},
	{
		"id": 22,
		"idLectures": 11,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int sin^2(\\dfrac{3x}{2})dx \\)"
		},
		"answers": ["\\( x - \\dfrac{1}{3}sin(3x) + C \\)", 
						"\\( 0.5(x - \\dfrac{1}{3}sin(3x)) + C \\)", 
						"\\( 0.5(x + sin(3x)) + C \\)", 
						"\\( -0.5(\\dfrac{1}{3}x - sin(3x)) + C \\)"],
		"trueAnswer": 1
	},
	{
		"id": 23,
		"idLectures": 11,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int sin^4(x)dx \\)"
		},
		"answers": ["\\( \\dfrac{1}{4}(\\dfrac{3}{2}x - sin(2x) + \\dfrac{sin(4x)}{8}) + C \\)", 
						"\\( \\dfrac{3}{2}x - sin(2x) + \\dfrac{sin(4x)}{8} + C \\)", 
						"\\( \\dfrac{3}{2}x - sin(2x) + \\dfrac{sin(2x)}{4} + C \\)", 
						"\\( -\\dfrac{1}{4}(\\dfrac{3}{2}x - sin(x) + \\dfrac{sin(4x)}{8}) + C \\)"],
		"trueAnswer": 0
	},
	{
		"id": 24,
		"idLectures": 11,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int \\dfrac{dx}{5-3cos(x)} \\)"
		},
		"answers": ["\\( 2arctg(tg(\\dfrac{x}{2})) + C \\)", 
						"\\( -0.5arctg(tg(\\dfrac{x}{2})) + C \\)", 
						"\\( arctg(2tg(\\dfrac{x}{2})) + C \\)", 
						"\\( 0.5arctg(2tg(\\dfrac{x}{2})) + C \\)"],
		"trueAnswer": 3
	},
	{
		"id": 25,
		"idLectures": 12,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int_0^\\pi (x+5)sin(x)dx \\)"
		},
		"answers": ["\\( \\pi + 5 \\)", 
						"\\( 0 \\)", 
						"\\( \\pi + 10 \\)", 
						"\\( \\pi \\)"],
		"trueAnswer": 2
	},
	{
		"id": 26,
		"idLectures": 12,
		"format": "input",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int_0^2 (x^3 + 2x + 2)dx \\)"
		},
		"trueAnswer": 12
	},
	{
		"id": 27,
		"idLectures": 12,
		"format": "choice",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int_1^2 \\dfrac{e^{0.5}dx}{x^2} \\)"
		},
		"answers": ["\\( \\sqrt{e} \\)", 
						"\\( e - \\sqrt{e} \\)", 
						"\\( e \\)", 
						"\\( -\\sqrt{e} \\)"],
		"trueAnswer": 1
	},
	{
		"id": 28,
		"idLectures": 12,
		"format": "input",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int_4^5 x\\sqrt{x^2 - 16}dx \\)"
		},
		"trueAnswer": 9
	},
	{
		"id": 29,
		"idLectures": 12,
		"format": "input",
		"example": {
			"text": "Найдите интеграл",
			"formula": "\\( \\int_{-2}^4 (8 + 2x - x^2)dx \\)"
		},
		"trueAnswer": 36
	},
]