const name = `useToggle`;

const implementation= `const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);
  const toggler = useCallback(() => setValue(value => !value));
  return [value, toggler];
};`;

const usage = `function Demo() {
  const [currentValue, toggleAway] = useToggle(true);
  return <div onClick={toggleAway}>{currentValue ? "🍎" : "🍏"}</div>;
}`;

const url = `https://github.com/kalcifer/react-powerhooks`;

export default {
  name,
  implementation,
  usage,
  url,
}