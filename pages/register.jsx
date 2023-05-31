import Head from "next/head";
import Layout from "@/layout/layout";
import Link from "next/link";
import Image from "next/image";
import GiHubLogo from "@/public/github-logo.png";
import { signIn, signOut } from "next-auth/react";

const Register = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Register</title>
        </Head>
        <div>
          <title>Register</title>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 w-screen py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-14 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create New Account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="username"
                      autoComplete="username"
                      placeholder="username"
                      required
                      className="px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
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
                    className="flex w-full mt-9 justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Already hava an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  {" "}
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Register;
