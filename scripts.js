// JavaScript交互代码
document.addEventListener('DOMContentLoaded', () => {
    const programs = document.querySelectorAll('.program');

    programs.forEach(program => {
        program.addEventListener('click', () => {
            alert('更多关于' + program.querySelector('h3').innerText + '的信息请访问我们的学术页面！');
        });
    });
});
