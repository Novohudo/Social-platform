import { Field, reduxForm } from "redux-form";
import { TextArea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utilites/validators";
import s from "../Dialogs.module.css"

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = ({ handleSubmit }) => {
 return (
  <form onSubmit={handleSubmit}>
   <div>
    <Field
     component={TextArea}
     validate={[required, maxLength50]}
     name="newMessageBody"
     placeholder="Enter your message"
    />
    <div />
    <div>
     <button className={s.dialogsButton}>Post</button>
    </div>
   </div>
  </form>
 );
};
export default reduxForm({ form: "dialogAddMessageForm" })(
 AddMessageForm
);
