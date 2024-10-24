import SigninForm from "@/components/signin/SigninForm";

const Signin = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[50%] bg-background flex items-center justify-center">
        <div className="w-[500px]">
          <SigninForm />
        </div>
      </div>
      <div className="w-[50%] h-full bg-red-400">d</div>
    </div>
  );
};

export default Signin;
