import { components } from "react";
export class ErrorBoundary extends components(
    state={
        hasError:false
    }
    static getDerivedStateFormError(error){
        return(
            hasError:true
        )
    }
    render() {
        if(this.state.hasError == true){
            return <h1>Something went wrong</h1>
        }
        return this.hasError;
    }
)