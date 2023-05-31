import Head from "next/head";
import Layout from "@/layout/layout";
import Link from "next/link";
import Image from "next/image";
import GiHubLogo from "@/public/github-logo.png";
import { signIn, signOut } from "next-auth/react";

const Login = () => {
  async function handleGoogleSignIn() {
    // await signIn("google");
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }
  return (
    <>
      <Layout>
        <Head>
          <title>Login</title>
        </Head>
        <div className="flex min-h-full flex-1 flex-col justify-center w-screen overflow-hidden py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    autoComplete="email"
                    required
                    className="px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password"
                    autoComplete="current-password"
                    required
                    className="px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full mt-9 justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Login
                </button>
                <div className="flex flex-row justify-center item-center mt-8">
                  <div class=" bg-gray-200 w-full h-2"></div>
                  <p className="mx-3 -mt-3 text-black">or</p>
                  <div class=" bg-gray-200 w-full h-2"></div>
                </div>
              </div>
            </form>
            <button
              type="submit"
              className="flex w-full mt-5 justify-center item-center gap-4 rounded-md bg-indigo-00 px-3 py-3 text-sm font-semibold leading-6 text-gray-400 ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-indigo-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleGoogleSignIn}>
              <p>Sign in with Google</p>
              <Image
                src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                width={20}
                height={20}
                alt="Picture of the author"
              />
            </button>
            <button
              type="submit"
              className="flex w-full mt-5 justify-center item-center gap-4 rounded-md bg-indigo-00 px-3 py-3 text-sm font-semibold leading-6 text-gray-400 ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-indigo-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <p>Sign in with GitHub</p>
              <Image
                src={GiHubLogo}
                width={20}
                height={20}
                alt="Picture of the author"
              />
            </button>

            <p className="mt-4 text-center text-sm text-gray-500">
              Don't hava account yet?{" "}
              <Link
                href="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                {" "}
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
