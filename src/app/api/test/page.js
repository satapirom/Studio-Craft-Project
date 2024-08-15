import React from 'react'
import { useSession } from 'next-auth/react'

const Test = () => {
    const { data: session } = useSession()

    console.log(session)

    return (
        <div>page</div>
    )
}

export default Test