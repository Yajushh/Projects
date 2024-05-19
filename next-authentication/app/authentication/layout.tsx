const SigninLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex flex-col h-full items-center justify-center
      bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
        from-indigo-50 to-blue-950
      "
    >
      {children}
    </div>
  );
};

export default SigninLayout;
