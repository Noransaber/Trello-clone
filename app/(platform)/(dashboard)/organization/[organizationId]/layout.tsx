
import React from 'react'
import OrgControl from '../../_component/OrgControl'


const OrganizationIdLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <>
            <OrgControl />
            {children}
                </>
  )
}

export default OrganizationIdLayout
