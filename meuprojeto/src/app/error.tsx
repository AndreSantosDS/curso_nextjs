'use client'
import { useEffect } from "react";
import Link from "next/link"

const Error = ({error, reset}: {error: Error; reset: () => void}) => {
    useEffect(() =>{
        console.log(error)
    },[])
    return(
        <div>
            <h2>Ops algo deu errado!</h2>
            <div>
                <Link href="/">
                    Voltar para página de home
                </Link>
            </div>
        </div>
    )
}

export default Error