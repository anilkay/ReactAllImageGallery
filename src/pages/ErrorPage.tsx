import { useRouteError } from "react-router-dom";

interface ErrorWithMessage {
    message: string;
    statusText?: string;
  }


export default function ErrorPage() {
  const error = useRouteError();

  const errorWithMessage= error as ErrorWithMessage

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-500">
          <i>{errorWithMessage.statusText || errorWithMessage.message}</i>
        </p>
      </div>
    </div>
  );
}