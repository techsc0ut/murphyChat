import React from 'react';
import './index.css';
import ChatWindow from './ChatWindow';
import ChatForm from './ChatForm';
import Footer from './Footer';
import Logo from './Logo';
import firebase, { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

class ChatPage extends React.Component {
    state = {
        input: "",
        messages: []
    };

    handleInput = event => {
        this.setState({ input: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const message = { message: this.state.input };
        this.setState(prevState => ({ messages: [...prevState.messages, message], input: "" }));
        fetch("http://localhost:8000/chat/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(response => response.json())
            .then(data => this.setState(prevState => ({ messages: [...prevState.messages, { message: data.message, fromBot: true }] })));
    }

    signOut = () => {
        auth.signOut();
    }

    render() {
        const { input, messages } = this.state;

        return (
            <>
                <div className="App min-h-screen flex flex-col justify-between pt-6 w-full pr-8 pb-6" style={{ background: '#111', backgroundImage: `url(${process.env.PUBLIC_URL}/new4.jpg)`, backgroundPosition: 'left', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: "relative" }}>
                    <Logo />
                    <button onClick={this.signOut} style={{ position: "absolute", bottom: "20px", left: "20px" }} className="sign-out bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-lg transition duration-150 mb-11 flex justify-center items-center">Sign Out</button>

                    <div className="flex flex-col justify-center items-end">
                        <header className="App-header w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 bg-gray-800 text-gray-200 rounded-lg shadow-2xl overflow-hidden mt-11">
                            <h1 className="text-2xl pt-6 p-6 text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                <span className="rounded-lg bg-gray-800 text-white px-12 py-3">Ask me anything peaky !!</span>
                            </h1>





                            <ChatWindow messages={messages} />
                            <ChatForm input={input} handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
                        </header>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default ChatPage;
