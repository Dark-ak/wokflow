/* eslint-disable react/prop-types */

import { Handle, Position } from '@xyflow/react'
import Toolbar from '../toolbar'
import chroma from 'chroma-js'
import graphHover from "../../utils/hover"

const OutNode = ({ id, data }) => {
    const hover = graphHover((state) => state.hover)

    return (
        <div className='min-w-32 min-h-14 rounded border bg-orange-200 border-orange-500 text-white flex items-center justify-center shadow' style={{ backgroundColor: data.color, borderWidth: hover == id ? 2 : 1, borderColor: hover == id ? "green" : chroma(data.color).darken(0.8).hex() }}>
            <Handle
                type="target"
                position="top"
                id="out-target"

            />
            <Handle type="source" position={Position.Bottom} id='out-source' />
            <Toolbar id={id} data={data} />
            {data.label}
        </div>
    )
}

export default OutNode