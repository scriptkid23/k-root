import { handleActions, createActions } from 'redux-actions';
import {COMPONENT} from '../../constants/paths'
export const actions = createActions({
  
    "GET_LIST_FRIEND": {
        "REQUESTED" : [meta => meta, payload => payload],
        "SUCCEEDED" : [meta => meta, payload => payload],
        "FAILED":     [meta => meta, payload => payload]
    },
    "GET_MESSAGE_LOG":{
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED":[meta => meta, payload => payload],
        "FAILED":[meta => meta, payload => payload],
    },
    "SEND_MESSAGE":{
        "REQUESTED" : [meta => meta, payload => payload],
        "SUCCEEDED" : [meta => meta, payload => payload],
        "FAILED":     [meta => meta, payload => payload]
    },
    "GET_USER_DETAIL": {
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED": [meta => meta, payload => payload],
        "FAILED": [meta => meta, payload => payload]
    },
    "JOIN_ROOM":[meta => meta, payload => payload],
    
    

});
const defaultState = {
    "user_detail": {},
  "list_friend":[],
  "message_log":{
      "messages":[],
  },
  "get_user_detail": false,
   
}
const reducers = handleActions({
   
    [actions.getUserDetail.requested] : (state,action) => {
        return({
            ...state,
            loading : true,
            
        })
    },
    [actions.getUserDetail.succeeded] : (state,action) => {
        return({
            ...state,
            loading : false,
            user_detail : action.payload.data,
            status_code: action.payload.status,
            token_message:action.payload.tokenMessage.data,
            "get_user_detail": true,

        })

    },
    [actions.getUserDetail.failed] : (state,action) => {
        return({
            ...state,
            loading : false,
            message : "Get user detail failed",
            variant : "danger",
            status_code: action.payload.status,
            "get_user_detail": false,
        })
    },
        [actions.sendMessage.requested] : (state,actions) => {
            return{
                ...state,   
            }
        },
        [actions.sendMessage.succeeded] : (state,actions) => {
           
            return{
                ...state,
              
            }
        },
        [actions.sendMessage.failed] : (state,actions) => {
            return{
                ...state,
            }
        },

        [actions.getListFriend.requested]: (state,actions) => {
            return{
                ...state,
                loading:true,
            }
        },
        [actions.getListFriend.succeeded]: (state,actions) => {
            return{
                ...state,
                loading:false,
                list_friend: actions.payload.data,
           
            }
        },
        [actions.getListFriend.failed]: (state,actions) => {
            return{
                ...state,
                loading:false,
                list_friend: [],
            }
        },
        // 
        [actions.getMessageLog.requested]: (state,actions) => {
            return{
                ...state,
                loading:true,
            }
        },
        [actions.getMessageLog.succeeded]: (state,actions) => {
            return{
                ...state,
                loading:false,
                message_log:actions.payload.data,
           
            }
        },
        [actions.getMessageLog.failed]: (state,actions) => {
            return{
                ...state,
                loading:false,
                list_friend: [],
                message_log:[]
                        }
        },

},
    defaultState
)
export default reducers;