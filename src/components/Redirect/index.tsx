import { ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"

export interface RedirectProps {
    from: string | string[]
    to: string
    children?: ReactNode
    auth?: boolean
}

export default function Redirect(props: RedirectProps) {
    const { from, to, children } = props
    const location = useLocation()

    return (typeof from === "string" ? location.pathname === from : from.includes(location.pathname)) ? <Navigate to={to} replace={true} /> : <>{children}</>
}
