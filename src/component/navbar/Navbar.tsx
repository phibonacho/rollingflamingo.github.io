import INavbarProps , { INavbarState } from "./INavbar";
import * as React from "react";
import './navbar.scss';

export default class Navbar extends React.Component<INavbarProps, INavbarState> {

    /*
    *     window.addEventListener('scroll', () => {
      console.log(window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      document.body.style.setProperty('--scroll', (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)).toString());
    }, false);
    * */
  private selector: React.RefObject<HTMLHeadElement>;

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
      <header ref={this.selector} className={`custom-navbar ${this.state.transform ? 'alternative-bg' : ''}`}>
        <div className={'main-container'}>
          <div className={'left-container'}>
            <p>phibonachos@2021<span className={'blink'}>_</span></p>
          </div>
          <div className={'right-container'}>
            <p>I am right container content</p>
          </div>
        </div>
      </header>);
  }
}
