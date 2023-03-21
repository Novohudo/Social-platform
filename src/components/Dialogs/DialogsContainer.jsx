import Dialogs from "./Dialogs";
import { messagePostActionCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
 return {
  dialogsPage: state.dialogsPage,
  newMessageBody: state.dialogsPage.newMessageBody
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  messagePostAction: (newMessageBody) => {
   dispatch(messagePostActionCreator(newMessageBody));
  }
 };
};

//?====================== HOC и функция Compose =============================
//?........................................................
export default compose(
 connect(mapStateToProps, mapDispatchToProps),
 withAuthRedirect
)(Dialogs);

//?=======================================================
