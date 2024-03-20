import { SignIn } from "@clerk/nextjs";
import type { NextPage } from "next";
import { usePathname } from "next/navigation";

const SignInPage: NextPage = () => {
    const pathname = usePathname()
    return (


        <div className="flex min-h-screen items-center justify-center bg-black">
            <SignIn afterSignInUrl={pathname} afterSignUpUrl={pathname} path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </div>



    )
}
export default SignInPage; 