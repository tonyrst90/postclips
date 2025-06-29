import React from 'react'

const GridTableBody = () => {
    return (
        <tbody>
            <tr>
                <th className="text-nowrap" scope="row">{'Grid behavior'}</th>
                <td>{'Horizontal at all times'}</td>
                <td colSpan={5}>{'Collapsed to start, horizontal above breakpoints'}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{'Max container width'}</th>
                <td>{'None (auto)'}</td>
                <td>{'540px'}</td>
                <td>{'720px'}</td>
                <td>{'960px'}</td>
                <td>{'1140px'}</td>
                <td>{'1320px'}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{'Class prefix'}</th>
                <td><code>{'.col-'}</code></td>
                <td><code>{'.col-sm-'}</code></td>
                <td><code>{'.col-md-'}</code></td>
                <td><code>{'.col-lg-'}</code></td>
                <td><code>{'.col-xl-'}</code></td>
                <td><code>{'.col-xxl-'}</code></td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{'# of columns'}</th>
                <td colSpan={6}>{'12'}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{'Gutter width'}</th>
                <td colSpan={6}>{'1.5rem (.75rem on left and right)'}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{'Nestable'}</th>
                <td colSpan={6}>{'Yes'}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{'Offsets'}</th>
                <td colSpan={6}>{'Yes'}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{'Column ordering'}</th>
                <td colSpan={6}>{'Yes'}</td>
            </tr>
        </tbody>
    )
}
export default GridTableBody;