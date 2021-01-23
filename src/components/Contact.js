import './chat-app.css'

const online = true; 

function Contact (props){
    return (
<div className='Contact'>
<img className='avatar' src={props.avatar}/>
    <div className='right'>
    <p className='name'>{props.name}</p>
        <div className='status'>
            <p className='status-text'>
            {props.online ? <span className='status-online'></span> : <span className='status-offline'></span>}
            </p>
            <p className='status-text'>{props.online ? "Online" : "Offline"}</p>
        </div>
    </div>
</div>
    );
}

export default Contact; 

{/* <div className='Contact'>
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
</div> */}