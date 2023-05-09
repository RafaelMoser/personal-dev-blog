import {
  Link,
  isRouteErrorResponse,
  useRouteError,
  useNavigate,
} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  let errorMessage: string;
  let errorStatus = 0;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.statusText;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <div className="text-center h-screen bg-slate-600 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-96 h-80 rounded-3xl bg-slate-400 p-10 shadow-md gap-y-4">
        {errorStatus && <h1 className="text-bold text-9xl">{errorStatus}</h1>}
        <p className="">{errorMessage}</p>
        <div className="flex flex-row justify-stretch rounded-xl shadow-md divide-x divide-slate-800 w-80">
          <a
            onClick={() => navigate(-1)}
            className={`text-white font-bold px-4 grow w-40 h-8
          bg-gradient-to-b from-slate-700 via-slate-500 to-slate-700 
          hover:from-slate-700 hover:via-slate-400 hover:to-slate-700 
          active:from-slate-700 active:via-slate-800 active:to-slate-700 
          rounded-l-xl`}
          >
            Back
          </a>
          <Link
            to={"/"}
            className={`text-white font-bold px-4 grow w-40 h-8
          bg-gradient-to-b from-slate-700 via-slate-500 to-slate-700 
          hover:from-slate-700 hover:via-slate-400 hover:to-slate-700 
          active:from-slate-700 active:via-slate-800 active:to-slate-700 
          rounded-r-xl`}
          >
            Front page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
