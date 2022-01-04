export default interface IToggleProps {
  name: string;
  delay?: number;
  onClick?: () => void;
}

export interface IToggleState {
  checked: boolean;
  delayChecked: boolean;
}
