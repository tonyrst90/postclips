import React from 'react'

const ColoredHeadBody = () => {
    return (
        <tbody>
            <tr>
                <td><code>{'<h1></h1>'}</code></td>
                <td>
                    <h1><span className="txt-primary"> {'Heading 1'}</span> {"Sub Heading"}</h1>
                </td>
            </tr>
            <tr>
                <td><code>{'<h2></h2>'}</code></td>
                <td>
                    <h2><span className="txt-secondary"> {'Heading 1'}</span> {"Sub Heading"}</h2>
                </td>
            </tr>
            <tr>
                <td><code>{'<h3></h3>'}</code></td>
                <td>
                    <h3><span className="txt-success"> {'Heading 1'}</span> {"Sub Heading"}</h3>
                </td>
            </tr>
            <tr>
                <td><code>{'<h4></h4>'}</code></td>
                <td>
                    <h4><span className="txt-info"> {'Heading 1'}</span> {"Sub Heading"}</h4>
                </td>
            </tr>
            <tr>
                <td><code>{'<h5></h5>'}</code></td>
                <td>
                    <h5><span className="txt-warning"> {'Heading 1'}</span> {"Sub Heading"}</h5>
                </td>
            </tr>
            <tr>
                <td className="pb-0"><code>{'<h6></h6>'}</code></td>
                <td className="pb-0">
                    <h5><span className="txt-danger"> {'Heading 1 '}</span> {"Sub Heading"}</h5>
                </td>
            </tr>
        </tbody>
    )
}
export default ColoredHeadBody;