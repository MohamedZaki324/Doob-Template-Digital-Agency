let emailInput = document.getElementById('email-input'),
    subjectInput = document.getElementById('subject-input'),
    textArea = document.getElementById('message-input'),
    contactBtn = document.querySelector('button'),
    scrollToTopBtn = document.querySelector('.scrollToTop');
    
emailInput.onfocus = () => emailInput.placeholder = '';
emailInput.onblur = () => emailInput.placeholder = 'Your email';   
subjectInput.onfocus = () => subjectInput.placeholder = '';
subjectInput.onblur = () => subjectInput.placeholder = 'subject';

textArea.onfocus = function(){
    this.textContent = '';
};

textArea.onblur = function(){
    this.textContent = 'Message here...';
};

contactBtn.onclick = () => window.scrollTo(100, 10000);


document.body.onscroll = _ =>
{
    if (window.scrollY > 500) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.onclick = _=>window.scrollTo(0,0);


// INITIALIZE AOS

 AOS.init({
     duration: 700,
 });

