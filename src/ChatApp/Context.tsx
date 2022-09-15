import { Component } from "react";
import { ChatViewMode } from "./chat-enums";
interface IContextProps {
    switcher: (screen: ChatViewMode, name?: string) => void;
}
interface IContextState {
    memberList: { name: string }[]
}
export class Context extends Component<IContextProps, IContextState, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            memberList: [{ name: "Bob" }, { name: "Charlotte" }, { name: "Fred" }, { name: "William" }, { name: "Annabelle" }]
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    renderMemberList() {
        return this.state.memberList.map(ele => {
            return (
                <div key={ele.name} >
                    <div className=" text-danger text-start list-item">
                        {
                            <b>
                                {ele.name}
                            </b>
                        }
                        <button onClick={() => {
                            this.props.switcher(ChatViewMode.Messenger, ele.name)
                        }} type="button" className="btn btn-outline-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-plus" viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7Zm-2.54 1.183L5.93 9.363 1.591 6.602l11.833-4.733Z"></path>
                                <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"></path>
                            </svg>
                            Send
                        </button>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className="container-fluid">
                    {
                        this.renderMemberList()
                    }
                </div>
            </>
        );
    }
}