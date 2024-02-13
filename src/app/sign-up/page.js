import SignupPage from "@/pages/SignupPage";

export const metadata = {
  title: `Taquilla Central Sign Up`,
  openGraph: {
    title: `Taquilla Central Sign Up`,
    locale: "es_ES",
    type: "website",
    url: `https://www.taquillacentral.com/sign-up`,
  },
  alternates: {
    canonical: `https://www.taquillacentral.com/sign-up`,
  },
};

const SignUpPage = () => {
  return <SignupPage />;
};

export default SignUpPage;
