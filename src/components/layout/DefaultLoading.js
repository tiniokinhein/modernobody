import React from 'react'
import BarLoader from 'react-spinners/BarLoader'
import { COLOR } from './Color'

const DefaultLoading = () => {

    const cssName = {
        layout: {
            margin: '0 auto',
            width: '30px',
            display: 'block'
        }
    }

    return (
        <div
            className="position-fixed"
            style={{
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 999999,
                background: '#000'
            }}
        >
            <div className="d-table w-100 h-100 position-relative">
                <div className="d-table-cell align-middle">
                    <BarLoader
                        css={cssName.layout}
                        color={COLOR.L}
                    />
                </div>
            </div>
        </div>
    )
}

export default DefaultLoading
