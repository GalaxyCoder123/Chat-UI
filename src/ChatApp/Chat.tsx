import { Component } from "react";
import { Context } from "./Context";
interface IChatProps {

}
interface IChatState {
    
}

export class ChatComponent extends Component<IChatProps, IChatState, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <Context/>
            </div>
        );
    }
}