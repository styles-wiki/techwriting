export default function Header() {
    return (
        <>
            <style jsx>{`
                .header {
                    background: #226ce0;
                }

                .text {
                    color: #f6f3f7;
                }
            `}</style>
            <div className="pt-3 mb-2">
                <div className="flex justify-end">
                    <div>@mark_larah</div>
                </div>
                <div className="header flex py-2 px-3">
                    <div className="font-russo text-2xl text">
                        <span>techwriting</span>.styles.wiki
                    </div>
                </div>
            </div>
        </>
    );
}