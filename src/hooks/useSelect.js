/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { useState } from 'react';
import tw from 'twin.macro';

// Styled Components
const Select = tw.select`block w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded rounded-r-none leading-tight focus:outline-none focus:bg-white focus:border-gray-500`;

const useSelect = (initialState, options) => {

    // Local state
    const [ state, setState ] = useState(initialState);

    const SelectCategory = () => (
        <div css={[`width: 80%;`]} tw="relative">
            <Select
                value={state}
                onChange={ e => setState(e.target.value) }
            >
                { options.map(item => (
                    <option key={item.value} value={item.value}> { item.label } </option>
                )) }
            </Select>
            <div tw="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg tw="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
    )

    return [ state, SelectCategory ];
}
 
export default useSelect;