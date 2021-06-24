import * as React from "react";
import INavbarProps , { INavbarState } from "./INavbar";
import './navbar.scss';

export default class Navbar extends React.Component<INavbarProps, INavbarState> {
  private readonly selector: React.RefObject<HTMLHeadElement>;

  public constructor(props: INavbarProps) {
    super(props);
    this.selector = React.createRef<HTMLHeadElement>();
    this.state = {
      transform: false
    }

    this.scrollHandler = this.scrollHandler.bind(this);
  }

  private scrollHandler() {
    if(window.pageYOffset > 100)
      this.setState({
        transform: true
      });
    else
      this.setState({
        transform: false
      });
  }

  public async componentDidMount() {
      window.addEventListener('scroll', this.scrollHandler, false);
  }

  public async componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler, false);
  }

  public render() {
    return (
      <header ref={this.selector} className={`custom-navbar ${this.state.transform? 'bg-white' : 'bg-transparent'}`}>
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
