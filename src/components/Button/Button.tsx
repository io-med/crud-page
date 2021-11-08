import classNames from 'classnames';

type Props = {
  text: string;
  clickHandler?: () => void;
  isWhite?: boolean;
  isSubmit?: boolean;
}

export const Button: React.FC<Props> = ({ clickHandler, text, isWhite, isSubmit }) => {
  return (
    <button
      className={classNames('Button', {'Button--white': isWhite})}
      type={isSubmit ? 'submit' : 'button'}
      onClick={clickHandler}
    >
      {text}
    </button>
  )
}