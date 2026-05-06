export type IToggleProps = {
  isChecked: boolean;
  onToggle: (checked: boolean) => void;
};

export function Toggle(props: IToggleProps) {
  const { isChecked, onToggle } = props;

  return (
    <button onClick={() => onToggle(!isChecked)} className='bg-main/38 h-6 w-10 rounded-full' />
  );
}
