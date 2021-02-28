export default interface INavbarProps {
  leftContent?: JSX.Element;
  rightContent?: JSX.Element;
  opacify?: boolean;
}

export interface INavbarState {
  transform: boolean;
}
