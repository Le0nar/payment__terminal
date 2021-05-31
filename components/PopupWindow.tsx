import {
  StyledOverlay,
  StyledPopupErrorWindow,
  StyledPopupContent,
  StyledPopupSuccesWindow,
} from "./../styles/PopupWindowStyles";

const PopupWindow = ({ isSuccessfulRequest }) => {
  return (
    <StyledOverlay>
      {isSuccessfulRequest ? (
        <StyledPopupSuccesWindow>
          <StyledPopupContent>Оплата прошла успешно</StyledPopupContent>
        </StyledPopupSuccesWindow>
      ) : (
        <StyledPopupErrorWindow>
          <StyledPopupContent>Пожалуйста, повторите попытку</StyledPopupContent>
        </StyledPopupErrorWindow>
      )}
    </StyledOverlay>
  );
};

export default PopupWindow;
