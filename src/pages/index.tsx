import AppShell from '../components/AppShell';
import Dotdotdot from 'react-dotdotdot';
import Link from 'next/link';

function PreviewCard({ number, title, bodyText }) {
    return (
        <Link href="/style/[id]" as={`/style/${number}`}>
            <a>
                <div className="bg-blue-100 border-0 border-indigo-800 px-4 pt-4 pb-3 flex shadow-md">
                    <div className="pr-4 text-orange-600 font-bold">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="mx-auto w-4 h-4">
                            <path
                                fill-rule="evenodd"
                                d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        345
                    </div>
                    <div className="w-full -mt-1">
                        <h3 className="font-semibold text-lg mb-1">{title}</h3>
                        <Dotdotdot clamp={2}>
                            <p>{bodyText}</p>
                        </Dotdotdot>
                        <div className="mt-2 flex text-sm text-gray-700 space-x-1">
                            <div className="underline">#foo</div>
                            <div className="underline">#bar</div>
                            <div className="underline">#baz</div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default function Index({ issues }) {
    return (
        <AppShell>
            <div className="px-4 pt-3 pb-2 bg-gray-100 flex sw-text-blue">
                <svg viewBox="0 0 20 20" fill="currentColor" className=" w-6 h-6">
                    <path
                        fill-rule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
                <div className="pl-3 text-gray-800 font-body">
                    <p>
                        <span className="font-semibold">styles.wiki</span> aims to be a community driven collection of
                        styleguide rules for various technical domains. "Styles" are submitted as GitHub issues and will
                        appear on this web app. You may curate your a list of styles to form a styleguide.
                    </p>
                    <p className="mt-1 text-lg font-semibold">
                        <a
                            className="text-blue-600 underline"
                            href="https://github.com/styles-wiki/techwriting/issues/new"
                        >
                            Submit a new style for techwriting.styles.wiki!
                        </a>
                    </p>
                </div>
            </div>
            <div className="mt-4 font-body">
                <div className="bg-offwhit p-3 max-w-xl mx-auto">
                    <div className="">
                        <div className="pr-3 text-lg font-semibold">
                            <label htmlFor="searchbox">Super search box 2000 (disabled for now):</label>
                        </div>
                        <input id="searchbox" disabled type="text" placeholder="foo" className="w-full px-3 py-2" />
                    </div>
                </div>

                <h2 className="text-4xl font-extrabold sw-text-blue">All styles</h2>
                <div className="mt-1 grid grid-flow-row lg:grid-cols-2 xl:grid-cols-2 gap-4">
                    {issues.map((issue) => {
                        return <PreviewCard key={issue.number} {...issue} />;
                    })}
                </div>
            </div>
        </AppShell>
    );
}
export async function getStaticProps() {
    const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        body: JSON.stringify({
            query: /* GraphQL */ `
                query GetAllIssues($first: Int) {
                    repository(owner: "styles-wiki", name: "techwriting") {
                        issues(first: $first, states: [OPEN], orderBy: { field: CREATED_AT, direction: ASC }) {
                            totalCount
                            nodes {
                                id
                                body
                                bodyText
                                number
                                title
                                reactionGroups {
                                    content
                                    users(first: 0) {
                                        totalCount
                                    }
                                }
                            }
                        }
                    }
                }
            `,
            variables: { first: 100 },
        }),
    });

    const json = await res.json();
    if (res.status !== 200) {
        console.error(json);
        throw new Error('Failed to fetch API');
    }

    return {
        props: {
            issues: json.data.repository.issues.nodes,
        },
        revalidate: 1,
    };
}
