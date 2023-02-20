export interface IDataType   {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}


export type PostReducerStateType = {
  loading: boolean;
  post: IDataType;
  error: boolean;
};

export type PostActions = {
  type: 'FETCH_START' | 'FETCH_SUCCESS' | 'FETCH_ERROR';
  payload: IDataType;
};



export const PostReducer = (
  state: PostReducerStateType,
  action: PostActions
) => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        loading: true,
        error: false,
        post: {},
      };
    case 'FETCH_SUCCESS':
      return {
        ...state, // This represents unchanged values(error: false)
        loading: false,
        post: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: true,
        post: {},
      };

    default:
      return state;
  }
};
