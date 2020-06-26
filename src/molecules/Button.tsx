import React, {useState} from 'react';
import styled from 'styled-components/native';
import variants, { ButtonVariants } from './variants';

interface IProps {
  /** set aria-label on button if it is a button without text in it (e.g. payment buttons) */
  ariaLabel?: string;
  /** Allows for overwriting styles as needed and will be passed to the button style prop. */
  buttonStyle?: React.CSSProperties;
  /** An optional boolean indicating whether the button should be disabled. When the button is disabled
   * the button color will appear to be concealed.
   */
  disabled?: boolean;
  /**
   * An optional loading icon that can appear to the left of the button content if desired during loading state.
   */
  /** A callback that will be invoked when the button is clicked. */
  onClick: any;
  /** Determines the kind of button from three main color behavior schemes.  Defaults to primary. */
  variant?: ButtonVariants;
}

interface IButton {
  buttonStyle?: React.CSSProperties;
  variant: ButtonVariants;
  concealed?: boolean;
  hovered?: boolean;
}

const StyledButton = styled.TouchableOpacity.attrs((props: IButton) => ({
  style: {
    ...props.buttonStyle,
  },
}))<IButton>`
  /* button overwrites */
  height: 56px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 24px;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) =>  props.hovered ?  variants[props.variant].background.default : 'pink'};
  color: ${(props) => variants[props.variant].color };
  border: ${(props) => variants[props.variant].border.default};
  opacity: ${(props) => props.hovered ? 0.2 : 1};
`;

const StyledContent = styled.View`
  display: flex;
`;



/**
 * Button is a wrapper around an HTML `<button>` that is intended to be used in a controlled component
 * context. Therefore, it is of type button and all form related attributes are omitted.
 */
const Button: React.FC<IProps> & { Variants: typeof ButtonVariants } = ({
  ariaLabel,
  buttonStyle,
  children,
  disabled,
  onClick,
  variant = ButtonVariants.Primary,
}) => {
  const [hovered, setHover] = useState(false);
  return (
    <StyledButton
      aria-label={ariaLabel}
      buttonStyle={buttonStyle}
      variant={variant}
      disabled={disabled}
      concealed={disabled}
      onPress={onClick}
      accessibilityLabel="testbutton"
      accessibilityRole="button"
      hovered={hovered}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <StyledContent>
        {children}
      </StyledContent>
    </StyledButton>
  );
};

Button.Variants = ButtonVariants;

export default Button;
