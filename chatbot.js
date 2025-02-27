const GEMINI_API_KEY = 'AIzaSyC2uech1aUixZNYQG8dc8jVp-Goy7Cqhf0';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Add initial bot message
    addMessage('bot', 'Hi! I\'m your housing assistant. How can I help you today?');

    // Send message on button click
    sendButton.addEventListener('click', sendMessage);

    // Send message on Enter key
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        // Disable input and button while processing
        userInput.disabled = true;
        sendButton.disabled = true;

        // Add user message to chat
        addMessage('user', message);
        userInput.value = '';

        // Generate bot response
        const response = getBotResponse(message);
        addMessage('bot', response);

        // Re-enable input and button
        userInput.disabled = false;
        sendButton.disabled = false;
        userInput.focus();
    }

    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('1bhk') && lowerMessage.includes('railway station')) {
            return `Option 1:<br>
Rent: ₹8,000/month<br>
Size: 550 sq. ft.<br>
Floor: Ground<br>
Area Type: Normal<br>
Furnished: Yes<br>
Tenant Preference: Bachelor<br>
Phone: +917567890123<br><br>

Option 2:<br>
Rent: ₹7,500/month<br>
Size: 650 sq. ft.<br>
Floor: Ground<br>
Area Type: Normal<br>
Furnished: Yes<br>
Tenant Preference: Bachelor<br>
Phone: +911932456871<br><br>

Option 3:<br>
Rent: ₹8,000/month<br>
Size: 650 sq. ft.<br>
Floor: Ground<br>
Area Type: Normal<br>
Furnished: No<br>
Tenant Preference: Bachelor<br>
Phone: +917376890215`;
        }

        return "Sorry, we couldn't find what you were looking for. We're currently working on improving our website to enhance your experience. Thank you for your patience!";
    }

    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return messageDiv;
    }
});