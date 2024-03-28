document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var product = document.getElementById('Product').value;
        var rating = document.getElementById('rating').value;
        var feedback = document.getElementById('Feedback').value;

        if (name === '' || email === '' || product === '' || rating === '' || feedback === '') {
            alert('Please fill in all fields.');
            return;
        }

        alert('Thanks for your feedback!');
        form.reset();
    });
});