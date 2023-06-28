const AuthReducer =(state, action)=>{
    switch(action.type){
        case "LOGIN_START":
            return{
                user:null,
                isFetching: true,
                error: false,
            };

            case "LOGIN_SUCCESS":
               
                localStorage.setItem("user", JSON.stringify(action.payload.user));
                console.log(JSON.stringify(action.payload.user))
                return{
                    ...state,
                    user:action.payload.user,
                    isFetching: false,
                    error: false,
                };

            case "LOGIN_FAILURE":
                return{
                    user:null,
                    isFetching: false,
                    error: action.payload,
                };
            case "LOGOUT":
                localStorage.removeItem("user");
                return {
                    user:null,
                    isFetching:false,
                    error:false
                };
        
        default:
            return state;
    }
};

export default AuthReducer;