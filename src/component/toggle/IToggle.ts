export default interface IToggleProps {
  id: string;
  delay?: number;
  onClick?: () => void;
}

export interface IToggleState {
  checked: boolean;
  delayChecked: boolean;
}
