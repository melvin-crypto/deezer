// JavaScript pour afficher/masquer le mot de passe en clair lorsque l'icône est cliquée
document.addEventListener('DOMContentLoaded', function() {
    function togglePasswordVisibility(targetInputId, eyeIconId) {
        const targetInput = document.querySelector(`#${targetInputId}`);
        const eyeIcon = document.querySelector(`#${eyeIconId}`);

        if (targetInput.type === 'password') {
            targetInput.type = 'text';
            eyeIcon.src = '../src/assets/oeilOuvert.png';
        } else {
            targetInput.type = 'password';
            eyeIcon.src = '../src/assets/oeilFerme.png';
        }
    }

    const passwordToggles = document.querySelectorAll('.password-toggle');

    passwordToggles.forEach((toggle) => {
        toggle.addEventListener('click', function() {
            const targetInputId = this.dataset.target;
            const eyeIconId = this.querySelector('img').id;
            togglePasswordVisibility(targetInputId, eyeIconId);
        });
    });
});
