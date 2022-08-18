import { Component } from "react";
interface IChatProps {
}
interface IChatState {
    
}

export class Chat extends Component<IChatProps, IChatState, any> {
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
                HELLO WORLD
            </div>
        );
    }
}