
export interface BaseButtonProps {
    children: any
    className?: string
    onClick?: () => void
    href?: string
    as?: React.ElementType
}

const BaseButton = (props: BaseButtonProps) => {
    return (
        <div onClick={props.onClick}>
            {props.as && <props.as 
                className={props.className}
                href={props.href}
            >
                {props.children}
            </props.as>}
        </div>
    )
}

BaseButton.defaultProps  = {
    as: "button"
}

export default BaseButton
