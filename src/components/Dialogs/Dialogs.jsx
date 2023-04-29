import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/MessageItem";
import React from "react";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = ({ dialogsPage, messagePostAction }) => {
 let dialogsElements = dialogsPage.dialogsData.map((dialog) => (
  <DialogItem
   icon={dialog.img}
   name={dialog.name}
   id={dialog.id}
   key={dialog.id}
  />));
 let messageElements = dialogsPage.messagesData.map((data) => (
  <Message message={data.message} id={data.id} img={data.img} key={data.id} />));

 //==================================================================
 let addNewMessage = (values) => {
  messagePostAction(values.newMessageBody);
 };

 return (

  <div className={s.dialogs}>
   <div className={s.dialogs__items}>
    <div className={s.dialog}>{dialogsElements}</div>
   </div>

   <div className={s.messages}>
    {messageElements}
    <AddMessageForm onSubmit={addNewMessage} />
   </div>
  </div>
 );
};

export default Dialogs;
