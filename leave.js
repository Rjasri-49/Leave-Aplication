function validateForm() {
    const name = document.getElementById('name').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const reason = document.getElementById('reason').value;

    // Basic validation
    if (name === "" || rollNumber === "" || startDate === "" || endDate === "" || reason === "") {
        alert("Please fill in all the fields.");
        return false;
    }

    // Date validation
    if (new Date(startDate) > new Date(endDate)) {
        alert("End date should be after start date.");
        return false;
    }

    alert("Leave application submitted successfully!");
    return true;
}