import SplashScreen from 'react-native-splash-screen';
import {
  atom,
  DefaultValue,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';

const LOADER_DELAY = 500;
type AppState = {
  loggedIn: boolean;
  user: any;
  token: string | null;
};

const initialState: AppState = {
  loggedIn: false,
  user: undefined,
  token: '',
};

const appAtom = atom({
  key: 'appAtom',
  default: initialState,
  effects_UNSTABLE: [
    ({setSelf}) => {
      console.log({initialState});
      mutateAppState = setSelf;
      (async () => {
        setTimeout(() => {
          SplashScreen.hide();
        }, LOADER_DELAY);
      })();
    },
    ({onSet}) => {
      onSet((_appState) => {
        appState = _appState;
      });
    },
  ],
});

export const useAppState = () => useRecoilState(appAtom);

export const useAppValue = () => useRecoilValue(appAtom);

export const useSetAppState = () => useSetRecoilState(appAtom);

export const useResetAppState = () => useResetRecoilState(appAtom);

let appState: AppState | DefaultValue = initialState;

export const fetchAppState = () => appState;

export let mutateAppState: (
  param:
    | AppState
    | DefaultValue
    | Promise<AppState | DefaultValue>
    | ((param: AppState | DefaultValue) => AppState | DefaultValue),
) => void;
