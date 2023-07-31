import React from 'react';

function ChatWindow(props) {
    return (
        <div className="chat-window p-6 h-[60vh] overflow-y-auto">
            {props.messages.map((message, index) =>
                <div key={index} className={`my-2 p-2 rounded-lg ${message.fromBot ? "bg-gray-800 text-yellow-600" : "bg-yellow-600 text-gray-800"}`}>
                    <p>{message.message}</p>
                </div>
            )}
        </div>
    );
}

export default ChatWindow;