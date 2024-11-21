document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    var questions = document.getElementById('questions');
    var turns = 0;
    var wins = 0;
    var nameInput = document.getElementById('Name'); 
    var displayName = document.getElementById('display-name');
    var displayScore = document.getElementById('display-score'); 

    // Add event listener for the form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var userName = nameInput.value; 
        displayName.textContent = userName;
    });

    // Add event listener for clicks on the questions section
    questions.addEventListener('click', function(event) {
        var target = event.target;

        // Make sure the clicked element is an <li> inside a question list
        if (target.tagName === 'LI') {
            // Find the parent div with class "question" for the clicked li
            var question = target.closest('.question');  // Find the closest parent div with the "question" class

            // Check if the parent question is found
            if (question) {
                var allOptions = question.querySelectorAll('li');  // Get all <li> elements for the current question

                // Disable all options for this question once an answer is clicked
                allOptions.forEach(function(option) {
                    option.setAttribute('disabled', 'true');  
                    option.style.pointerEvents = 'none'; // Prevent further clicks visually
                });

                var content = target.innerText;

                // Check for correct answers
                if (content === '24' || content === '7' || content === '50' || content === '8') {
                    wins += 1;  // Increment wins if the answer is correct
                }
                turns += 1;  // Increment turns regardless of correctness

                // Update score after 5 turns (questions answered)
                if (turns === 5) {
                    displayScore.textContent = `Your Score: ${wins}`;
                }
            } else {
                console.error('Could not find the parent question for this click!');
            }
        }
    });
});
