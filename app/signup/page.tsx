import SignUpButton from '@/components/signup-form/signup-button';
import SignUpForm from '@/components/signup-form/signup-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signup - LocalLoop',
  description: 'Local-loop sign page',
};

function SignUpPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full my-40">
      <div className="mx-auto p-6 bg-white shadow-md rounded-lg max-w-xs w-full sm:w-full xs:w-auto">
        <div className="mb-4">
          <div className="flex items-center">
            <div className="">
              <h2 className="text-4xl text-gray-700  font-medium mt-2">
                Sign up
              </h2>
              <h3 className="text-2xl text-gray-700 font-thin">
                to connect your city
              </h3>
            </div>

          </div>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUpPage;
