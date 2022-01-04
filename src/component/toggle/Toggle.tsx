import {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';

import IToggleProps from "./IToggle";
import { RootState } from '../../store';
import { toggle } from '../../features/theme/themeSlice';
import './toggle.scss';


export const Toggle = (props: IToggleProps) => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const [ checked, setChecked ] = useState(theme === 'dark');
  const dispatch = useDispatch();

  return <div className={`toggle ${theme}`} role="checkbox" aria-checked={checked} aria-label={props.name} onClick={(event) => {
    dispatch((toggle(!checked)));
    setChecked(!checked);
  }}>
  </div>;
};