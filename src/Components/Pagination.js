import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationExampleShorthand = () => (
    // <div style={{textAlign:'center'}}>
        <Pagination
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={3}
        />
    // </div>
)

export default PaginationExampleShorthand