import {dispatch} from '../store';

const SWITCH_MODE = 'SWITCH_MODE';
function switchNoteTakingMode(actionData) {
  return {
    type: SWITCH_MODE,
    payload: actionData
  }
}
export const boundSwitchNoteTakingMode = (payload) => dispatch(switchNoteTakingMode(payload))