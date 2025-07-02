import React, { ReactElement } from "react";
import { Badge, Button } from "react-bootstrap";

const BadgedButton = (props: {
    count?: number,
    variant?: string,
    accent?: string,
    visible?: boolean,
    onClick?: React.MouseEventHandler,
    onBadgeClick?: React.MouseEventHandler,
    children: ReactElement | string | Array<never>
}) => {
    const hasCount = props.count || props.visible
    return (
        <div>
            <Button
                variant={props.variant ? props.variant : "dark"}
                onClick={props.onClick}
            >
                <span className={hasCount ? "me-2" : ""}>
                    {props.children ? props.children : ""}
                </span>
                {
                    hasCount &&
                    <Badge
                        className={"text-black"}
                        bg={props.accent ? props.accent : "light"}
                        onClick={props.onBadgeClick}
                    >
                        {props.count}
                    </Badge>
                }
            </Button>
        </div>
    );
}

export default BadgedButton;
