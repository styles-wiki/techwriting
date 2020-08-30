import Header from './Header';

export default function AppShell({ children }) {
    return (
        <>
            <div className="p-6 bg-gray-300 min-h-full">
                <div className="max-w-screen-xl mx-auto">
                    <Header />
                    <div className="pt-2">{children}</div>
                </div>
            </div>
        </>
    );
}
