import Header from './Header';

export default function AppShell({ children }) {
    return (
        <>
            <div className="px-6 sw-bg-gray min-h-full pb-6 pt-4">
                <div className="max-w-screen-xl mx-auto">
                    <Header />
                    <div className="pt-2">{children}</div>
                </div>
            </div>
        </>
    );
}
