
function Label({ children, tamanho, cor}){
    const labelStyles = {
    fontSize: tamanho === "pequeno" ? '32px' : tamanho === 'grande' ? '48px' : null,
    backgroundColor: cor,
    padding: '5px',
    }

    return(
        <button style={labelStyles}>
            {children}
        </button>
    )
}

export default Label