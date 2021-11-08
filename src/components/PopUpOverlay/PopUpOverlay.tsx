import classNames from "classnames";
import { useEffect, useState } from "react"

type Props = {
  hidePopUp: () => void;
}

export const PopUpOverlay: React.FC<Props> = ({ hidePopUp }) => {
  const [isHidden, SetIsHidden] = useState(true);

  const changeVisibility = () => {
    SetIsHidden(current => !current);
  };

  useEffect(() => {
    setTimeout(changeVisibility, 0)
  }, []);

  return (
    <div
      className={classNames(
        'PopUpOverlay',
        {'PopUpOverlay--hidden': isHidden}
      )}
      onClick={hidePopUp}
    >
    </div>
  )
}