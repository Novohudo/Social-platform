import s from "./profile_info.module.css";
import React from "react";

class ProfileStatus extends React.Component {
 //локальный стейт
 state = {
  editMode: false,
  status: this.props.status
 };
 //обновление изменненого свойства
 activateEditMode = () => {
  this.setState({
   editMode: true
  });
 };
 deactivateEditMode = () => {
  this.setState({
   editMode: false
  });
  this.props.updateStatus(this.state.status);
 };
 onStatusChange = (e) => {
  this.setState({
   status: e.currentTarget.value
  });
 };

 componentDidUpdate(prevProps, prevState) {
  if (prevProps.status !== this.props.status) {
   this.setState({
    status: this.props.status
   });
  }
 }

 render() {

  return (
   <div className={s.statusBlock}>
    {!this.state.editMode && (
     <div>
      <span onClick={this.activateEditMode}>{this.props.status || "-------"}</span>
     </div>
    )}
    {this.state.editMode && (
     <div>
      <input
       onChange={this.onStatusChange}
       autoFocus={true}
       onBlur={this.deactivateEditMode}
       value={this.state.status}
      />
     </div>
    )}
   </div>
  );
 }
}

export default ProfileStatus;
