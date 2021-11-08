type Props = {
  hidePopUp: () => void;
}

export const PopUpOverlay: React.FC<Props> = ({ hidePopUp }) => {
  return (
    <div
      className="PopUpOverlay"
      onClick={hidePopUp}
    >
    </div>
  )
}