import React from 'react'

const HeadingBody = () => {
    return (
        <tbody>
            <tr>
                <td><code>{"<h1></h1>"}</code></td>
                <td><h1 className="mb-0">{'1.75rem'}</h1></td>
                <td><h1><span>{'Heading 1 (MEGA)'}</span></h1></td>
            </tr>
            <tr>
                <td><code>{"<h2></h2>"}</code></td>
                <td><h2 className="mb-0">{'1.63rem'}</h2></td>
                <td><h2><span> {'Heading 2 (XL)'}</span></h2></td>
            </tr>
            <tr>
                <td><code>{"<h3></h3>"}</code></td>
                <td><h3 className="mb-0">{'1.5rem'}</h3></td>
                <td><h3><span> {'Heading 3 (LARGE)'}</span></h3></td>
            </tr>
            <tr>
                <td><code>{"<h4></h4>"}</code></td>
                <td><h4 className="mb-0">{'1.25rem'}</h4></td>
                <td><h4><span> {'Heading 4 (MEDIUM)'}</span></h4></td>
            </tr>
            <tr>
                <td><code>{"<h5></h5>"}</code></td>
                <td><h5 className="mb-0">{'1rem'}</h5></td>
                <td><h5><span> {'Heading 5 (SMALL)'}</span></h5></td>
            </tr>
            <tr>
                <td className="pb-0"><code>{"<h6></h6>"}</code></td>
                <td className="pb-0"><h6 className="mb-0">{'0.94rem'}</h6></td>
                <td className="pb-0"><h5><span>{'Heading 6'}</span></h5></td>
            </tr>
        </tbody>
    )
}
export default HeadingBody;