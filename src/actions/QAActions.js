import { CHAT_SEND, CHAT_RECIEVED, SEND_CLASSID, SEND_REPLY, UPDATE_CHAT } from './types'

//firebase
export const sendMessage = ({ id, classId, userName, message, userRole }) => {
     return {
        type: CHAT_SEND,
        payload: { id, classId, userName, message, userRole}
     }
}

export const sendClassIdentifier = classId => {
     return {
        type: SEND_CLASSID,
        payload: classId
     }
}

export const update_chat_room = data => {
     return {
        type: CHAT_RECIEVED,
        payload: data
    }
}

export const sendReply = ({ chatId, classId, userName, message, userRole }) => {
     return {
        type: SEND_REPLY,
        payload: { chatId, classId, userName, message, userRole}
     }
}

export const update_reply_message = data => {
    return {
        type: UPDATE_CHAT,
        payload: data
    }
}