import { Component } from "react";
import { Context } from "./Context";
import { Messenger } from "./messenger";
import { ChatViewMode } from "./chat-enums";
import { stringify } from "querystring";

interface IChatProps {

}
interface IChatState {
    mode: ChatViewMode;
    name: string;
}

export class ChatComponent extends Component<IChatProps, IChatState, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            mode: ChatViewMode.Context,
            name: ""
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    veiwSelector() {
        switch (this.state.mode) {
            case ChatViewMode.Context :
               return (
                <Context switcher={
                    this.veiwSwitcher
                  }/>
               );
               break;
            case ChatViewMode.Messenger :
                return (
                 <Messenger name={this.state.name} switcher={
                    this.veiwSwitcher
                 }/>
                );
                break;
       
           default:
               break;
       }
    }

    veiwSwitcher(screen: ChatViewMode, name="") {
        this.setState({mode: screen, name: name})
    }

    render() {
        return (
            <div>
                {
                    this.veiwSelector()
                }
                <button>Test</button>
                <button onClick={() => {
                  this.veiwSwitcher(ChatViewMode.Context);
                }}>Test2</button>
            </div>
        );
    }
}