import { SignUp } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import type { NextPage } from "next";

const SignUpPage: NextPage = () => {
    const pathname = usePathname()
    return (

        <div className="flex min-h-screen items-center justify-center bg-black">
            <SignUp afterSignInUrl={pathname} afterSignUpUrl={pathname} path="/sign-up" routing="path" signInUrl="/sign-in" />
        </div>

    )
};
export default SignUpPage;