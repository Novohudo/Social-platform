import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../../utilites/validators";
import { Input} from "../../../common/FormsControls/FormsControls";
import s from "../MyPosts.module.css";

const maxLength10 = maxLengthCreator(15);
const AddNewPostForm = ({ handleSubmit }) => {
 return (
  <form onSubmit={handleSubmit}>
   <Field
    component={Input}
    name="newPostText"
    placeholder="Enter your message"
    validate={[required, maxLength10]}
   />
   <button className={s.sendButton}>Send</button>
  </form>
 );
};
export const AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(AddNewPostForm);