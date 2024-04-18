type SpeedRadioProps = {
  value: number;
  checked?: boolean;
};

const SpeedRadio = ({ value, checked = false }: SpeedRadioProps) => {
  return (
    <div className="flex gap-1">
      <input
        defaultChecked={checked}
        id={String(value)}
        type="radio"
        name="speed"
        value={value}
      />
      <label htmlFor={String(value)}>{`${value} X`}</label>
    </div>
  );
};

export default SpeedRadio;
