import { useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Oops! Something went wrong</h1>
            <p>{error.status} : {error.statusText} : {error.data}</p>
        </div>
    )
}

export default Error;