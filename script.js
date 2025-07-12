document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const verificationStatus = urlParams.get('status'); // e.g., ?status=failed
    const errorMessage = urlParams.get('message');    // e.g., ?message=expired

    const statusMessageDiv = document.getElementById('status-message');

    if (verificationStatus === 'failed') {
        statusMessageDiv.innerHTML = `
            <img src="warning.png" alt="Warning Icon" class="icon">
            <h2 style="color: #dc3545;">Verification Failed</h2>
            <p>${errorMessage || 'This verification link has expired. Please generate a new one from the app.'}</p>
        `;
        statusMessageDiv.classList.add('failed-message');
    } else if (verificationStatus === 'success') {
        statusMessageDiv.innerHTML = `
            <img src="success.png" alt="Success Icon" class="icon"> <h2 style="color: #28a745;">Verification Successful!</h2>
            <p>Your account has been successfully verified. You can now close this page.</p>
        `;
    } else {
        // Default or initial state
        statusMessageDiv.innerHTML = `
            <img src="info.png" alt="Info Icon" class="icon"> <h2>Verifying...</h2>
            <p>Please wait while we process your request.</p>
        `;
    }
});