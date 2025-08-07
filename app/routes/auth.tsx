import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";

export const meta = () => ([
    { title: 'Resumind | Auth' },
    { name: 'description', content: 'Log into your account' },
])

const Auth = () => {
    const {isLoading,auth} = usePuterStore();
    const location = useLocation();
    const next = location.search.split("next=")[1];
    const navigate = useNavigate();

    useEffect(() => {


        if(auth.isAuthenticated) navigate(next)
    }, [auth.isAuthenticated,next]);


    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex justify-center items-center ">
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-9 bg-white p-10 rounded-2xl">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1>Welcome</h1>
                        <h2>Log In To Continue Your Job Journey</h2>
                    </div>
                    <div>
                        {
                            isLoading ?(
                                <button className="auth-button animate-pulse">Signing you in ....</button>
                            ):(
                                <>
                                    {auth.isAuthenticated ? (
                                        <button className="auth-button" onClick={auth.signOut}>
                                            <p>Log Out</p>
                                        </button>
                                    ):(
                                        <button className="auth-button" onClick={auth.signIn}> <p>Log In</p></button>
                                    )}
                                </>
                            )
                        }
                    </div>
                </section>
            </div>
        </main>
    )
}
export default Auth
