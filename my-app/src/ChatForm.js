import React from 'react';

function ChatForm(props) {
    return (
        <form onSubmit={props.handleSubmit} className="border-t-2 border-gray-700 p-6 flex justify-between">
            <input type="text" value={props.input} onChange={props.handleInput} className="chat-input flex-grow mr-2 py-2 px-4 rounded-lg border-2 border-gray-700 focus:outline-none focus:border-blue-500 transition duration-150 bg-gray-700 text-gray-200" />
            <button type="submit" className="chat-submit bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-lg transition duration-150">Ask</button>
        </form>
    );
}

export default ChatForm;