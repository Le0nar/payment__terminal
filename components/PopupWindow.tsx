const PopupWindow = ({ isSuccessfulRequest }) => { 
   return (
     <div>
       <p>{isSuccessfulRequest ? "Успешно" : "Неудачно"}</p>
     </div>
   );
 };
 
 export default PopupWindow;