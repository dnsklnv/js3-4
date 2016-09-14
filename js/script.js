// alert('test alert');
var test = {
    // questions
    questions: [{
        question: 'Вопрос 1',
        answers: [{
            text: 'Ответ 1',
            status: true,
        }, {
            text: 'Ответ 2',
            status: false,
        }, {
            text: 'Ответ 3',
            status: false,
        }],
    }, {
        question: 'Вопрос 2',
        answers: [{
            text: 'Ответ 1',
            status: true,
        }, {
            text: 'Ответ 2',
            status: false,
        }, {
            text: 'Ответ 3',
            status: false,
        }],
    }, {
        question: 'Вопрос 3',
        answers: [{
            text: 'Ответ 1',
            status: true,
        }, {
            text: 'Ответ 2',
            status: false,
        }, {
            text: 'Ответ 3',
            status: false,
        }],
    }],
    // DOM
    makeDOM: function() {
        var wraper = document.createElement('div');
        wraper.classList.add('wraper');
        document.body.appendChild(wraper);

        var titel = document.createElement('h1');
        titel.innerHTML = 'Тест';
        wraper.appendChild(titel);

        for (var i = 0; i < this.questions.length; i++) {
            var question = document.createElement('h2');
            question.innerHTML = this.questions[i].question;
            wraper.appendChild(question);

            var ul = document.createElement('ul');
            wraper.appendChild(ul);

            for (var j = 0; j < this.questions[i].answers.length; j++) {

                var li = document.createElement('li');
                ul.appendChild(li);

                var label = document.createElement('label');
                li.appendChild(label);

                var input = document.createElement('input');
                input.setAttribute('type', 'radio');
                input.setAttribute('name', 'answers');

                var span = document.createElement('span');
                span.innerHTML = this.questions[i].answers[j].text;
                label.appendChild(input);
                label.appendChild(span);


            }
        }

        var submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'проверить');
        submit.classList.add('submit');
        wraper.appendChild(submit);
    }
}
test.makeDOM();
