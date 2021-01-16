import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

class WebSocketService{
    stompClient = null;
    mySubscribe = null;
    createRoom(payload){

    }
    getLogMessage(payload){

    }
    connect(token_message,username){
        var socket = new SockJS("http://localhost:8000/ws");
        var that = this;
        this.stompClient = Stomp.over(socket);
        var StompClient = Stomp.over(socket);
        var headers = {
            Authorization: token_message,
            Username: username,
        }

        this.stompClient.connect(headers,() => {
            that.stompClient.subscribe("/topic/workspace",(message)=>{
                console.log(message)
            })  
            

            that.stompClient.send("/app/workspace",{},JSON.stringify({
                "Text":"hello"
            }))
        })


    }
    disconnect(){
        this.stompClient.disconnect();
    }
    sendMessage(payload){
        console.log(payload)
        this.stompClient.send("/app/chat", {},JSON.stringify(payload));
    }
    getStatusUser(payload){

    }
    getNotification(payload){

    }
    leaveRoom(channelId){
        this.mySubscribe.unsubscribe();
    }
    joinRoom({channelId,callback}){
        return this.mySubscribe = this.stompClient.subscribe(
            "/topic/"+channelId+"/queue/messages",
            (message) => {
                    console.log(JSON.parse(message.body))
                    callback(JSON.parse(message.body))
            }
        )
    }

}
export default new WebSocketService();