
export interface BaseButtonProps {
    children: any
    className?: string
    onClick?: () => void
    href?: string
    as?: React.ElementType
}

const BaseButton = ({children, className, onClick, href, ...props}: BaseButtonProps) => {
    if (props.as == null) props.as = "button"

    return (
        <props.as 
            className={className}
            href={href}
            onClick={onClick}
        >
            {children}
        </props.as>
    )
}

export default BaseButton
