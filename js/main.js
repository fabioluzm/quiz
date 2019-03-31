const questions = [

	{
		question: "What is 10 + 10?",
		options: ["8", "20", "28", "30"],
		answer: "20"
	},
	{
		question: "Who is the inventor of photography?",
		options: ["Antonio Salieri", "Keith Flint", "Daguerre", "Darwin"],
		answer: "Daguerre"
	},
	{
		question: "What is Elvis Presley s middle name?",
		options: ["Aaron", "Brad", "Collin", "Austin"],
		answer: "Aaron"
	},
	{
		question: "Who killed the Minotaur?",
		options: ["Perseus", "Hercules", "Achilles", "Theseus"],
		answer: "Theseus"
	},
	{
		question: "What was the name of Napoleon s first wife?",
		options: ["Victoria", "Anne", "Josephine", "Valentina"],
		answer: "Josephine"
	},
	{
		question: "Who was the imaginary love of Don Quixote?",
		options: ["Dulcinea", "Amalita", "Carmen", "Verena"],
		answer: "Dulcinea"
	},
	{
		question: "What color is cobalt?",
		options: ["Pink", "Blue", "Green", "Gray"],
		answer: "Blue"
	}
];

let question_number = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
	load_question();
});

function load_question() {
	const question = document.querySelector("#question");
	question.innerHTML = questions[question_number].question;

	const options = document.querySelector("#options");
	options.innerHTML = "";

	const score = document.querySelector("#correct")
	score.innerHTML = `${correct} of ${questions.length}`;

	for (const option of questions[question_number].options) {

		options.innerHTML += `<button class="option">${option}</button>`;
	}

	document.querySelectorAll(".option").forEach(option => {

		option.onclick = () => {

			const answer = questions[question_number].answer;
			if (option.textContent == answer) {

				correct++;
				score.innerHTML = `${correct} of ${questions.length}`;

				if (question_number + 1 == questions.length) {

					console.log(question_number);
					question.innerHTML = "End of Quizz!";
					options.innerHTML = "";
					return false
				}

			} else if (question_number + 1 == questions.length) {

				console.log(question_number);
				question.innerHTML = "End of Quizz!";
				options.innerHTML = "";
				return false
			}

			load_question(question_number++);

		}
	});
}