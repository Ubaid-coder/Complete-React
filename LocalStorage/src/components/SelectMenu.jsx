
function SelectMenu({
    label,
    id,
    name,
    value,
    onChange,
    options,
    defaultOption,
    error

}) {
    return (
        <>
            <div className="input-container">
                <label htmlFor="category">{label}</label>
                <select
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                   {defaultOption && (
                    <option value='' hidden>
                        {defaultOption}
                    </option>
                   )
                   }

                    {options.map((option, index) => {
                        return(
                            <option key={index} value={option}> {option} </option>
                        )
                    })}
                </select>
                <p className='errors'>{error}</p>
            </div>
        </>
    )
}

export default SelectMenu
