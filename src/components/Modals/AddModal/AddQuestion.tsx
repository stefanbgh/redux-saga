import { Box, Typography } from '@mui/material'
import { MouseEventHandler } from 'react'

interface IProps {
    handleEvent: MouseEventHandler<HTMLButtonElement>
};

const AddQuestion = ({ handleEvent }: IProps): JSX.Element => {
    return (
        <Box className="mt-4 mb-6 flex items-center">
            <Typography>
                Do you want to add a new administrator?
            </Typography>
            <button 
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 ml-2 rounded focus:outline-none"
                onClick={handleEvent}
            >
                Add
            </button>
        </Box>
  )
}

export default AddQuestion