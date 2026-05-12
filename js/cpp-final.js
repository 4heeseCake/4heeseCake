document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.querySelector('#themeButton');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    function updateThemeButton() {
        if (!themeButton) {
            return;
        }

        if (document.body.classList.contains('dark-theme')) {
            themeButton.textContent = 'Светлая тема';
        } else {
            themeButton.textContent = 'Тёмная тема';
        }
    }

    updateThemeButton();

    if (themeButton) {
        themeButton.addEventListener('click', function () {
            document.body.classList.toggle('dark-theme');

            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }

            updateThemeButton();
        });
    }

    const timelineButtons = document.querySelectorAll('.timeline-button');

    timelineButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const targetId = button.dataset.target;
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const tabId = button.dataset.tab;

            tabButtons.forEach(function (item) {
                item.classList.remove('active');
            });

            tabContents.forEach(function (content) {
                content.classList.remove('active');
            });

            button.classList.add('active');

            const activeTab = document.getElementById(tabId);

            if (activeTab) {
                activeTab.classList.add('active');
            }
        });
    });

    const copyButtons = document.querySelectorAll('.copy-button');

    copyButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const codeBlock = button.parentElement.querySelector('code');

            if (!codeBlock) {
                return;
            }

            navigator.clipboard.writeText(codeBlock.textContent).then(function () {
                button.textContent = 'Скопировано';

                setTimeout(function () {
                    button.textContent = 'Скопировать код';
                }, 1500);
            });
        });
    });

    const accordionButton = document.querySelector('.accordion-button');
    const accordionContent = document.querySelector('.accordion-content');

    if (accordionButton && accordionContent) {
        accordionButton.addEventListener('click', function () {
            accordionContent.classList.toggle('open');

            if (accordionContent.classList.contains('open')) {
                accordionButton.textContent = 'Скрыть объяснение';
            } else {
                accordionButton.textContent = 'Показать короткое объяснение';
            }
        });
    }
});
