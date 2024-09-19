import { BottunContainer } from './styles';

const Button = ({label, onClick}) => {
    return (
      <BottunContainer onClick={onClick} type="button">
       {label}
      </BottunContainer>
    );
  }
  
  export default Button;