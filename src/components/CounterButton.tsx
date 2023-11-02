type Props = {
  text: string;
  count: number;
  onClick: () => void;
};

const CounterButton = ({ text, count, onClick }: Props) => {
  return (
    <>
      <button onClick={onClick}>
        {text} {count}
      </button>
    </>
  );
};

export default CounterButton;
