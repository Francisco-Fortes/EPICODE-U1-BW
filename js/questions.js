let selectedQuestions = []

const questions = [
  {
    difficulty: 'easy',
    question: 'What does CPU stand for?',
    correct_answer: 'Central Processing Unit',
    incorrect_answers: [
      'Central Process Unit',
      'Computer Personal Unit',
      'Central Processor Unit',
    ],
  },
  {
    difficulty: 'medium',
    question:
      'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?',
    correct_answer: 'Final',
    incorrect_answers: ['Static', 'Private', 'Public'],
  },
  {
    difficulty: 'easy',
    question: 'The logo for Snapchat is a Bell.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    difficulty: 'easy',
    question:
      'Pointers were not used in the original C programming language; they were added later on in C++.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    difficulty: 'easy',
    question:
      'What is the most preferred image format used for logos in the Wikimedia database?',
    correct_answer: '.svg',
    incorrect_answers: ['.png', '.jpeg', '.gif'],
  },
  {
    difficulty: 'easy',
    question: 'In web design, what does CSS stand for?',
    correct_answer: 'Cascading Style Sheet',
    incorrect_answers: [
      'Counter Strike: Source',
      'Corrective Style Sheet',
      'Computer Style Sheet',
    ],
  },
  {
    difficulty: 'easy',
    question:
      'What is the code name for the mobile operating system Android 7.0?',
    correct_answer: 'Nougat',
    incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean', 'Marshmallow'],
  },
  {
    difficulty: 'easy',
    question: 'On Twitter, what is the character limit for a Tweet?',
    correct_answer: '140',
    incorrect_answers: ['120', '160', '100'],
  },
  {
    difficulty: 'easy',
    question: 'Linux was first created as an alternative to Windows XP.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    difficulty: 'easy',
    question:
      'Which programming language shares its name with an island in Indonesia?',
    correct_answer: 'Java',
    incorrect_answers: ['Python', 'C', 'Jakarta'],
  },
  {
    difficulty: 'hard',
    question: 'How can you make a numbered list?',
    correct_answer: '<ol>',
    incorrect_answers: ['<ul>', '<dl>', '<list>'],
  },
  {
    difficulty: 'hard',
    question: 'What is the correct HTML element for inserting a line break?',
    correct_answer: '<br>',
    incorrect_answers: ['<break>', '<lb>', '<linebreak>'],
  },
  {
    difficulty: 'hard',
    question: 'Choose the correct HTML element for the largest heading:',
    correct_answer: '<h1>',
    incorrect_answers: ['<head>', '<heading>', '<h6>'],
  },
  {
    difficulty: 'hard',
    question: 'Is JavaScript case-sensitive?',
    correct_answer: 'Yes',
    incorrect_answers: ['No'],
  },
  {
    difficulty: 'hard',
    question: 'Which operator is used to assign a value to a variable?',
    correct_answer: '=',
    incorrect_answers: ['-', '+', '*'],
  },
  {
    difficulty: 'hard',
    question: 'How do you declare a JavaScript variable?',
    correct_answer: 'let carName;',
    incorrect_answers: ['variable carName;', 'v CarName', 'globalVar carName'],
  },
  {
    difficulty: 'medium',
    question: 'Which event occurs when the user clicks on an HTML element?',
    correct_answer: 'onclick',
    incorrect_answers: ['onmouseover', 'onchange', 'onmouseclick'],
  },
  {
    difficulty: 'medium',
    question: 'Javascript is the same as Java',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    difficulty: 'medium',
    question: 'In which US state did the ​​Scopes Monkey Trial happen?',
    correct_answer: 'Tennessee',
    incorrect_answers: ['Indiana', 'South Dakota', 'Maryland'],
  },
  {
    difficulty: 'medium',
    question: 'How does a WHILE loop start?',
    correct_answer: 'while (i<=10)',
    incorrect_answers: [
      'while(i<=10; i++)',
      'while i = 1 to 10',
      'while i is not 10',
    ],
  },
  {
    difficulty: 'medium',
    question: 'How to write an IF statement in JavaScript?',
    correct_answer: 'if (i==5)',
    incorrect_answers: ['if i == 5 then', 'if i = 5 then', 'if i = 5'],
  },
  {
    difficulty: 'medium',
    question: 'How do you call a function named "myFunction"?',
    correct_answer: 'myFunction()',
    incorrect_answers: [
      'call myFunction()',
      'call function myFunction',
      'run myFunction()',
    ],
  },
  {
    difficulty: 'medium',
    question: 'How do you create a function in JavaScript?',
    correct_answer: 'function myFunction()',
    incorrect_answers: [
      'function:myFunction()',
      'function = myFunction()',
      'function.myFunction()',
    ],
  },
  {
    difficulty: 'medium',
    question: 'How do you write "Hello World" in an alert box?',
    correct_answer: 'alert("Hello world");',
    incorrect_answers: [
      'msg("Hello world");',
      'msgBox("Hello World");',
      'alertBox("Hello World")',
    ],
  },
  {
    difficulty: 'medium',
    question:
      'What is the correct syntax for referring to an external script called "xxx.js"?',
    correct_answer: '<script src="xxx.js">',
    incorrect_answers: [
      '<script href="xxx.js">',
      '<script name="xxx.js">',
      '<script file="xxx.js">',
    ],
  },
  {
    difficulty: 'medium',
    question: 'Inside which HTML element do we put the JavaScript?',
    correct_answer: '<Script>',
    incorrect_answers: ['<Js>', '<Javascript>', '<Scripting>'],
  },
]
