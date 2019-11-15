import * as firebase from 'firebase';
import { CHAT_SEND, CHAT_RECIEVE, SEND_CLASSID, SEND_REPLY } from '../actions/types'
import { update_chat_room } from '../actions';
import { put, take, call, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

 const firebaseConfig = {
    apiKey: "AIzaSyB8iB__OaCLVyjBaRpPP8hwaFUfmNClmH8",
    authDomain: "learnacademy-5a51b.firebaseapp.com",
    databaseURL: "https://learnacademy-5a51b.firebaseio.com",
    projectId: "learnacademy-5a51b", 
    storageBucket: "learnacademy-5a51b.appspot.com",
    messagingSenderId: "471817096061",
    appId: "1:471817096061:web:d9e8b17d6155d049cb9a14",
    measurementId: "G-8WSQPRK5LE"
  };

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function sendChat(data) {
    database.ref(`/QesandAns/${data.classId}`)
            .push({ userName: data.userName, message: data.message, userRole: data.userRole, id: data.id, replies: [] })
}
    
function replyChat (data){
    console.log(data)

    database.ref(`/QesandAns/${data.classId}/${data.chatId}/replies`)
            .push({ userName: data.userName, message: data.message, userRole: data.userRole })
}

function createEventChannel(id) {
    const listener = eventChannel(
        emit => {
            database.ref(`/QesandAns/${id}`)
                .on(
                'child_added',
                data => emit(data)
                );
            return () => database.ref(`/QesandAns/${id}`).off(listener);
        }
    );

    return listener;
};

function* updatedMessageSaga() {
    const action = yield take(SEND_CLASSID)    
    const updateChannel = createEventChannel(action.payload);
    while (true) {
        const message = yield take(updateChannel);
        yield put(update_chat_room(message));
    }
}

function* SendMessageSaga() {
    while (true) {
        const action = yield take(CHAT_SEND);
        try {
            yield call(sendChat, action.payload);
        } catch (err) {
            console.log(err)
        }
    }
}

function* ReplyMessageSaga() {
    while (true) {
        const action = yield take(SEND_REPLY);
        try {
            yield call(replyChat, action.payload);
        } catch (err) {
            console.log(err)
        }
    }
}

export default function* rootSaga() {
    yield fork(SendMessageSaga);
    yield fork(ReplyMessageSaga);    
    yield fork(updatedMessageSaga);
}
