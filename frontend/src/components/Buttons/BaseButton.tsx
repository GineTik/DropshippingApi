
export interface BaseButtonProps {
    children: any
    className?: string
    onClick?: (e: any) => void
    href?: string
    as?: React.ElementType
}

const BaseButton = ({children, className, onClick, href, ...props}: BaseButtonProps) => {
    if (props.as == null) props.as = "button"

    return (
        <props.as 
            className={className}
            href={href}
            onClick={(e: { preventDefault: () => void }) => {
                props.as === 'button' && e.preventDefault()
                onClick && onClick(e)
            }}
        >
            {children}
        </props.as>
    )
}

export default BaseButton
