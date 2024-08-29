'use client';
//import { useFormState } from 'react';
import Link from 'next/link';

//import { authenticate } from '../../actions/auth/auth-actions';

import LoginButton from './login-button';
import InputField from '../elements/input-fields/input-fields';
import { createClient } from '@/utils/supabase/client';
import Banner from '../elements/banner/banner';
import { useState } from 'react';
import { redirect } from 'next/navigation';
//import Banner from '../elements/banner/banner';

export default function LoginForm() {
  const [formState, setFormState] = useState({ error: '' });
  const supabase = createClient();

  const signIn = async (formData: FormData) => {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const { data,error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    });
    console.log(data);
    if (error) {
      setFormState({ error: error.message });
    }
    redirect('/home');
  };

  return (
    <div className="mx-auto">
      <div className="h-10 mb-2">
        {formState && formState.error && (
          <Banner
            message={formState.error}
            showBanner={true}
            setShowBanner={() => {}}
          />
        )}
      </div>
      <form
        action={signIn}
        className=""
        role="form"
        data-testid="login-form"
      >
        <InputField
          label="Username"
          type="text"
          id="username"
          name="username"
          placeholder="John Doe"
          className="mb-4"
          required
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="***********"
          className="mb-1"
          required
        />
        <div className="mb-6">
          <Link
            data-testid="forgot-password"
            href="/forgot-password"
            className="text-sm text-indigo-600"
          >
            Forgot password?
          </Link>
        </div>
        <LoginButton />
        <hr className="my-4 border-gray-200" />
        <div className="">
          <p className="text-sm text-gray-600">
            {"Don't have an account ? "}
            <Link
              href="/signup"
              className="text-indigo-600 hover:underline"
            >
              Signup
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
