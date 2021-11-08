import classNames from 'classnames';

type Props = {
  text: string;
  clickHandler?: () => void;
  isWhite?: boolean;
  isSubmit?: boolean;
  isDisabled?: boolean;
  fixedWidth?: boolean;
}

export const Button: React.FC<Props> = ({
  clickHandler,
  text,
  isWhite,
  isSubmit,
  fixedWidth,
  isDisabled,
}) => {
  return (
    <button
      className={classNames(
        'Button',
        { 'Button--white': isWhite },
        { 'Button--fixed-width': fixedWidth },
      )}
      type={isSubmit ? 'submit' : 'button'}
      onClick={clickHandler}
      disabled={isDisabled}
    >
      {text}
    </button>
  )
}