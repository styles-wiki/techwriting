import { forwardRef } from 'react';

const ButtonLink = forwardRef(({ href, onClick, children }, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref}>
            <div className="rounded px-3 pt-2 pb-1 bg-gray-100 hover:bg-purple-100">{children}</div>
        </a>
    );
});

export default ButtonLink;
