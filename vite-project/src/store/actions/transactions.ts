export const addUserAction = (payload: any) => ({
    type: "ADD_USER",
    payload: payload,
  });
  
  export const removeUserAction = (payload: string) => ({
    type: "REMOVE_USER",
    payload: payload,
  });