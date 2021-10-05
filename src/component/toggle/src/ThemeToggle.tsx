import Toggle from "../Toggle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './themeToggle.scss';

export default class ThemeToggle extends Toggle {
  protected renderLabel(children?: JSX.Element): JSX.Element {
    return super.renderLabel(<FontAwesomeIcon icon={'adjust'} size={'2x'} className={`rotate-zoom-out ${this.transitioning() ? 'fade' : ''}`}/>);
  }

  private transitioning(): boolean {
    return this.state.checked !== this.state.delayChecked;
  }
}
