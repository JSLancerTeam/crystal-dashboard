import defaultBackground from '../assets/images/sidebar-1.jpg';
export const SET_ENABLE_BACKGROUND_IMAGE = 'THEME_OPTIONS/SET_ENABLE_BACKGROUND_IMAGE';
export const SET_BACKGROUND_COLOR = 'THEME_OPTIONS/SET_BACKGROUND_COLOR';
export const SET_BACKGROUND_IMAGE = 'THEME_OPTIONS/SET_BACKGROUND_IMAGE';

export const setEnableBackgroundImage = enableBackgroundImage => ({
  type: SET_ENABLE_BACKGROUND_IMAGE,
  enableBackgroundImage
});

export const setBackgroundColor = backgroundColor => ({
  type: SET_BACKGROUND_COLOR,
  backgroundColor
});

export const setBackgroundImage = backgroundImage => ({
  type: SET_BACKGROUND_IMAGE,
  backgroundImage
});

export default function reducer(state = {
  backgroundColor: 'azure',
  enableBackgroundImage: true,
  backgroundImage: defaultBackground
}, action) {
  switch (action.type) {
    case SET_ENABLE_BACKGROUND_IMAGE:
      return {
        ...state,
        enableBackgroundImage: action.enableBackgroundImage
      };

    case SET_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.backgroundColor
      };

    case SET_BACKGROUND_IMAGE:
      return {
        ...state,
        backgroundImage: action.backgroundImage
      };
  }
  return state;
}