document.addEventListener('DOMContentLoaded', () => {
    console.log('Page confirmation chargé avec succès');
    const vote = sessionStorage.getItem('choiceUser');
    const voteSpan = document.getElementById('vote');
    voteSpan.innerHTML = 'You selected  '+ vote + ' out of 5';
    sessionStorage.removeItem('choiceUser');
})