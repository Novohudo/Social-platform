import s from "./profile_info.module.css";
import alex from "../../../img/alex.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const profile_info = ({ status, updateStatus }) => {


 return (

  <div className={s.profileWrap}>

   <div className={s.logo}>
    <img src={alex} alt="ups" />
    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
   </div>

   <div className={s.userInfo}>
    <p>
     Alex Umrikhin<br></br>
     Date of birth: 22.05.1991.<br></br>
     City:Kiev.<br></br>
     Education:Farmer-alcoholic.<br></br>
     Web-site:<a href="https://portfolio-qetd4qzu2-novohudo.vercel.app/">Link</a>
    </p>
   </div>
   <div className={s.quote}>
    "..Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel et
    beatae nemo qui amet illo enim harum eum eius dolore exercitationem,
    fugit officia nesciunt nobis magni quis perferendis doloremque
    dolorum.."
   </div>

  </div>
 );
};

export default profile_info;
