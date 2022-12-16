import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash, edit} from 'react-icons-kit/feather'

const View = ({ list, deleteTodoList, handleEditClick }) => {
    
    return list.map(list => (
        
        <tr key={list.id}>
            <td className='Title-text'>{list.note}</td>
            <td className='Btns'>
                <p className='edit-btn fst-Btn' onClick={() => handleEditClick(list)}>
                    <Icon icon={edit} />
                </p>
                <p className='delete-btn text-center' onClick={() => deleteTodoList(list.id)}>
                    <Icon icon={trash}/>
                </p>           
            </td>
        </tr>            
    
    ))
}

export default View