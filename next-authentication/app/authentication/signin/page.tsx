import { CardWrapper } from "@/utils/CardWrapper";
import { Header } from "@/utils/Header";

const page = () => {
  return (
    <div>
      <CardWrapper
        headerLabel="Welcome Back Friend"
        backButtonString="Don't Have An Account ?"
        backButtonHref="/authentication/register"
        showSocial
      >
        Login Form
      </CardWrapper>
    </div>
  );
};

export default page;
