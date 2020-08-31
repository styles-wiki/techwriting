export default function Header() {
    const repo = `styles-wiki/${process.env.NEXT_PUBLIC_SITE}`;
    const url = `https://${process.env.NEXT_PUBLIC_SITE}.styles.wiki`;

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
            <div className="header flex flex-col py-2 px-4 justify-between md:flex-row">
                <div className="font-russo text-2xl text">
                    <a href={url}>
                        <span>{process.env.NEXT_PUBLIC_SITE}</span>
                        .styles.wiki
                    </a>
                </div>
                <div className="flex md:justify-end py-2 space-x-3">
                    {/* <a href="https://twitter.com/mark_larah">
                        <img
                            src="https://img.shields.io/twitter/follow/mark_larah?label=@mark_larah"
                            alt="Twitter Follow"
                        />
                    </a> */}
                    <a href={`https://github.com/${repo}`}>
                        <img src={`https://img.shields.io/github/stars/${repo}.svg?style=social`} alt="github" />
                    </a>
                </div>
            </div>
        </>
    );
}
