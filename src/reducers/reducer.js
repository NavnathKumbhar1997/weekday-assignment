
import { combineReducers } from 'redux';
import {
  SET_FILTER,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from '../actions/action';

const initialFilterState = {
  minExperience: '',
  companyName: '',
  location: '',
  remote: false,
  // Add initial state for other filters as needed
};

const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        [action.payload.filterName]: action.payload.value,
      };
    default:
      return state;
  }
};

const initialJobsState = {
  jobs: [],
  isLoading: false,
  error: null,
};

const jobsReducer = (state = initialJobsState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: [...state.jobs, ...action.payload],
        isLoading: false,
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  filter: filterReducer,
  jobs: jobsReducer,
});

export default rootReducer;
