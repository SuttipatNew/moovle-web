import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationExampleShorthand = (props) => (
    // <div style={{textAlign:'center'}}>
        <Pagination
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            activePage={props.activePage}
            totalPages={props.totalPages}
            onPageChange={props.onPageChange}
        />
    // </div>
)

export default PaginationExampleShorthand