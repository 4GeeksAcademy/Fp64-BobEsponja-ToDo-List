import React from "react";
import List from "@mui/material/List";


const TaskList = ({ renderedList }) => {
    return (
        <List className='List' sx={{ width: '100%', maxWidth: 360, color:'white' }}>
            {renderedList}
        </List>
    );
}

export default TaskList;
