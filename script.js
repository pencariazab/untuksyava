document.addEventListener('DOMContentLoaded', function() {
    // Initialize the dialog component
    const dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'));

    // When the button is clicked, show the dialog
    document.getElementById('myButton').addEventListener('click', () => {
        dialog.open();
    });

    // When the OK button inside the dialog is clicked, close the dialog and trigger balloon animation
    const okButton = document.querySelector('.mdc-dialog__button');
    okButton.addEventListener('click', () => {
        dialog.close();
        okButton.classList.add('balloon');
        setTimeout(() => {
            okButton.classList.remove('balloon');
        }, 600); // Ensure this matches the animation duration (0.6s = 600ms)
    });
});
