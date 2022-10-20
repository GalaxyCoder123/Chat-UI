import { Component } from "react";
import { ChatViewMode } from "./chat-enums";


interface IMessengerProps {
    name: string;
    switcher: (screen: ChatViewMode, name?: string) => void;
};
interface IMessengerState {
    messageList: string[];
    newMessage: string;
};
export class Messenger extends Component<IMessengerProps, IMessengerState, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            messageList: ["hi", "Hello"],
            newMessage: ''
        };
    };

    componentDidMount() {

    };

    componentWillUnmount() {

    };

    async sendMessage() {
        let messageArray = [...this.state.messageList, this.state.newMessage];
        this.setState({ messageList: messageArray })
  
    };

    setNewMessage(message: any) {
        this.setState({ newMessage: message.target.value })
    }

    inputKeyPressed(key: any) {
        if (key.code === "Enter") {
            this.sendMessage();
        };
    };

    render() {
        return (
            <>
                <div className="chat-header">
                    <button onClick={() => {
                        this.props.switcher(ChatViewMode.Context)
                    }} type="button" className="btn btn-outline-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>

                    </button>
                    <h1>
                        {this.props.name}
                    </h1>
                </div>
                <div className="chat-history">
                    {
                        this.state.messageList.map((message, index) => {
                            return (
                                <div key={index} >
                                    {
                                        message
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="chat-input">
                    <input onKeyDown={
                        (keyEvent: any) => this.inputKeyPressed(keyEvent)
                    }
                        onChange={
                            (newMessageValue: any) => this.setNewMessage(newMessageValue)
                        } value={this.state.newMessage} placeholder="Type Here..." type="text" className="form-control"></input>
                    <button onClick={(event: any) => this.sendMessage()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg></button>
                </div>
            </>
        );
    }
}