type TabButton = {
  children: string;
  isSelected: boolean;
  onClick: () => void;
};
export default function TabButton({
  children,
  isSelected,
  ...props
}: TabButton) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
