import './chat-app.css'
import React from "react"

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            online:false,
        }
    }
    render(){
        return (
    <div className='Contact'>
    <img className='avatar' src={this.props.avatar}/>
        <div className='right'>
        <p className='name'>{this.props.name}</p>
            <div className='status' >
            <p className='status-text' onClick={event => {
                const newOnline = !this.state.online;
                this.setState({ online: newOnline });
            }} >
             <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
             <div className='status-text'> {this.state.online ? 'Online' : 'Offline'} </div>
                </p>
            </div>
        </div>
    </div>
        );
    }
}

// function Contact (props){
//     return (
// <div className='Contact'>
// <img className='avatar' src={props.avatar}/>
//     <div className='right'>
//     <p className='name'>{props.name}</p>
//         <div className='status'>
//             <p className='status-text'>
//             {props.online ? <span className='status-online'></span> : <span className='status-offline'></span>}
//             </p>
//             <p className='status-text'>{props.online ? "Online" : "Offline"}</p>
//         </div>
//     </div>
// </div>
//     );
// }

export default Contact; 

/* <div className='Contact'>
<img className='avatar' src='https://randomuser.me/api/portraits/men/57.jpg'/>
    <div className='right'>
        <p className='name'>Todd Sims</p>
        <div className='status'>
            <p className='status-text'>
                {online ? <span className='status-online'></span> : <span className='status-offline'></span>}
            </p>
            <p className='status-text'>{online ? "Online" : "Offline"}</p>
        </div>
    </div>
</div> */