
function Label({ children, tamanho, cor}){
    const labelStyles = {
    fontSize: tamanho === "pequeno" ? '32px' : tamanho === 'grande' ? '48px' : null,
    backgroundColor: cor,
    }

    return(
        <div style={labelStyles}>
            {children}
        </div>
    )
}

export default Label