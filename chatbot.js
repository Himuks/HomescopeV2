const GEMINI_API_KEY = 'demo';
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
        
        // Existing responses
        if (lowerMessage.includes('teri mkc')) {
            return "lauda lele mera";
        }
        
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

        // New responses for different locations and BHK types
        if (lowerMessage.includes('2bhk') && lowerMessage.includes('ganj')) {
            return `Option 1:<br>
Rent: ₹12,000/month<br>
Size: 900 sq. ft.<br>
Floor: Ground<br>
Area Type: Super<br>
Furnished: Yes<br>
Tenant Preference: Family<br>
Phone: +919876543210<br><br>

Option 2:<br>
Rent: ₹11,500/month<br>
Size: 950 sq. ft.<br>
Floor: 1-1 of 2<br>
Area Type: Moderate<br>
Furnished: No<br>
Tenant Preference: Family<br>
Phone: +916154678093`;
        }

        if (lowerMessage.includes('3bhk') && lowerMessage.includes('cresent')) {
            return `Option 1:<br>
Rent: ₹22,000/month<br>
Size: 2000 sq. ft.<br>
Floor: 1-1 of 3<br>
Area Type: Good<br>
Furnished: Yes<br>
Tenant Preference: Both<br>
Phone: +917598012437<br><br>

Option 2:<br>
Rent: ₹24,000/month<br>
Size: 2200 sq. ft.<br>
Floor: 1-1 of 3<br>
Area Type: Super<br>
Furnished: Yes<br>
Tenant Preference: Family<br>
Phone: +913043567982`;
        }

        if (lowerMessage.includes('price') || lowerMessage.includes('rent')) {
            return `Our properties range from:<br>
• 1 BHK: ₹7,000 - ₹10,000/month<br>
• 2 BHK: ₹10,000 - ₹15,000/month<br>
• 3 BHK: ₹15,000 - ₹26,000/month<br><br>
Please specify the BHK type and location you're interested in for detailed options.`;
        }

        if (lowerMessage.includes('help') || lowerMessage.includes('hi') || lowerMessage.includes('hello')) {
            return `I can help you find properties! Try asking me about:<br>
• Specific BHK types (1BHK, 2BHK, 3BHK)<br>
• Locations (Railway Station, Ganj, Cresent, etc.)<br>
• Price ranges<br>
For example, try "Show me 2BHK in Ganj" or "What are the price ranges?"`;
        }

        return "Sorry, we couldn't find what you were looking for. Please try asking about specific BHK types and locations, or ask about price ranges.";
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
