import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getFromLocalStorage } from "./LocalStorageHandler";

const withAuth = (WrappedComponent) => {
  // Return the wrapped component with authentication logic
  return (props) => {
    const router = useRouter();
    useEffect(() => {
      if (
        getFromLocalStorage("accessToken") === null ||
        getFromLocalStorage("accessToken") === undefined
      ) {
        router.push("/authentication/login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
