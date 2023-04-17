const CrudTableRowH = ({ el, setDataToEdit }) => {
    let { procedimientos, fechaProcedimiento, tratamientos} = el;
    return (
        <tr>
            <td>{procedimientos}</td>
            <td>{fechaProcedimiento}</td>
            <td>{tratamientos}</td>
            <td>
                <button className='button_edit_eli' onClick={() => setDataToEdit(el)}>Editar</button>
            </td>
        </tr>
    )
}

export default CrudTableRowH;