import s from "../../Nav.module.css";

const Friends = ({ image, name }) => {
 return (
  <div className={s.friendItem}>
   <img src={image} alt="ups" />
   {name}
  </div>
 );
};

export default Friends;
