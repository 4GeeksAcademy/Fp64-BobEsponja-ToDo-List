import PropTypes from "prop-types";
import './Modal.css';
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const Modal = ({ modal, modalState, task, category, setTask, Submit, Cancel, dropDownChange}) => {

    return (
        <>
            {modal && <section className="TaskList">
                <section className='Modal_Container Modal_Appear'>
                    <form action="#">
                        <h1 className='Modal_Title'>Tasks</h1>
                        <div className='Modal_Inputs'>
                            <div className="Input">
                                <span>Set Your Task: </span>
                                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                            </div>
                            <div className="Input">
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="Category">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="Category"
                                            value={category}
                                            label="Category"
                                            onChange={dropDownChange}
                                        >
                                            {category.map((item, index) => (
                                                <MenuItem key={index} value={item}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <section className="Modal_Buttons">
                                {task.trim() !== '' &&
                                    <button className='Submit' onClick={Submit}>Add</button>}
                                <button className='Cancel' onClick={Cancel}>Cancel</button>
                            </section>
                        </div>
                    </form>
                </section>
            </section>}
            {!modal && <section className='Modal_Container Modal_Disappear'></section>}
        </>
    )

}

Modal.propTypes = {
    modal: PropTypes.bool.isRequired,
    modalState: PropTypes.func.isRequired,
    task: PropTypes.string.isRequired,
    setTask: PropTypes.func.isRequired,
    Submit: PropTypes.func.isRequired,
    Cancel: PropTypes.func.isRequired,
}

export default Modal;
