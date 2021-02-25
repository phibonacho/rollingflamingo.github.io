import INavbarProps , { INavbarState } from "./INavbar";
import * as React from "react";
import './navbar.scss';
import ThemeContext from "../theme/ThemeContext";

export default class Navbar extends React.Component<INavbarProps, INavbarState> {
  static contextType = ThemeContext;
  private readonly selector: React.RefObject<HTMLHeadElement>;

  public constructor(props: INavbarProps) {
    super(props);
    this.selector = React.createRef<HTMLHeadElement>();
    this.state = {
      transform: false
    }
  }



  public componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({
        transform: window.pageYOffset > (this.selector.current?.getBoundingClientRect().bottom || 100)
      });
    }, false);
  }

  public render() {
    return (
      <header ref={this.selector} className={`custom-navbar ${this.context.theme} ${this.state.transform ? 'opaque' : ''}`}>
        <div className={'main-container'}>
          <div className={'left-container'}>
            { this.props.leftContent }
          </div>
          <div className={'right-container'}>
            { this.props.rightContent }
          </div>
        </div>
      </header>);
  }
}
