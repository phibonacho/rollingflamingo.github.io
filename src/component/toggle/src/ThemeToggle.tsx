import Toggle from "../Toggle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

import './themeToggle.scss';

export default class ThemeToggle extends Toggle {
  protected renderLabel(children?: JSX.Element): JSX.Element {
    let icon = (this.context.theme === 'dark' ? 'sun' : 'moon') as IconProp;
    return super.renderLabel(<FontAwesomeIcon icon={icon} size={'2x'}/>);
  }
}
