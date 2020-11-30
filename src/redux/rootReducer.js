import {
  DOWNLOAD_COMMENTS,
  EMAIL_FILTER,
  REMOVE_EMAIL_FILTER,
  NAME_FILTER,
} from "./types";

function getDefaultParams() {
  let items = {};
  const filters = window.location.hash.split("?").filter(f => f !== "#")
  items.eF = filters.filter(f => f.includes('emailFilter')).join('').replace('emailFilter=', '').replace('#', "")
  items.nF = decodeURI(filters.filter(f => f.includes('nameFilter')).join('').replace('nameFilter=', '')).replace('#', "")
  return items;
}

const initialState = {
  comments: [],
  visibleComments: [],
  emailFilter: getDefaultParams().eF,
  nameFilter: getDefaultParams().nF,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_COMMENTS: {
      let result = {};
      state.nameFilter || state.emailFilter
        ? (result = {
            ...state,
            comments: [...state.comments, ...action.payload],
            visibleComments: [
              ...state.visibleComments,
              ...action.payload
                .filter((comment) =>
                  comment.name
                    .toLowerCase()
                    .includes(state.nameFilter.toLowerCase())
                )
                .filter((comment) => comment.email.endsWith(state.emailFilter)),
            ],
          })
        : (result = {
            ...state,
            comments: [...state.comments, ...action.payload],
            visibleComments: [...state.visibleComments, ...action.payload],
          });
      return result;
    }
    case EMAIL_FILTER: {
      let result = {};
      state.nameFilter === ""
        ? (result = {
            ...state,
            visibleComments: [
              ...state.comments.filter((comment) =>
                comment.email.endsWith(action.payload)
              ),
            ],
            emailFilter: action.payload,
          })
        : (result = {
            ...state,
            visibleComments: [
              ...state.comments
                .filter((comment) =>
                  comment.name
                    .toLowerCase()
                    .includes(state.nameFilter.toLowerCase())
                )
                .filter((comment) => comment.email.endsWith(action.payload)),
            ],
            emailFilter: action.payload,
          });
      return result;
    }
    case REMOVE_EMAIL_FILTER: {
      let result = {};
      state.nameFilter === ""
        ? (result = {
            ...state,
            visibleComments: [...state.comments],
            emailFilter: "",
          })
        : (result = {
            ...state,
            visibleComments: [
              ...state.comments.filter((comment) =>
                comment.name
                  .toLowerCase()
                  .includes(state.nameFilter.toLowerCase())
              ),
            ],
            emailFilter: "",
          });
      return result;
    }
    case NAME_FILTER: {
      let result = {};
      state.emailFilter === ""
        ? (result = {
            ...state,
            visibleComments: [
              ...state.comments.filter((comment) =>
                comment.name
                  .toLowerCase()
                  .includes(action.payload.toLowerCase())
              ),
            ],
            nameFilter: action.payload,
          })
        : (result = {
            ...state,
            visibleComments: [
              ...state.comments
                .filter((comment) =>
                  comment.name
                    .toLowerCase()
                    .includes(action.payload.toLowerCase())
                )
                .filter((comment) => comment.email.endsWith(state.emailFilter)),
            ],
            nameFilter: action.payload,
          });
      return result;
    }
    default:
      return state;
  }
};
