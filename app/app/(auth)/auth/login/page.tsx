import { LogInForm } from  '../../../../components/forms/login-form'

export default function Page() {
    return (
        <div className="w-full flex min-h-screen items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-md">
                <LogInForm />
            </div>
        </div>
    );
}