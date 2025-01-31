const LoginTemplate = () => {
  return (
    <div className="p-8 glass-card rounded-lg max-w-2xl mx-auto mt-24">
      <h2 className="text-2xl font-bold mb-6">OTP Verification Email</h2>
      <div className="space-y-6">
        <div className="p-6 bg-white/5 rounded-lg">
          <h3 className="text-xl mb-4">Verify Your Email</h3>
          <p className="text-gray-300 mb-4">
            Thank you for signing up! Please use the following OTP to verify your email address:
          </p>
          <div className="bg-white/10 p-4 rounded-md text-center text-2xl font-mono tracking-wider mb-4">
            123456
          </div>
          <p className="text-sm text-gray-400">
            This OTP will expire in 10 minutes. If you did not request this verification, please ignore this email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;