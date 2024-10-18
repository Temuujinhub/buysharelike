document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    const modal = document.getElementById('paymentModal');
    const closeModal = document.getElementById('closeModal');
    const totalAmount = document.getElementById('totalAmount');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Энд төлбөрийн дүнг тооцоолох логик бичнэ
            const amount = Math.floor(Math.random() * 10000) + 1000; // Жишээ дүн
            totalAmount.textContent = amount + '₮';
            modal.style.display = 'block';
        });
    });

    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
