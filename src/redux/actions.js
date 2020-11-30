import {
  DOWNLOAD_COMMENTS,
  EMAIL_FILTER,
  REMOVE_EMAIL_FILTER,
  NAME_FILTER,
} from "./types";

export function downloadComments(comments) {
  return {
    type: DOWNLOAD_COMMENTS,
    payload: comments,
  };
}

export function filterEmail(filterType) {
  return {
    type: EMAIL_FILTER,
    payload: filterType,
  };
}

export function removeEmailFilter() {
  return {
    type: REMOVE_EMAIL_FILTER,
  };
}

export function filterName(filterType) {
  return {
    type: NAME_FILTER,
    payload: filterType,
  };
}
