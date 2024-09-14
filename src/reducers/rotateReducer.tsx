export default (state:any, action:any) => {
    switch (action.type) {
      case "rotate":
          debugger
        return {
          rotating: action.payload
        };
      default:
        return state;
    }
  };