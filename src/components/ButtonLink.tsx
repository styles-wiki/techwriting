import { ReactNode, forwardRef } from 'react';

interface Props {
    href?: string;
    onClick?: () => void;
    children: ReactNode;
}

const ButtonLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
    const { href, onClick, children } = props;

    return (
        <a href={href} onClick={onClick} ref={ref}>
            <div className="rounded px-3 pt-2 pb-1 bg-gray-100 hover:bg-purple-100">{children}</div>
        </a>
    );
});

export default ButtonLink;
