
    document.addEventListener('DOMContentLoaded', () => {
        //select paragraph from main.html
        const paragraphElement = document.getElementById('paragraph');
        
        const wordSearchInput = document.getElementById('wordsearch');
        const resultDiv = document.getElementById('result');
        //declare a variable to store the timeout id  for debouncing 
        let timeoutId;

        function fetchParagraph() {
            //fetch paragraph from paragraph.php
            fetch('paragraph.php')
                .then(response => response.text())
                .then(data => {
                    paragraphElement.textContent = data;
                })
                .catch(error => {
                    console.error('Error fetching paragraph:', error);
                    paragraphElement.textContent = 'Failed to fetch paragraph.';
                });
        }

        fetchParagraph();

        wordSearchInput.addEventListener('input', () => {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                // get the word entered by the user.
                const word = wordSearchInput.value;
                const paragraph = paragraphElement.textContent;
                // check if the input field is empty    
                if (word.trim() === '') {
                    resultDiv.textContent = '';
                    return;
                }

                const position = paragraph.toLowerCase().indexOf(word.toLowerCase());
                // Check if the word was found.
                if (position !== -1) {
                    resultDiv.textContent = `The word '${word}' was found at position ${position}.`;
                } else {
                    resultDiv.textContent = `The word '${word}' was not found.`;
                }
            }, 300); // 300ms debounce delay
        });
    });