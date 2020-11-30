import { EMAIL_FILTER, NAME_FILTER, REMOVE_EMAIL_FILTER } from "./types";

export const middleware = (store) => (next) => (action) => {
  if (action.type === EMAIL_FILTER) {
    if (window.location.hash.includes("emailFilter")) {
      window.location.hash = window.location.hash.replace(
        /emailFilter=(.){0,4}\?/,
        `emailFilter=${action.payload}?`
      );
    } else {
      window.location.hash =
        window.location.hash + `emailFilter=${action.payload}?`;
    }
  }
  if (action.type === NAME_FILTER) {
    if (window.location.hash.includes("nameFilter")) {
      window.location.hash = window.location.hash.replace(
        /nameFilter=(.){0,}\?/,
        `nameFilter=${action.payload}?`
      );
    } else {
      window.location.hash =
        window.location.hash + `nameFilter=${action.payload}?`;
    }
  }

  if (action.type === REMOVE_EMAIL_FILTER) {
    if (window.location.hash.includes("emailFilter")) {
      window.location.hash = window.location.hash.replace(
        /emailFilter=(.){0,}\?/,
        ""
      );
    }
  }
  next(action);
};
