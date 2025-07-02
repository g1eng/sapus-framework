import React, { ReactElement } from "react";
declare const BadgedButton: (props: {
    count?: number;
    variant?: string;
    accent?: string;
    visible?: boolean;
    onClick?: React.MouseEventHandler;
    onBadgeClick?: React.MouseEventHandler;
    children: ReactElement | string | Array<never>;
}) => import("react/jsx-runtime").JSX.Element;
export default BadgedButton;
