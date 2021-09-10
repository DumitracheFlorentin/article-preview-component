const shareBtn = document.querySelector('.share__photo');
const shareBar = document.querySelector('.share__container');
const shareTriangle = document.querySelector('.share__triangle');

shareBtn.addEventListener('click', () => {
    if(shareBar.classList.contains('active')){
        shareBar.style.display = 'none';
        shareBtn.style.color = 'var(--v-dark-grayish-blue)';
        shareBtn.style.backgroundColor = 'var(--l-grayish-blue)';
        shareBar.classList.remove('active');
        shareTriangle.style.display = 'none';
    } else {
        shareBar.style.display = 'flex';
        shareBtn.style.color = 'white';
        shareBtn.style.backgroundColor = 'var(--v-dark-grayish-blue)';
        shareBar.classList.add('active');
        shareTriangle.style.display = 'block';
    }
})

