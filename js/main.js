document.addEventListener('DOMContentLoaded', () => {
    console.log('page chargé :) ');

    const choice1Button = document.getElementById('choice1');
    const choice2Button = document.getElementById('choice2');
    const choice3Button = document.getElementById('choice3');
    const choice4Button = document.getElementById('choice4');
    const choice5Button = document.getElementById('choice5');

    choice1Button.addEventListener('click', () => {
        console.log('user choose 1');
        sessionStorage.setItem('choiceUser', 1);
        // Désactiver tous les boutons
        choice1Button.className = ' ';
        choice2Button.className = ' ';
        choice3Button.className = ' ';
        choice4Button.className = ' ';
        choice5Button.className = ' ';
        choice1Button.className = 'active';
    })

    choice2Button.addEventListener('click', () => {
        console.log('user choose 2');

        sessionStorage.setItem('choiceUser', 2);
        // Désactiver tous les boutons
        choice1Button.className = ' ';
        choice2Button.className = ' ';
        choice3Button.className = ' ';
        choice4Button.className = ' ';
        choice5Button.className = ' ';
        choice2Button.className = 'active';
    })

    choice3Button.addEventListener('click', () => {
            console.log('user choice 3');
            sessionStorage.setItem('choiceUser', 3);
            // Désactiver tous les boutons
            choice1Button.className = ' ';
            choice2Button.className = ' ';
            choice3Button.className = ' ';
            choice4Button.className = ' ';
            choice5Button.className = ' ';
            choice3Button.className = 'active';
        }
    )


    choice4Button.addEventListener('click', () => {
            console.log('user choice 4');
            sessionStorage.setItem('choiceUser', 4);
            // Désactiver tous les boutons
            choice1Button.className = ' ';
            choice2Button.className = ' ';
            choice3Button.className = ' ';
            choice4Button.className = ' ';
            choice5Button.className = ' ';
            choice4Button.className = 'active';
        }
    )

    choice5Button.addEventListener('click', () => {
            console.log('user choice 5');
            sessionStorage.setItem('choiceUser', 5);
            // Désactiver tous les boutons
            choice1Button.className = ' ';
            choice2Button.className = ' ';
            choice3Button.className = ' ';
            choice4Button.className = ' ';
            choice5Button.className = ' ';
            choice5Button.className = 'active';
        }
    )

    const submitChoice = document.getElementById('submitChoice');
    submitChoice.addEventListener('click', () => {
        console.log("user submit choice");
        if (sessionStorage.getItem('choiceUser') != null) {
            window.location.pathname = '/dev/interactive-rating-component-main/index1.html';
        }

    })
})
