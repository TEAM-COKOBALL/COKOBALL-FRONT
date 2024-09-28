import { ReactComponent as Btn } from '../../assets/svg/plusbutton.svg';

function PlusBtn({ onClick }) {
  return <Btn onClick={onClick} />; // onClick 속성을 전달
}

export default PlusBtn;
