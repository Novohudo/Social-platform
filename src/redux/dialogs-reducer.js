import img1 from "../img/dialogs/img1.jpg";
import img2 from "../img/dialogs/img2.jpg";
import img3 from "../img/dialogs/img3.jpg";
import img4 from "../img/dialogs/img4.jpg";
import img5 from "../img/dialogs/img5.jpg";

const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
 messagesData: [
  {
   id: 1,
   message:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."
  },
  { id: 2, message: "hello" },
  { id: 3, message: "ke ke ke" },
  { id: 4, message: "Americaa!" }
 ],
 dialogsData: [
  { img: img1, id: 1, name: "Anna" }, //переместить картинки сюда
  { img: img2, id: 2, name: "Mihail" },
  { img: img3, id: 3, name: "Daniil" },
  { img: img4, id: 4, name: "Boris" },
  { img: img5, id: 5, name: "Victor" }
 ]
};

const dialogsReducer = (state = initialState, action) => {
 switch (action.type) {
  case SEND_MESSAGE:
   let text = action.newMessageBody;
   return {
    ...state,
    messagesData: [...state.messagesData, { id: 6, message: text }]
   };
  default:
   return state;
 }
};
//action Dialogs=======================================================
export const messagePostActionCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
