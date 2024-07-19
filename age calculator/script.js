document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthdateInput = document.getElementById('birthdate').value;
    if (!birthdateInput) {
        alert("enter your date of birth");
        return;
    }
    const birthdate = new Date(birthdateInput);
    const now = new Date();

    if (birthdate > now) {
        alert("i do not have any time mission");
        return;
    }
    const diff = now - birthdate;

    const year = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const month = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const day = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mint = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((diff % (1000 * 60)) / (1000));

    document.getElementById('result').innerHTML = `<p>you have been living:</p>
        <ul
            <p><strong>${year}</strong> years
            <strong>${month}</strong> months
            <strong>${day}</strong> days
            <strong>${hour}</strong> hours
            <strong>${mint}</strong> minutes and
            <strong>${sec}</strong> seconds in this earth.
        </ul>
        `;


});